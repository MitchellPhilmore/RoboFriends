import React from 'react'
import Card from './Card'
import {robots} from './robots'

const CardList = ({robots})=>{
	const cardArray = robots.map((bot,i)=>{
		return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />

	})
	return (
		<div>
			{cardArray}

		</div>


		)
}

export default CardList