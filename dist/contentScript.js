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
        const targetElementPattern = new RegExp(`^${item.name}$`);
        data.forEach((d) => {
            if (targetElementPattern.test(d.key)) {
                item.value = d.value;
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
        console.log('Fill Selected Input !', request.fillData);
        autoFillInput(request.fillData);
    }
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudFNjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxVQUFVO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDUyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvY29udGVudFNjcmlwdC9jb250ZW50U2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUT0RPOiBjb250ZW50IHNjcmlwdFxuY29uc3QgY29sdW1ucyA9IFsnI1VzZXJJZCddO1xuY29sdW1ucy5mb3JFYWNoKGlkID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC52YWx1ZSA9ICdTT0RBRE0nO1xuICAgIH1cbn0pO1xuLy9UT0RPOiBGSUxMIERBVEEg5qC85byP5pyJ5pu05paw6YGO77yM6YCZ6YKK6ZyA6KaB5ris6KmmLOWPr+iDveacg+acieWVj+mhjFxuLy/lj5blh7rnlavpnaLkuIrlj5blh7rnlavpnaLkuIrmiYDmnIlJbnB1dFxuY29uc3QgYXV0b0ZpbGxJbnB1dCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgaW5wdXRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBpZiAoaW5wdXRMaXN0Lmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy/mt7rmi7fosp3liLDpmaPliJfkuK1cbiAgICBjb25zdCBpbnB1dEFycmF5ID0gWy4uLmlucHV0TGlzdF07XG4gICAgLy/miorlgLzloZ7pgLLlsI3mh4nnmoRJbnB1dO+8iOmAmeijoeaYr+mHneWwjeaykuaciUlE55qE6JmV55CG77yJXG4gICAgaW5wdXRBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIC8vaWYgQ29sdW1uIGlzIGRpc2FibGVkIHRoZW4gcmV0dXJuXG4gICAgICAgIGlmIChpdGVtLmVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBlLm5hbWUgaW5jbHVkZXMgZGF0YS5rZXkgdGhlbiBlLnZhbHVlIHNldCB0byBkYXRhLnZhbHVlXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnRQYXR0ZXJuID0gbmV3IFJlZ0V4cChgXiR7aXRlbS5uYW1lfSRgKTtcbiAgICAgICAgZGF0YS5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RWxlbWVudFBhdHRlcm4udGVzdChkLmtleSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlID0gZC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnN0IHRhcmdldE5hbWU6IHN0cmluZyA9IGUubmFtZVxuICAgICAgICAvLyAvL+aqouafpeavj+S4gOWAi25hbWVcbiAgICAgICAgLy8gaWYodGFyZ2V0TmFtZS5pbmNsdWRlcygnU3RhcnREYXRlJykpe1xuICAgICAgICAvLyAgIC8v56ym5ZCI6YCZ6YKK5aGe5YC86YCy5Y67XG4gICAgICAgIC8vICAgLy9UT0RPOuimgeWhnuWFpeeahOizh+aWmeWPr+S7peiuk3VzZXLoh6rlt7HloavlhaXvvIzos4fmlpnlrZhiYWNrZ3JvdW5kLnRzXG4gICAgICAgIC8vICAgZS52YWx1ZSA9ICcxMTEvMDkvMDknXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYodGFyZ2V0TmFtZS5pbmNsdWRlcygnRW5kRGF0ZScpKXtcbiAgICAgICAgLy8gICBlLnZhbHVlID0gJzExMi8wMy8xNCdcbiAgICAgICAgLy8gfVxuICAgIH0pO1xufTtcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVxdWVzdC5nZXRBdXRvRmlsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnRmlsbCBTZWxlY3RlZCBJbnB1dCAhJywgcmVxdWVzdC5maWxsRGF0YSk7XG4gICAgICAgIGF1dG9GaWxsSW5wdXQocmVxdWVzdC5maWxsRGF0YSk7XG4gICAgfVxufSk7XG5leHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=