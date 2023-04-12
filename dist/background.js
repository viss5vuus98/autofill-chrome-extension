/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getColumnsData": () => (/* binding */ getColumnsData),
/* harmony export */   "getStorage": () => (/* binding */ getStorage),
/* harmony export */   "setColumnsData": () => (/* binding */ setColumnsData),
/* harmony export */   "setStorage": () => (/* binding */ setStorage)
/* harmony export */ });
function setStorage(data) {
    const setData = {
        data,
    };
    return new Promise((resolve) => {
        chrome.storage.local.set(setData, () => {
            resolve();
        });
    });
}
function getStorage() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['data'], (res) => {
            resolve(res.data);
        });
    });
}
function setColumnsData(data) {
    return new Promise((resolve) => {
        chrome.storage.local.set({ columns: data }, () => {
            resolve();
        });
    });
}
function getColumnsData() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['columns'], (res) => {
            const columnsData = res.columns ? res.columns : [];
            console.log('res:', columnsData);
            resolve(columnsData);
        });
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/storage */ "./src/utils/storage.ts");

// TODO: background script
chrome.runtime.onInstalled.addListener(() => {
    // TODO: on installed function
    console.log('autofill-extension on installed');
    chrome.contextMenus.create({
        id: 'autoFillBtn',
        title: 'GetPageAutoFill',
        contexts: ['all'],
    });
    chrome.contextMenus.create({
        id: 'autoFillClear',
        title: 'ClearAutoFillData',
        contexts: ['all'],
    });
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId !== 'autoFillBtn') {
        return;
    }
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        if (tabs.length <= 0) {
            return;
        }
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_0__.getStorage)().then((res) => {
            console.log("res:", res);
            const target = tabs[0].id;
            chrome.tabs.sendMessage(target, { getAutoFill: true, data: res });
        });
    });
    //const response = chrome.tabs.sendMessage(tab.id, {getAutoFill: true});
    // do something with response here, not outside the function
});
/// clear storage
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId !== 'autoFillClear') {
        return;
    }
    chrome.storage.local.clear();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUNBQXVDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQVU7QUFDbEI7QUFDQTtBQUNBLDhDQUE4Qyw4QkFBOEI7QUFDNUUsU0FBUztBQUNULEtBQUs7QUFDTCx3REFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3V0aWxzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzZXRTdG9yYWdlKGRhdGEpIHtcbiAgICBjb25zdCBzZXREYXRhID0ge1xuICAgICAgICBkYXRhLFxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChzZXREYXRhLCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2RhdGEnXSwgKHJlcykgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbHVtbnNEYXRhKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgY29sdW1uczogZGF0YSB9LCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbHVtbnNEYXRhKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydjb2x1bW5zJ10sIChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbnNEYXRhID0gcmVzLmNvbHVtbnMgPyByZXMuY29sdW1ucyA6IFtdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlczonLCBjb2x1bW5zRGF0YSk7XG4gICAgICAgICAgICByZXNvbHZlKGNvbHVtbnNEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICcuLi91dGlscy9zdG9yYWdlJztcbi8vIFRPRE86IGJhY2tncm91bmQgc2NyaXB0XG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgLy8gVE9ETzogb24gaW5zdGFsbGVkIGZ1bmN0aW9uXG4gICAgY29uc29sZS5sb2coJ2F1dG9maWxsLWV4dGVuc2lvbiBvbiBpbnN0YWxsZWQnKTtcbiAgICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgICAgIGlkOiAnYXV0b0ZpbGxCdG4nLFxuICAgICAgICB0aXRsZTogJ0dldFBhZ2VBdXRvRmlsbCcsXG4gICAgICAgIGNvbnRleHRzOiBbJ2FsbCddLFxuICAgIH0pO1xuICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICAgICAgaWQ6ICdhdXRvRmlsbENsZWFyJyxcbiAgICAgICAgdGl0bGU6ICdDbGVhckF1dG9GaWxsRGF0YScsXG4gICAgICAgIGNvbnRleHRzOiBbJ2FsbCddLFxuICAgIH0pO1xufSk7XG5jaHJvbWUuY29udGV4dE1lbnVzLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigoaW5mbywgdGFiKSA9PiB7XG4gICAgaWYgKGluZm8ubWVudUl0ZW1JZCAhPT0gJ2F1dG9GaWxsQnRuJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBsYXN0Rm9jdXNlZFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuICAgICAgICBpZiAodGFicy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGdldFN0b3JhZ2UoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzOlwiLCByZXMpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGFic1swXS5pZDtcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhcmdldCwgeyBnZXRBdXRvRmlsbDogdHJ1ZSwgZGF0YTogcmVzIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvL2NvbnN0IHJlc3BvbnNlID0gY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7Z2V0QXV0b0ZpbGw6IHRydWV9KTtcbiAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCByZXNwb25zZSBoZXJlLCBub3Qgb3V0c2lkZSB0aGUgZnVuY3Rpb25cbn0pO1xuLy8vIGNsZWFyIHN0b3JhZ2VcbmNocm9tZS5jb250ZXh0TWVudXMub25DbGlja2VkLmFkZExpc3RlbmVyKChpbmZvLCB0YWIpID0+IHtcbiAgICBpZiAoaW5mby5tZW51SXRlbUlkICE9PSAnYXV0b0ZpbGxDbGVhcicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5jbGVhcigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=