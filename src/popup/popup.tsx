import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import BasicTab from './components/TabPanel'
import { Provider, useDispatch } from 'react-redux'
import { createStore } from 'redux'
import  allReducer  from './reducers/allReducer'



let store = createStore(allReducer)

const App: React.FC<{}> = () => {

  return (
    <div >
      <Provider store={store}>
        <BasicTab/>
      </Provider>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)

