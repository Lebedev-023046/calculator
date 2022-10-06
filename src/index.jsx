import React from "react"
import reactDom from "react-dom/client"
import { App } from "@components/App"
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import store from "@redux/store"


const root = reactDom.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
)
