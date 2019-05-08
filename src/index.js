import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Custom.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import BaseLayout from './BaseLayout'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ViewBookList from './components/ViewBookList'
import { AddBook } from './components/AddBook'
import { UpdateBook } from './components/UpdateBook'
import { createStore } from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import Login from './components/Login'
import Register from './components/Register'
import MyBooks from './components/MyBooks'
import Profile from './components/Profile'
import { setAuthHeader } from './utils/authenticate'
import requireAuth from './components/requireAuth'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

setAuthHeader(localStorage.getItem('jsonwebtoken'))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/add-book" component={AddBook} />
          <Route path="/view-all-books" component={ViewBookList} />
          <Route path="/api/update/book-id/:bookId" component={requireAuth(UpdateBook)} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/my-books" component={requireAuth(MyBooks)} />
          <Route path="/profile/user-id/:userId" component={requireAuth(Profile)} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
