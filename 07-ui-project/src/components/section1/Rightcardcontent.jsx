import React from 'react'
import { MoveRight } from 'lucide-react'

const Rightcardcontent = (props) => {
    console.log(props.color);
  return (
    <div>
            <p className='text-lg text-white mb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quisquam vero cupiditate </p>
            <div className='flex justify-between'> 
                <button style={{backgroundColor:`${props.color}`}} className='text-white rounded-full px-7 py-3'>{props.tag}</button>
                <button className='text-white  rounded-full px-3 py-3'><MoveRight /></button>
            </div>
        </div>
  )
}

export default Rightcardcontent
