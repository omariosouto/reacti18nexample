import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes';
import * as serviceWorker from './serviceWorker';

// i18n things
// import { IntlProvider, addLocaleData } from 'react-intl';
// import en from 'react-intl/locale-data/en'
// import pt from 'react-intl/locale-data/pt'
// addLocaleData([...en, ...pt])
// const locale = document.location.pathname.split('/')[1]

ReactDOM.render(
    <BrowserRouter>
            <Routes />
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
