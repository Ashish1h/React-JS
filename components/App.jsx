import React from 'react'
import Card from './card'


const App = () => {

  const user = 'Aviral'
  const age = '18'
  return (
    <div>
      <div className="card">
        <h1>Hello {user}</h1>
        <h2>and i am {age}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a consectetur quos temporibus sunt dolore amet nemo saepe explicabo iste, ipsa nihil, asperiores soluta debitis aliquam cum! Laboriosam, perferendis facilis!</p>
      </div>

      {Card()}

    </div>
  )
}

export default App
