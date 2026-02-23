import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userdata, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setUserData(response.data)
  }
  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='absolute top-1/2 left-1/2 text-gray-400 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userdata.length>0){
    printUserData = userdata.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }
  return (
    <div className='bg-black h-full p-4 text-white'>
      <div className='text-gray-400 py-3 flex flex-wrap gap-2'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center mt-10'>
        <button 
        style={{opacity: index == 1 ? 0.5 : 1}}
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        className='px-4 text-sm py-2 font-semibold active:scale-95 bg-amber-400 text-black rounded '>
          Prev
          </button>
          <h4>page {index}</h4>
        <button onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}
        className='bg-amber-400 font-semibold text-sm active:scale-95 py-2 px-4 text-black rounded'>
          Next
          </button>
      </div>
    </div>
  )
}
export default App
