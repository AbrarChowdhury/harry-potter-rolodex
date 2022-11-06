import React from 'react'

const Card = ({character, handleClick}) => {
  const {name, house, image} = character
  return (
    <div style={{width:"300px"}} onClick={handleClick}> 
     <img src={image} alt={name} width="100%"/>
     <h2>{name}</h2>
     <h3>{house}</h3>    
    </div>
  )
}

export default Card