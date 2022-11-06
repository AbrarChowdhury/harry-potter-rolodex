import React from 'react'

const FocusedCharacter = ({character, handleClose}) => {
  return (
    <div style={{display: "flex", justifyContent:"center",alignItems:"center", height:'100vh', gap:"40px"}}>
        <img src={character.image} width="500px"/>
        <div>
            <h1>{character.name}</h1>
            <p>{character.house}</p>
            <p>{character.age}</p>
            <p>{character.gender}</p>
            <button onClick={handleClose}>Go Back</button>
        </div>
    </div>
  )
}

export default FocusedCharacter