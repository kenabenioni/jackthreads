import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
<Provider store={store}>
<HashRouter>
<App />
</HashRouter>
</Provider>
, document.getElementById('root'));
// registerServiceWorker();
