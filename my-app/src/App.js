import React, { Component } from 'react';

import './App.css';
import axios from "axios"
import { Carousel } from 'antd-mobile';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			banner:[],
			shortcut:[],
			layout:[],
			hotsell:[],
			purification:[]
		}

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
	         purification:res.data.floors[4].dataList.recommend
	       })
		})
	}
  render() {
    return (
      <div id="box">
        <header></header>
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
	       <div className="carousel">
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
        </section>
        <footer></footer>
      </div>
    );
  }
}

export default App;
