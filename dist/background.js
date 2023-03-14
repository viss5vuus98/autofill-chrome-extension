/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
// TODO: background script
chrome.runtime.onInstalled.addListener(() => {
    // TODO: on installed function
    console.log('autofill-extension on installed');
    chrome.contextMenus.create({
        id: 'autoFillBtn',
        title: 'GetPageAutoFill',
        contexts: ['all'],
    });
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId !== 'autoFillBtn') {
        return;
    }
    chrome.tabs.query({ active: true, lastFocusedWindow: true });
    const response = chrome.tabs.sendMessage(tab.id, { getAutoFill: true });
    // do something with response here, not outside the function
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdDQUF3QztBQUMvRCxzREFBc0Qsb0JBQW9CO0FBQzFFO0FBQ0EsQ0FBQyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETzogYmFja2dyb3VuZCBzY3JpcHRcbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAvLyBUT0RPOiBvbiBpbnN0YWxsZWQgZnVuY3Rpb25cbiAgICBjb25zb2xlLmxvZygnYXV0b2ZpbGwtZXh0ZW5zaW9uIG9uIGluc3RhbGxlZCcpO1xuICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICAgICAgaWQ6ICdhdXRvRmlsbEJ0bicsXG4gICAgICAgIHRpdGxlOiAnR2V0UGFnZUF1dG9GaWxsJyxcbiAgICAgICAgY29udGV4dHM6IFsnYWxsJ10sXG4gICAgfSk7XG59KTtcbmNocm9tZS5jb250ZXh0TWVudXMub25DbGlja2VkLmFkZExpc3RlbmVyKChpbmZvLCB0YWIpID0+IHtcbiAgICBpZiAoaW5mby5tZW51SXRlbUlkICE9PSAnYXV0b0ZpbGxCdG4nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGxhc3RGb2N1c2VkV2luZG93OiB0cnVlIH0pO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7IGdldEF1dG9GaWxsOiB0cnVlIH0pO1xuICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHJlc3BvbnNlIGhlcmUsIG5vdCBvdXRzaWRlIHRoZSBmdW5jdGlvblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9