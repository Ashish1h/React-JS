import {useState} from 'react'

const App = () => {
  const [num, setnum] = useState({age:20})
  const btnClicked=()=>{
    const newNum = {...num};
    newNum.age = 21

    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
  }
  return (
    <div>
      <h1>{num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
