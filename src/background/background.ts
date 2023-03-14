// TODO: background script
chrome.runtime.onInstalled.addListener(() => {
  // TODO: on installed function
  console.log('autofill-extension on installed')
  chrome.contextMenus.create({
    id: 'autoFillBtn',
    title: 'GetPageAutoFill',
    contexts: ['all'],
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if(info.menuItemId !== 'autoFillBtn'){ return }
  chrome.tabs.query({active: true, lastFocusedWindow: true});
  const response = chrome.tabs.sendMessage(tab.id, {getAutoFill: true});
  // do something with response here, not outside the function
})