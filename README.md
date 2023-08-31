# AutoFill Chrome Extension

Autofill Chrome Extension是一個Chrome擴展程式，目的在協助QA工程師和軟體開發人員測試UI介面。其主要功能是根據用戶配置的欄位自動填寫值。用戶可以在擴展程式介面上執行修改已保存的值、添加欄位、禁用欄位等操作。

<img width="80" alt="截圖 2023-04-18 下午11 22 02" src="https://user-images.githubusercontent.com/101302525/232824664-20bbdc6a-dadd-4b47-8117-fb70913cb896.png">

## Technologies Used
- React
- Redux
- TypeScript
- Webpack

## Getting Started
要開始使用Autofill Chrome Extension，請按照以下步驟進行：

1. Clone 此專案到本地。 `git clone https://github.com/viss5vuus98/autofill-chrome-extension`
2. 打開Google Chrome瀏覽器，並在網址列輸入`chrome://extensions`。
3. 切換右上角選項切換開發人員模式。
4. 點擊“載入未封裝項目”按鈕，然後選擇clone路徑中的dist資料夾。
5. Autofill Chrome Extension現在已經安裝在您的Chrome瀏覽器中，可點擊瀏覽器右上角工具列擴充功能按鈕，將Autofill釘選在工具列中。

## Usage
安裝完成後，Autofill Chrome Extension將在Chrome工具欄中可用。

點擊右鍵，在選單中選擇AutoFill Extension，並選擇GetPageAutoFill，即可將您設置的欄位自動填寫。

點擊Autofill Chrome Extension介面，

`Vules`頁中下拉選單可以查看目前以儲存的欄位，並可進行自動填寫值的修改。

<img width="100" alt="截圖 2023-04-18 下午11 14 04" src="https://user-images.githubusercontent.com/101302525/232822436-02cc1d48-6a64-4f25-8279-8594e235be8e.png">

`SELECT`頁可以新增自訂的欄位，**注意每個欄位都必須填寫**
  - `欄位類型`可選擇是單欄(填入單一值)/雙欄(一次綁定兩個欄位)類型
  - `綁定方式`為Autofill Chrome Extension綁定您配置欄位的HTML Element的方式，可選`name`屬性
  - `自訂群組名稱`是一個您自定義的名稱，可自訂但必須是唯一值。
  - `屬性名`為依據綁定方式提供的HTML Element屬性，依據綁定方式提供，盡量完整,精確，例如：提供 Source.Date 較只提供 Date 更不容易與其他欄位混淆。
  
<img width="100" alt="截圖 2023-04-18 下午11 05 09" src="https://user-images.githubusercontent.com/101302525/232819841-82f1bc31-b104-4b52-bb3b-133d9e45e754.png">

`ENABLE`頁可以選擇禁用指定的欄位，它們在禁用時將不會被自動填入。

<img width="100" alt="截圖 2023-04-18 下午11 05 44" src="https://user-images.githubusercontent.com/101302525/232820038-80fc9127-71ce-453f-8a55-69ba86b4ec54.png">
