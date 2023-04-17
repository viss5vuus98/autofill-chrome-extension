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
    //if Column is disabled then return
    if(item.enabled === false){ return }
    //if e.name includes data.key then e.value set to data.value
    const targetElementPattern: RegExp = new RegExp(`^${item.name}$`)
    data.forEach((d: FillData) => {
      if(targetElementPattern.test(d.key)){
        item.value = d.value
      }
    })
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
  })
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(request.getAutoFill){
    console.log('Fill Selected Input !', request.fillData)
    autoFillInput(request.fillData)
  }
})