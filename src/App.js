import React, { Component } from 'react';
import Posts from './pages/posts'
import About from './pages/about'
import Policy from './pages/policy'
import Modal from './components/modal'
import Header from './components/header'
import './App.css';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Posts}/>
          <Route exact path='/about/' component={About}/>
          <Route exact path='/policy/' component={Policy}/>
        </Switch>
        <Modal/>
      </div>
    );
  }
}

export default App;
