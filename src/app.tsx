import 'services/styles'

import { Numbers } from 'components/Numbers'
import * as React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

const AppView: React.StatelessComponent<any> = props => (
  <div>
    <Numbers />
  </div>
)

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
