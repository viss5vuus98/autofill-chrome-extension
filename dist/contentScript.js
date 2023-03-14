/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
// TODO: content script
const columns = ['#UserId'];
columns.forEach(id => {
    const target = document.querySelector(id);
    if (target) {
        target.value = 'SODADM';
    }
});
//取出畫面上取出畫面上所有Input
const autoFillInput = () => {
    const inputList = document.querySelectorAll('input');
    //淺拷貝到陣列中
    const inputArray = [...inputList];
    //把值塞進對應的Input（這裡是針對沒有ID的處理）
    inputArray.forEach((e, i) => {
        const targetName = e.name;
        //檢查每一個name
        if (targetName.includes('StartDate')) {
            //符合這邊塞值進去
            //TODO:要塞入的資料可以讓user自己填入，資料存background.ts
            e.value = '111/09/09';
        }
        if (targetName.includes('EndDate')) {
            e.value = '112/03/01';
        }
    });
};
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.getAutoFill) {
        console.log('Fill Selected Input !');
        autoFillInput();
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL2NvbnRlbnRTY3JpcHQvY29udGVudFNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJjb250ZW50U2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETzogY29udGVudCBzY3JpcHRcbmNvbnN0IGNvbHVtbnMgPSBbJyNVc2VySWQnXTtcbmNvbHVtbnMuZm9yRWFjaChpZCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQudmFsdWUgPSAnU09EQURNJztcbiAgICB9XG59KTtcbi8v5Y+W5Ye655Wr6Z2i5LiK5Y+W5Ye655Wr6Z2i5LiK5omA5pyJSW5wdXRcbmNvbnN0IGF1dG9GaWxsSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAvL+a3uuaLt+iyneWIsOmZo+WIl+S4rVxuICAgIGNvbnN0IGlucHV0QXJyYXkgPSBbLi4uaW5wdXRMaXN0XTtcbiAgICAvL+aKiuWAvOWhnumAsuWwjeaHieeahElucHV077yI6YCZ6KOh5piv6Yed5bCN5rKS5pyJSUTnmoTomZXnkIbvvIlcbiAgICBpbnB1dEFycmF5LmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0TmFtZSA9IGUubmFtZTtcbiAgICAgICAgLy/mqqLmn6Xmr4/kuIDlgItuYW1lXG4gICAgICAgIGlmICh0YXJnZXROYW1lLmluY2x1ZGVzKCdTdGFydERhdGUnKSkge1xuICAgICAgICAgICAgLy/nrKblkIjpgJnpgorloZ7lgLzpgLLljrtcbiAgICAgICAgICAgIC8vVE9ETzropoHloZ7lhaXnmoTos4fmlpnlj6/ku6XorpN1c2Vy6Ieq5bex5aGr5YWl77yM6LOH5paZ5a2YYmFja2dyb3VuZC50c1xuICAgICAgICAgICAgZS52YWx1ZSA9ICcxMTEvMDkvMDknO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXROYW1lLmluY2x1ZGVzKCdFbmREYXRlJykpIHtcbiAgICAgICAgICAgIGUudmFsdWUgPSAnMTEyLzAzLzAxJztcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVxdWVzdC5nZXRBdXRvRmlsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnRmlsbCBTZWxlY3RlZCBJbnB1dCAhJyk7XG4gICAgICAgIGF1dG9GaWxsSW5wdXQoKTtcbiAgICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=