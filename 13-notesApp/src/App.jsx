import React, { useState } from 'react'
import { X } from 'lucide-react'



const App = () => {

  const [title, setTitle] = useState(' ')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    
    const copyTask = [...task];
    copyTask.push({title,details})
    console.log(copyTask);

    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote=(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='bg-black h-screen lg:flex'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex flex-col lg:w-1/2 px-10 gap-5 items-start py-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <input 
        type='text' 
        placeholder='Enter Notes Heading'
        className='px-5 py-5 w-full font-medium outline-none border-2 h-20 rounded-2xl'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        <textarea 
        placeholder='Write details'
        className='px-5 font-medium py-2 outline-none w-full border-2 h-20 rounded-2xl'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />

        <button className='bg-white active:bg-gray-400 w-full text-black px-5 py-2  rounded-2xl'>Add Note</button>

      </form>
      <div className='lg:w-1/2 bg-gray-900 lg:border-l-2 p-10 '>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div  className='flex flex-wrap gap-5 h-full overflow-auto '>
          {task.map(function(elem,idx){

            return <div key={idx} className="relative bg-cover rounded-2xl flex justify-between flex-col item-start text-black px-10 py-2 pb-5 pt-8 bg-white h-60 w-50 bg-[url('https://thumbs.dreamstime.com/z/vector-single-cartoon-spiral-notebook-isolated-white-background-vector-illustration-vector-single-cartoon-spiral-notebook-286793783.jpg?w=360')]">
    
              <h3 className='text-xl leading-tight font-bold'>{elem.title}</h3>

            <p className='mt-2 leading-tight text-xs font-medium text-gray-900'>{elem.details}</p>
            <button onClick={()=>{
              deleteNote(idx)
            }}

            className='w-full bg-red-500 rounded-2xl py-1 text-xs text-white py-1 active:scale-95'>Delete Note</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
export default App
