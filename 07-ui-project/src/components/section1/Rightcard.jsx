import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt=''></img>
      <div className='h-full w-full top-0 left-0 absolute  p-10 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <Rightcardcontent color={props.color} tag={props.tag}/>
      </div>
    </div>
  )
}

export default Rightcard
