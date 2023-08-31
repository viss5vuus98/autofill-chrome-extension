import { getStorage } from '../utils/storage'
import { FillData } from '../types/dataTypes'

// background script
chrome.runtime.onInstalled.addListener(() => {
  // on installed function
  console.log('autofill-extension on installed')
  chrome.contextMenus.create({
    id: 'autoFillBtn',
    title: 'GetPageAutoFill',
    contexts: ['all'],
  })
  chrome.contextMenus.create({
    id: 'autoFillClear',
    title: 'ClearAutoFillData',
    contexts: ['all'],
  })
})

chrome.contextMenus.onClicked.addListener((info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) => {
  if(info.menuItemId !== 'autoFillBtn'){ return }
  chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs: chrome.tabs.Tab[]) => {
    if(tabs.length <= 0){
      return
    }

    getStorage().then((res: FillData[]) => {
      console.log("Get ChromeStorage FillData:",res)
      const target: number = tabs[0].id
      chrome.tabs.sendMessage(target, {getAutoFill: true, fillData: res});
    })
  });
})

/// clear storage
chrome.contextMenus.onClicked.addListener((info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) => {
  if(info.menuItemId !== 'autoFillClear'){ return }
  chrome.storage.local.clear()
})
