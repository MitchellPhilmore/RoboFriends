import React from 'react'

const Card = ({name,email,id}) =>{
	 return (
	 		<div className='bg-teal dib br3 pa4 mar5 grow bw2 shadow-5 tc i Roboto'>

	 			<img alt="robots" src={`https://robohash.org/${id}.png?size=200x200`}/>
	 			<div>
	 			<h2>{name}</h2>
	 			<p>{email}</p>

	 		</div>
	 		</div>

	 	)
}

export default Card