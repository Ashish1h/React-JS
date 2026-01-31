import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Ashish" age={18} img="https://plus.unsplash.com/premium_photo-1767943943590-772eeaca333d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user="Aviral" age={20} img="https://plus.unsplash.com/premium_photo-1736765210162-8db26e3d02c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Aditya" age={21} img="https://images.unsplash.com/photo-1768226791333-32841ea99c82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D"/>
      
    </div>
  )
}
export default App
