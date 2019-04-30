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

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/add-book" component={AddBook} />
          <Route path="/view-all-books" component={ViewBookList} />
          <Route path="/api/update/book-id/:bookId" component={UpdateBook} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
