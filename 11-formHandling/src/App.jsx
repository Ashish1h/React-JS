import React from 'react'

const App = () => {

  const formSubmit = (e) => {
    e.preventDefault()
    console.log("form submited")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formSubmit(e)
      }}>
        <input type='text' placeholder='Enter something'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
