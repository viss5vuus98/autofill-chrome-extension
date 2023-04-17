import { FillData } from '../types/dataTypes'
// TODO: content script
 const columns = ['#UserId']
 columns.forEach(id => {
   const target : HTMLInputElement = document.querySelector(id)
   if(target){
    target.value = 'SODADM'
   }
 })

 //TODO: FILL DATA 格式有更新過，這邊需要測試,可能會有問題
//取出畫面上取出畫面上所有Input
const autoFillInput = (data: FillData[]): void => {
  const inputList :NodeList = document.querySelectorAll('input')
  if(inputList.length <= 0){
    return
  }
  //淺拷貝到陣列中
  const inputArray : any[] = [ ...inputList ]
  //把值塞進對應的Input（這裡是針對沒有ID的處理）
  inputArray.forEach((item : any,): void => {
    //if e.name includes data.key then e.value set to data.value
    data.forEach((d: FillData) => {
      //if Column is disabled then return
      if(d.enable === false){ return }
      if(item.name.includes(d.key)){
        item.value = d.value
      }
    })
  })
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(request.getAutoFill){
    console.log('Fill Selected Input !', request.fillData)
    autoFillInput(request.fillData)
  }
})