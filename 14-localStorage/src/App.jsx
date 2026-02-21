import React from 'react'

const App = () => {

  const user = {
    user:'Ashish',
    age:18,
    role:'engineer'
  }
  
  localStorage.setItem('user',JSON.stringify(user))
  console.log((user));



  return (
    <div>
      App
    </div>
  )
}

export default App
