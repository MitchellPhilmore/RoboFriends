import React,{Component} from 'react'
import CardList from './CardList'
import Searchbox from './searchbox'
import {robots} from './robots'
import scroll from './scroll'
import {setSearchField} from './actions'


 
class App extends Component{

	constructor(){
		super()
		this.state = {
			robots:robots,
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(users=>users.json()).then(users=>{

			this.setState({
				robots: users

		})
		})
	
		
	}

	logInput = (event)=>{
		this.setState({searchfield:event.target.value})
		
	}
		
	render(){
			const {robots,searchfield} = this.state
			
			const filteredRobots = robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchfield)
		});
			return(
			<div className=" mt0">
			< h1 className="tc">RoboFriends</h1>
			<Searchbox searchterm={this.logInput} />
			<scroll>
			< CardList robots={filteredRobots} />
			</scroll>
			</div>
)

	}
	}
	
		
	



export default App