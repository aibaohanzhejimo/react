import React, { Component } from 'react';
import './index.css';
import axios from "axios"
import { Carousel } from 'antd-mobile';
import { NavLink} from 'react-router-dom';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			banner:[],
			shortcut:[],
			layout:[],
			hotsell:[],
			purification:[],
			conent:[],
			jianguo2:[],
			jianguo:[],
			proimg:[],
			mask:[],
			brand:[]
		}
		this.goto = this.goto.bind(this);

	}
	componentDidMount(){
		axios.get("/marketing/mobile/index_9d2b56c1bf495e7e6caf9d50e7444462.json")
		.then((res)=>{
			console.log(res.data);
		 this.setState({
	         banner: res.data.banner.dataList,
	         shortcut:res.data.shortcut.dataList,
	         layout:res.data.floors[1].dataList,
	         hotsell:res.data.floors[3].dataList,
	         purification:res.data.floors[4].dataList.recommend,
	         proimg:res.data.floors[8].dataList
	       })
			axios.get(`/product/skus?ids=${res.data.floors[6].dataList.slice(0,6).toString()}`)
			.then((res)=>{
				console.log(res.data.data.list)
				this.setState({
					jianguo2:res.data.data.list
				})
			})
			axios.get(`/product/skus?ids=${res.data.floors[7].dataList.slice(0,5).toString()}`)
			.then((res)=>{
				//console.log(res.data.data.list)
				this.setState({
					jianguo:res.data.data.list
				})
			})
			axios.get(`/product/skus?ids=${res.data.floors[9].dataList.toString()}`)
			.then((res)=>{
				//console.log(res.data.data.list)
				this.setState({
					mask:res.data.data.list
				})
			})
			axios.get(`/product/skus?ids=${res.data.floors[10].dataList.toString()}`)
			.then((res)=>{
				//console.log(res.data.data.list)
				this.setState({
					brand:res.data.data.list
				})
			})
		})	
	}
	goto(fid){
		this.props.history.push("/detail/" + fid)
	}

  render() {
  	var that = this
    return (

      <div id="box">
      <header className="iconfont">
        	<div>&#xe605;</div>
        	<div>&#xe82e;</div>
       </header>
        <section>
           <Carousel autoplay={true} infinite={true}>
               {
               	this.state.banner.map((item,index)=>{
               		return(
               			<a
			              key={index}
			              style={{ display: 'inline-block', width: '100%', marginTop:".2rem",height:"1.5rem",padding:'0 .1rem'}}
			            >
			              <img
			                src={item.src}
			                alt=""
			                style={{ width: '100%', verticalAlign: 'top' ,height:'100%'}}
			              />
			            </a>
               		)
               	})
               }
	       </Carousel>
	       <div className="short-cut-container">
	       	    <div className="short-cut">
	       	    {
	       	    	this.state.shortcut.map((item,index)=>{
	       	    		return(
	       	    			<a href={item.linkUrl} key={item.linkUrl}>
	       	    				<img  src={item.src} alt="" />
	       	    				<p>{item.labelTitle}</p>
	       	    			</a>
	       	    		)
	       	    	})
	       	    }
	       	    </div>
	       </div>
	       <div className="center"></div>
	       <div className="title-wrapper">
	         <h2>热门商品</h2> 
	         <p>></p>
	       </div>
	       <div className="floor-container">
	       	    <ul className="box-products-items">
	       	    	{
	       	    		this.state.layout.map((item,index)=>{
	       	    			return <li key={index}><img src={item.src} alt="" /></li>
	       	    		})
	       	    	}
	       	    </ul>
	       </div>
	       <div className="center"></div>
	       <div className="title-wrapper">
	         <h2>热销机型</h2> 
	       </div>
	       <div className="carousel" onClick={()=>that.goto(1000351)}>
	       	    <img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_675/format,webp" alt="" />
	       	    <div className="carousel-title">坚果 Pro 2</div>
	       	    <div className="carousel-sub-title"> 漂亮得不像实力派 </div>
	       	    <div className="price"> ￥1,779.00 </div>
	       </div>
	       <div className="center"></div>
	       <div className="section-floor">
	       		{
	       			this.state.hotsell.map((item,index)=>{
	       				return <img key={index} src={item.src} alt="" />
	       			})
	       		}
	       </div>
	       <div className="title-wrapper">
	         <h2>净化器及配件</h2> 
	         <p>></p>
	       </div>
	       <div className="carousel">
	       	    <img src="https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png?x-oss-process=image/resize,w_675/format,webp" alt="" />
	       	    <div className="carousel-title">畅呼吸智能空气净化器</div>
	       	    <div className="carousel-sub-title">  超强净化能力、智能操控 </div>
	       	    <div className="price"> ￥3,499.00 </div>
	       </div>
	       <div className="goods-list">
	       	    <div id={this.state.purification[0]}><span>防雾霾口罩</span><i>></i></div>
	       	    <div id={this.state.purification[1]}><span>高效复合滤芯</span><i>></i></div>
	       	    <div id={this.state.purification[2]}><span>除甲醛活性炭滤芯</span><i>></i></div>
	       	    <div id={this.state.purification[3]}><span>汽车空调滤清器</span><i>></i></div>
	       </div>
	       <div className="seletiion">
	       	    <div className="seletiion-left">
	       	    	<img src="https://resource.smartisan.com/resource/6f2313134d5c4e9f8076e1a26523d7ba.png" alt="" width = '100%' />
	       	    	<img src="https://resource.smartisan.com/resource/a10367c5b078fdb1f566b2da778c243e.png" alt="" width = '100%' />
	       	    	<img src="https://resource.smartisan.com/resource/7ed5c611f175be518ec5ff02563d6677.png" alt="" width = '100%' />
	       	    </div>
	       	    <div className="seletiion-right">
	       	    	<img src="https://resource.smartisan.com/resource/f6ed3bfe019253f26510650d7b31be27.png" alt="" width = '100%' />
	       	    </div>
	       </div>
	       <div className="center"></div>
	       <div className="title-wrapper">
	         <h2>坚果 Pro 2 及配件</h2> 
	         <p>></p>
	       </div>
	       <div className="main">
	       	    {
	       	    	this.state.jianguo2.map((item,index)=>{
	       	    		return(
	       	    			<div key={item.id} onClick={()=>that.goto(item.spu_id)}>
	       	    				<img src={item.shop_info.ali_image} alt="" width = '100%'/>
	       	    				<div>{item.shop_info.sku_mobile_title}</div>
	       	    				<p>{item.shop_info.sku_mobile_sub_title}</p>
	       	    				<span>￥{item.price}.00</span>
	       	    			</div>
	       	    		)
	       	    	})
	       	    }
	       </div>
	       <div className="center"></div>
	        <div className="title-wrapper">
	         <h2>坚果 Pro 及配件</h2> 
	         <p>></p>
	       </div>
	       <ul className="box-items">
	       	{
	       		this.state.jianguo.map((item,index)=>{
	       			return(
	       				<li key={item.id} className="box-line" onClick={()=>that.goto(item.spu_id)}>
	       					<div className="box-item-img"><img src={item.shop_info.ali_image} alt="" /></div>
	       					<div className="box-item-content">
	       						<h5>{item.shop_info.sku_mobile_title}</h5>
	       						<p>{item.shop_info.sku_mobile_sub_title}</p>
	       						<span>￥{item.price}.00</span>
	       					</div>
	       				</li>
	       			)
	       		})
	       	}
	       </ul>
	       <div className="center"></div>
	       {
	       	this.state.proimg.map((item,index)=>{
	       		return <div key={index} className="proimg" ><img src={item.src} alt="" width = '100%' /></div>
	       	})
	       }
	       <div className="center"></div>
	       <div className="title-wrapper">
	         <h2>品牌周边</h2> 
	         <p>></p>
	       </div>
	       <div className="main">
	       	    {
	       	    	this.state.mask.map((item,index)=>{
	       	    		return(
	       	    			<div key={item.id}  onClick={()=>that.goto(item.spu_id)}>
	       	    				<img src={item.shop_info.ali_image} alt="" width = '100%'/>
	       	    				<div>{item.shop_info.sku_mobile_title}</div>
	       	    				<p>{item.shop_info.sku_mobile_sub_title}</p>
	       	    				<span>￥{item.price}</span>
	       	    			</div>
	       	    		)
	       	    	})
	       	    }
	       </div>
	       <div className="center"></div>
	       <div className="title-wrapper">
	         <h2>品牌精选</h2> 
	         <p>></p>
	       </div>
	       <div className="main">
	       	    {
	       	    	this.state.brand.map((item,index)=>{
	       	    		return(
	       	    			<div key={item.id} onClick={()=>that.goto(item.spu_id)}>
	       	    				<img src={item.shop_info.ali_image} alt="" width = '100%'/>
	       	    				<div>{item.shop_info.sku_mobile_title}</div>
	       	    				<p>{item.shop_info.sku_mobile_sub_title}</p>
	       	    				<span>￥{item.price}</span>
	       	    			</div>
	       	    		)
	       	    	})
	       	    }
	       </div>
	       <div className="foot"></div>
	       <footer className="iconfont">
	        	<NavLink exact activeClassName="active" to="/"><span>&#xe66f;</span><i>首页</i></NavLink> 
	        	<NavLink activeClassName="active" to="/classify"><span>&#xe610;</span><i>分类</i></NavLink>
	        	<NavLink activeClassName="active" to="/shop"><span>&#xf0178;</span><i>购物车</i></NavLink>
	        	<NavLink activeClassName="active" to="/person"><span>&#xe645;</span><i>个人中心</i></NavLink>
	        </footer>
        </section>
      </div>
    );
  }
}

export default App;