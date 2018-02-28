import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import Index from './components/Index';
import Classify from './components/classify';
import Shop from './components/shop';
import Person from './components/person';
import './App.css'
import './style/css/iconfont.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
	        <footer className="iconfont">
	        	<NavLink exact activeClassName="active" to="/"><span>&#xe66f;</span><i>首页</i></NavLink> 
	        	<NavLink activeClassName="active" to="/classify"><span>&#xe610;</span><i>分类</i></NavLink>
	        	<NavLink activeClassName="active" to="/shop"><span>&#xf0178;</span><i>购物车</i></NavLink>
	        	<NavLink activeClassName="active" to="/person"><span>&#xe645;</span><i>个人中心</i></NavLink>
	        </footer>
          
          <Route exact path="/" component={Index} />
          <Route path="/classify" component={Classify} />
          <Route path="/shop" component={Shop} />
          <Route path="/person" component={Person} />
        </div>
      </Router>
    );
  }
}

export default App;