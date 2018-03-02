import React, { Component } from 'react';
import './style/classify.css'
import axios from "axios"
import { NavLink} from 'react-router-dom';
class App extends Component {
	constructor(props){
		super(props)
	    this.state = {
			main:[],
			mains:[]
		}
	}
	componentDidMount(){
		axios.get("/marketing/mobile/category_a0bce3afafc97a5e4c35a1468c953b71.json")
		.then((res)=>{
			console.log(res.data)
			var contents = []
			res.data.forEach((item,index)=>{
				var content = [];
				item.layout.dataList.forEach((item,index)=>{
					content.push(item.sku)
				})
				axios.get(`/product/skus?ids=${content.toString()}`)
				.then((res)=>{
					//console.log(res)
					contents.push(res.data.data.list)
				})
			})
			
			this.setState({
				main:res.data,
				mains:contents
			})
			//console.log(this.state.mains)
		})
	}
   render() {
    return (
      <div>
      	<header className="iconfont">
      		<div>&#xe605;</div>
      		<div>分类</div>
      	</header>
      	<section>
      		{
      			this.state.main.map((item,index)=>{
      				return(
      					<div key={item.name}>
	      					<div className="title-wrapper">
						         <h2>{item.name}</h2>
					        </div>
					        <div className="proimg">
					        	<img src={item.image.src} alt="" width = '100%' />
					        </div>
				        </div>
      				)
      			})
      		}
      		<div className="foot"></div>
      	</section>
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