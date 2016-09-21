require("./app.less");

import React  from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import HomePage from './homePage/HomePage.jsx'
import AboutPage from './aboutPage/AboutPage.jsx'
import Feeds from './feeds/Feeds.jsx'
import Subs from './subs/Subs.jsx'

import reducers from './reducers/reducers.jsx'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={HomePage} >
            <IndexRoute component={Feeds} />
            <Route path="/feeds(/:sub)" component={Feeds} />
            <Route path="/feeds(/:r/:sub)" component={Feeds} />
            <Route path="/subs" component={Subs} />
            <Route path="about" component={AboutPage} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
