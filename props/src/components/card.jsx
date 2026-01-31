import React from 'react'

const Card = (props) => {
  console.log(props);
  

  return (
    <div className="card">
        <img src={props.img}></img>
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicr.</p>
        <br></br>
        <button>view profile</button>
      </div>
  )
}

export default Card
