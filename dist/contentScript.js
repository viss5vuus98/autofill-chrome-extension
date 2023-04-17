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
//TODO: FILL DATA 格式有更新過，這邊需要測試,可能會有問題
//取出畫面上取出畫面上所有Input
const autoFillInput = (data) => {
    const inputList = document.querySelectorAll('input');
    if (inputList.length <= 0) {
        return;
    }
    //淺拷貝到陣列中
    const inputArray = [...inputList];
    //把值塞進對應的Input（這裡是針對沒有ID的處理）
    inputArray.forEach((item) => {
        //if Column is disabled then return
        if (item.enabled === false) {
            return;
        }
        //if e.name includes data.key then e.value set to data.value
        data.forEach((d) => {
            if (item.name.includes(d.key)) {
                item.value = d.value;
            }
        });
    });
};
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.getAutoFill) {
        console.log('Fill Selected Input !', request.fillData);
        autoFillInput(request.fillData);
    }
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudFNjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL2NvbnRlbnRTY3JpcHQvY29udGVudFNjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETzogY29udGVudCBzY3JpcHRcbmNvbnN0IGNvbHVtbnMgPSBbJyNVc2VySWQnXTtcbmNvbHVtbnMuZm9yRWFjaChpZCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQudmFsdWUgPSAnU09EQURNJztcbiAgICB9XG59KTtcbi8vVE9ETzogRklMTCBEQVRBIOagvOW8j+acieabtOaWsOmBju+8jOmAmemCiumcgOimgea4rOippizlj6/og73mnIPmnInllY/poYxcbi8v5Y+W5Ye655Wr6Z2i5LiK5Y+W5Ye655Wr6Z2i5LiK5omA5pyJSW5wdXRcbmNvbnN0IGF1dG9GaWxsSW5wdXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGlucHV0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgaWYgKGlucHV0TGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8v5re65ou36LKd5Yiw6Zmj5YiX5LitXG4gICAgY29uc3QgaW5wdXRBcnJheSA9IFsuLi5pbnB1dExpc3RdO1xuICAgIC8v5oqK5YC85aGe6YCy5bCN5oeJ55qESW5wdXTvvIjpgJnoo6HmmK/ph53lsI3mspLmnIlJROeahOiZleeQhu+8iVxuICAgIGlucHV0QXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAvL2lmIENvbHVtbiBpcyBkaXNhYmxlZCB0aGVuIHJldHVyblxuICAgICAgICBpZiAoaXRlbS5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgZS5uYW1lIGluY2x1ZGVzIGRhdGEua2V5IHRoZW4gZS52YWx1ZSBzZXQgdG8gZGF0YS52YWx1ZVxuICAgICAgICBkYXRhLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUuaW5jbHVkZXMoZC5rZXkpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IGQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVxdWVzdC5nZXRBdXRvRmlsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnRmlsbCBTZWxlY3RlZCBJbnB1dCAhJywgcmVxdWVzdC5maWxsRGF0YSk7XG4gICAgICAgIGF1dG9GaWxsSW5wdXQocmVxdWVzdC5maWxsRGF0YSk7XG4gICAgfVxufSk7XG5leHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=