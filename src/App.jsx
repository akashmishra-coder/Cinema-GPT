import { useState } from 'react'
import Body from './components/Body.jsx'
import Header from './components/Header.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'

function App() {

  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  )
}

export default App
