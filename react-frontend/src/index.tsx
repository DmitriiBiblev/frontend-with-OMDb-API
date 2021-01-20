import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore } from 'redux';
import actionToPlainObjectConverter from 'redux-action-class';
import { Provider } from 'react-redux';
import { rootEpics } from './store/epics';
import rootReducer from './store/reducers';

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const epicMiddleware = createEpicMiddleware();


export let store = createStore(rootReducer, bindMiddleware([
  epicMiddleware,
  actionToPlainObjectConverter,
]));

epicMiddleware.run(rootEpics);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
