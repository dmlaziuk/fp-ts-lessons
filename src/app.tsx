import './services/styles'

import * as React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import { Numbers } from './components/Numbers/Numbers'


const AppView: React.StatelessComponent<any> = () =>
  <>
    <Numbers />
  </>


const App = AppView

const root = document.createElement('div')
root.id = 'appRoot'
document.body.appendChild(root)

const renderApp = () => render(<App />, root)
renderApp()

// HMR
if (module.hot) {
  module.hot.dispose(() => {
    unmountComponentAtNode(root)
  })
}
