import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
      	<footer className="iconfont">
	        	<NavLink exact activeClassName="active" to="/"><span>&#xe66f;</span><i>首页</i></NavLink> 
	        	<NavLink activeClassName="active" to="/classify"><span>&#xe610;</span><i>分类</i></NavLink>
	        	<NavLink activeClassName="active" to="/shop"><span>&#xf0178;</span><i>购物车</i></NavLink>
	        	<NavLink activeClassName="active" to="/person"><span>&#xe645;</span><i>个人中心</i></NavLink>
	        </footer>
      </div>
    );
  }
}

export default App;