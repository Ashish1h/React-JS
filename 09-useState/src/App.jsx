import React, { useState } from 'react'

const App = () => {
  let [a,seta] = useState(1)
  function increase(){
    let b = a++
    seta(b)
  }

  function Decrease(){
    let b = a--
    seta(b)
  }

  return (
    <div>
      <h3>{a}</h3>
      <button onClick={increase}>Increase</button>  
      <button onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default App

