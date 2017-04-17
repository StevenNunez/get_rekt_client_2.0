import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'
import { 
  Route,
  Link,
} from 'react-router-dom'

import { 
	ConnectedRouter as Router, 
	routerMiddleware
} from 'react-router-redux'


import Cocktails from './Cocktails';
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
      Click Cocktails to see a list of cocktails
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
        <div className="container">
          <h1><Link to="/">GetRekt</Link></h1>
          <Link to="/cocktails">Checkout the cocktails</Link>
          <Route exact path="/" component={Home}/>
          <Route path="/cocktails" component={Cocktails}/>
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
})
