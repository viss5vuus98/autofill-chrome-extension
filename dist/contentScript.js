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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudFNjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL2NvbnRlbnRTY3JpcHQvY29udGVudFNjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETzogY29udGVudCBzY3JpcHRcbmNvbnN0IGNvbHVtbnMgPSBbJyNVc2VySWQnXTtcbmNvbHVtbnMuZm9yRWFjaChpZCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQudmFsdWUgPSAnU09EQURNJztcbiAgICB9XG59KTtcbi8vVE9ETzogRklMTCBEQVRBIOagvOW8j+acieabtOaWsOmBju+8jOmAmemCiumcgOimgea4rOippizlj6/og73mnIPmnInllY/poYxcbi8v5Y+W5Ye655Wr6Z2i5LiK5Y+W5Ye655Wr6Z2i5LiK5omA5pyJSW5wdXRcbmNvbnN0IGF1dG9GaWxsSW5wdXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGlucHV0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgaWYgKGlucHV0TGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8v5re65ou36LKd5Yiw6Zmj5YiX5LitXG4gICAgY29uc3QgaW5wdXRBcnJheSA9IFsuLi5pbnB1dExpc3RdO1xuICAgIC8v5oqK5YC85aGe6YCy5bCN5oeJ55qESW5wdXTvvIjpgJnoo6HmmK/ph53lsI3mspLmnIlJROeahOiZleeQhu+8iVxuICAgIGlucHV0QXJyYXkuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICAvL2lmIGUubmFtZSBpbmNsdWRlcyBkYXRhLmtleSB0aGVuIGUudmFsdWUgc2V0IHRvIGRhdGEudmFsdWVcbiAgICAgICAgZGF0YS5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5uYW1lLmluY2x1ZGVzKGQua2V5KSkge1xuICAgICAgICAgICAgICAgIGUudmFsdWUgPSBkLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc3QgdGFyZ2V0TmFtZTogc3RyaW5nID0gZS5uYW1lXG4gICAgICAgIC8vIC8v5qqi5p+l5q+P5LiA5YCLbmFtZVxuICAgICAgICAvLyBpZih0YXJnZXROYW1lLmluY2x1ZGVzKCdTdGFydERhdGUnKSl7XG4gICAgICAgIC8vICAgLy/nrKblkIjpgJnpgorloZ7lgLzpgLLljrtcbiAgICAgICAgLy8gICAvL1RPRE866KaB5aGe5YWl55qE6LOH5paZ5Y+v5Lul6K6TdXNlcuiHquW3seWhq+WFpe+8jOizh+aWmeWtmGJhY2tncm91bmQudHNcbiAgICAgICAgLy8gICBlLnZhbHVlID0gJzExMS8wOS8wOSdcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZih0YXJnZXROYW1lLmluY2x1ZGVzKCdFbmREYXRlJykpe1xuICAgICAgICAvLyAgIGUudmFsdWUgPSAnMTEyLzAzLzE0J1xuICAgICAgICAvLyB9XG4gICAgfSk7XG59O1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXF1ZXN0LmdldEF1dG9GaWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGaWxsIFNlbGVjdGVkIElucHV0ICEnLCByZXF1ZXN0LmRhdGEpO1xuICAgICAgICBhdXRvRmlsbElucHV0KHJlcXVlc3QuZGF0YSk7XG4gICAgfVxufSk7XG5leHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=