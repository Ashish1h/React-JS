import React, { useEffect, useRef, useState } from 'react'
import Rightcard from './Rightcard'


const Rightcontent = (props) => {
 const ref = useRef()
 const [list, setlist] = useState(props.users);
  let intervel;
 function scroll(){
    ref.current.scrollBy (1,0);
 }
  useEffect(()=>{
    if(ref.current){
    intervel =  setInterval(()=>{
            if((ref.current.scrollLeft > ref.current.scrollWidth-800)){
              setlist([...list,...list]);
            }
            scroll();
      },10)
    }
  },[ref])
  return (
    <div id='right' ref={ref} className='h-full w-2/3 p-6 flex rounded-4xl flex-nowrap gap-5 overflow-x-auto transition-all'>
      {list.map(function(elem,idx){
        return (
          <div key={idx} className='shrink-0'>
            <Rightcard id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
          </div>
        )
      })}
      
    </div>
    
  )
}

export default Rightcontent
