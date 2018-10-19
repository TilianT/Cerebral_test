import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Container } from '@cerebral/react'
import controller from './controller'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <Container app={ controller }>
        <App />
    </Container>
  </Router>, document.getElementById('root'));
