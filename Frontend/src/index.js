import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store/store'
import registerServiceWorker from './registerServiceWorker'
import Routes from './routes'
import ErrorCatch from './components/ErrorCatch'
import './fonts/BigShouldersDisplay-Bold.ttf'
import './fonts/NunitoSans-Light.ttf'
import './index.css'

const store = configureStore()

const Init = () => (
  <Provider store={store}>
    <ErrorCatch>
      <Routes />
    </ErrorCatch>
  </Provider>
)

ReactDOM.render(<Init />, document.getElementById('root'))
registerServiceWorker()
