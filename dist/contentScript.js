/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
// TODO: content script
const columns = ['#UserId'];
columns.forEach(id => {
    const target = document.querySelector(id);
    if (target) {
        target.value = 'SODADM';
    }
});
//取出畫面上取出畫面上所有Input
const autoFillInput = (data) => {
    const inputList = document.querySelectorAll('input');
    if (inputList.length <= 0) {
        return;
    }
    //淺拷貝到陣列中
    const inputArray = [...inputList];
    //把值塞進對應的Input（這裡是針對沒有ID的處理）
    inputArray.forEach((e, i) => {
        //if e.name includes data.key then e.value set to data.value
        data.forEach((d) => {
            if (e.name.includes(d.key)) {
                e.value = d.value;
            }
        });
        // const targetName: string = e.name
        // //檢查每一個name
        // if(targetName.includes('StartDate')){
        //   //符合這邊塞值進去
        //   //TODO:要塞入的資料可以讓user自己填入，資料存background.ts
        //   e.value = '111/09/09'
        // }
        // if(targetName.includes('EndDate')){
        //   e.value = '112/03/14'
        // }
    });
};
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.getAutoFill) {
        console.log('Fill Selected Input !', request.data);
        autoFillInput(request.data);
    }
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudFNjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9jb250ZW50U2NyaXB0L2NvbnRlbnRTY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFRPRE86IGNvbnRlbnQgc2NyaXB0XG5jb25zdCBjb2x1bW5zID0gWycjVXNlcklkJ107XG5jb2x1bW5zLmZvckVhY2goaWQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnZhbHVlID0gJ1NPREFETSc7XG4gICAgfVxufSk7XG4vL+WPluWHuueVq+mdouS4iuWPluWHuueVq+mdouS4iuaJgOaciUlucHV0XG5jb25zdCBhdXRvRmlsbElucHV0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGlmIChpbnB1dExpc3QubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvL+a3uuaLt+iyneWIsOmZo+WIl+S4rVxuICAgIGNvbnN0IGlucHV0QXJyYXkgPSBbLi4uaW5wdXRMaXN0XTtcbiAgICAvL+aKiuWAvOWhnumAsuWwjeaHieeahElucHV077yI6YCZ6KOh5piv6Yed5bCN5rKS5pyJSUTnmoTomZXnkIbvvIlcbiAgICBpbnB1dEFycmF5LmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgICAgLy9pZiBlLm5hbWUgaW5jbHVkZXMgZGF0YS5rZXkgdGhlbiBlLnZhbHVlIHNldCB0byBkYXRhLnZhbHVlXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGUubmFtZS5pbmNsdWRlcyhkLmtleSkpIHtcbiAgICAgICAgICAgICAgICBlLnZhbHVlID0gZC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnN0IHRhcmdldE5hbWU6IHN0cmluZyA9IGUubmFtZVxuICAgICAgICAvLyAvL+aqouafpeavj+S4gOWAi25hbWVcbiAgICAgICAgLy8gaWYodGFyZ2V0TmFtZS5pbmNsdWRlcygnU3RhcnREYXRlJykpe1xuICAgICAgICAvLyAgIC8v56ym5ZCI6YCZ6YKK5aGe5YC86YCy5Y67XG4gICAgICAgIC8vICAgLy9UT0RPOuimgeWhnuWFpeeahOizh+aWmeWPr+S7peiuk3VzZXLoh6rlt7HloavlhaXvvIzos4fmlpnlrZhiYWNrZ3JvdW5kLnRzXG4gICAgICAgIC8vICAgZS52YWx1ZSA9ICcxMTEvMDkvMDknXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYodGFyZ2V0TmFtZS5pbmNsdWRlcygnRW5kRGF0ZScpKXtcbiAgICAgICAgLy8gICBlLnZhbHVlID0gJzExMi8wMy8xNCdcbiAgICAgICAgLy8gfVxuICAgIH0pO1xufTtcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVxdWVzdC5nZXRBdXRvRmlsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnRmlsbCBTZWxlY3RlZCBJbnB1dCAhJywgcmVxdWVzdC5kYXRhKTtcbiAgICAgICAgYXV0b0ZpbGxJbnB1dChyZXF1ZXN0LmRhdGEpO1xuICAgIH1cbn0pO1xuZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9