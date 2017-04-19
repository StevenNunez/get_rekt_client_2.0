import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {
  ConnectedRouter as Router,
  routerMiddleware
} from 'react-router-redux'
import {
  Route,
  Link
} from 'react-router-dom'

import App from './App';
import rootReducer from './reducers'

const history = createHistory()
const rMiddleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, rMiddleware)
)


const Home = () => {
  return (
    <div>
      <h1>You're on the home page</h1>
      <Link to="/cocktails">See all Cocktails</Link>
    </div>
  )
}
axios
.get('http://localhost:4000/v1/cocktails')
.then(({data}) => {
  store.dispatch({type: "RECEIVE_COCKTAILS", cocktails: data})
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/cocktails" component={App} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
})
