import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const formHandling = (e) =>{
    e.preventDefault()
    console.log('form submited by ',title);
    setTitle('')
  }
  return (
    <div>
       <form onSubmit={(e) => {
        formHandling(e)
       }}>
        <input type='text' placeholdre='Enter something'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
        <button>Submit</button>
       </form>
    </div>
  )
}

export default App
