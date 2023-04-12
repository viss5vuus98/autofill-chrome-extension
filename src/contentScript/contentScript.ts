import { FillData } from '../types/dataTypes'
// TODO: content script
 const columns = ['#UserId']
 columns.forEach(id => {
   const target : HTMLInputElement = document.querySelector(id)
   if(target){
    target.value = 'SODADM'
   }
 })

//取出畫面上取出畫面上所有Input
const autoFillInput = (data: FillData[]): void => {
  const inputList :NodeList = document.querySelectorAll('input')
  if(inputList.length <= 0){
    return
  }
  //淺拷貝到陣列中
  const inputArray : any[] = [ ...inputList ]
  //把值塞進對應的Input（這裡是針對沒有ID的處理）
  inputArray.forEach((e : any, i : number): void => {
    //if e.name includes data.key then e.value set to data.value
    data.forEach((d: FillData) => {
      if(e.name.includes(d.key)){
        e.value = d.value
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
    console.log('Fill Selected Input !', request.data)
    autoFillInput(request.data)
  }
})