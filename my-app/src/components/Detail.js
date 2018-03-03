import React, { Component } from 'react';
import axios from "axios"
import './style/detail.css'
import { NavLink} from 'react-router-dom';

class App extends Component {
	constructor(props){
		super(props);
		this.addCarts = this.addCarts.bind(this);
		this.state = {
			shops:[],
			recommend:[]
		}
	}
	componentDidMount(){
		axios.get(`/product/spus?ids=${this.props.match.params.fid}`)
		.then((res)=>{
			console.log(res.data.data);
			this.setState({
				shops:res.data.data.list
			})
			axios.get(`/product/skus?ids=${res.data.data.list[0].shop_info.recmd_skus.toString()}`)
			.then((res)=>{
				console.log(res);
				this.setState({
				    recommend:res.data.data.list
			    })
			})
		})
	}
	addCarts(){
		this.props.store.dispatch ({
			type:"ADDCARTS",
			payload:this.props.match.params.fid
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
			      		    <div><NavLink to="/"><button className="btn">&lt; 返回</button></NavLink></div>
			      		    <div className="shop-title">{item.shop_info.spu_mobile_title}</div>	
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
				      		    <div className="shop-price"><span>￥{item.price} </span> <i> 分期付款低至每月￥{(item.price/11).toFixed(2)}</i></div>
				      		</div>
				      		<div className="center"></div>
				      		<div className="versions">
				      			<h6>已选版本</h6>
				      			<div><span>{item.shop_info.spec_v2[0].spec_name} : </span> <i> {item.sku_info[0].spec_json[0].show_name}</i></div>
				      			<div><span>数量 : </span> <i> 1</i></div>
				      		</div>
				      		<div className="center"></div>
				      		<div className="shop-message shop-detail">
				      		    <h3>商品详情</h3>
				      		    <img src={item.shop_info.tpl_content.base.images.ali_mobile.url[0]} alt="" width = '100%' />
				      		</div>
				      		<div className="shop-message shop-detail">
				      		    <h3>技术参数</h3>
				      		</div>
				      		<div className="shop-message shop-detail">
				      		    <h3>相关推荐</h3>
				      		    <div className="main">
						       	    {
						       	    	this.state.recommend.map((item,index)=>{
						       	    		return(
						       	    			<div key={item.id}>
						       	    				<img src={item.shop_info.ali_image} alt="" width = '100%'/>
						       	    				<div>{item.shop_info.sku_mobile_title}</div>
						       	    				<p>{item.shop_info.sku_mobile_sub_title}</p>
						       	    				<span>￥{item.price}</span>
						       	    			</div>
						       	    		)
						       	    	})
						       	    }
						       </div>
				      		</div>
				      		<div className="foot"></div>
				      	</section>
				      	<footer className="detail-foot">
				      		 <button onClick={this.addCarts}>加入购物车</button>
				      		 <button>现在购买</button>
				      	</footer>
			      	</div>
          		)
          	})
          }
      </div>
    );
  }
}

export default App;