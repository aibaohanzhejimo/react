import React, { Component } from 'react';
import axios from "axios"
import './style/detail.css'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			shops:[]
		}
	}
	componentDidMount(){
		axios.get(`/product/spus?ids=${this.props.match.params.fid}`)
		.then((res)=>{
			console.log(res);
			this.setState({
				shops:res.data.data.list
			})
		})
	}
  render() {
    return (
      <div>
          {
          	this.state.shops.map((item,index)=>{
          		return(
          			<div key={item.id}>
	          			<header>
			      		    <div><button className="btn">&lt; 返回</button></div>
			      		    <div className="shop-title">{item.name}</div>	
			      		</header>
			      		<ul className="nav">
			      			<li>商品</li>
			      			<li>详情</li>
			      			<li>参数</li>
			      			<li>推荐</li>
			      		</ul>
				      	<section className="section">
				      		<div><img src={item.sku_info[0].ali_image} alt="" width = '100%' /></div>
				      		<div className="center"></div>
				      		<div className="shop-message">
				      		    <h3>商品信息</h3>
				      		    <h4>{item.name}</h4>
				      		    <p>{item.shop_info.highlights}</p>
				      		    <div><span>￥{item.price}</span><i>分期付款低至每月￥{(item.price/11).toFixed(2)}</i></div>
				      		</div>
				      	</section>
			      	</div>
          		)
          	})
          }
      </div>
    );
  }
}

export default App;