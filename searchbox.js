import React from 'react'
import './searchbox.css'

const Searchbox = ({searchfield,searchterm})=>{

	return(
		<input className='pa2 tc'
		 placeholder="Search robots"
		 type="search"
		 onChange={searchterm}



		  />
		)

}

export default Searchbox