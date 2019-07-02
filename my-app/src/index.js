import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';

//创建store，啊啊啊啊
//reducers负责处理store数据 纯函数
const reducers = combineReducers({
	//state当前状态
	//action接受到的数据
	films : function(state=[],action){
		console.log(action); 

		return state
	}
})


const store = createStore(reducers,{});

function renderpage(){
ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
renderpage()
store.subscribe(renderpage)
registerServiceWorker();
