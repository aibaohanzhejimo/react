import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './components/Index';
import Classify from './components/classify';
import Shop from './components/shop';
import Person from './components/person';
import Detail from './components/Detail';
import './App.css'
import './style/css/iconfont.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/classify" component={Classify} />
          <Route path="/shop" component={Shop} />
          <Route path="/person" component={Person} />
          <Route path="/detail/:fid" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;