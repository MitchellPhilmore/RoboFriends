
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './index.css';
import 'tachyons'
import Card from './Card'
import {robots} from './robots'
import App from './App'
import Searchbox from './searchbox'
import registerServiceWorker from './registerServiceWorker';
import {searchRobots} from './reducers.js'

const store = createStore(searchRobots)
	


ReactDOM.render( <Provider store={store}> 
					<App />
						 </Provider>,document.getElementById("root")) 
registerServiceWorker();
