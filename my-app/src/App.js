import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Index from './components/Index';
import './App.css'
import './style/css/iconfont.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
	        <footer>
	        	<Link to="/">首页</Link>
	        </footer>
          
          <Route exact path="/" component={Index} />
        </div>
      </Router>
    );
  }
}

export default App;