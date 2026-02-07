import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/sction2'

const App = () => {

  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661590850278-9a4d2f6116d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww',
      intro:'',
      color:'gray'
      ,tag:'Engineer'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1663011108304-0215dfabeabf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww',
      intro:'',
      color:'yellow'
      ,tag:'Model'
    },
    {
      img:'https://images.unsplash.com/photo-1724627559656-9652a42c7e91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww',
      intro:'',
      color:'blue'
      ,tag:'Photo'
    },
    {
      img:'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'pink'
      ,tag:'Fashion'
    },
    {
      img:'https://images.unsplash.com/photo-1768612351268-29eb449a6a9a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'black'
      ,tag:'Street'
    },
    {
      img:'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9jayUyMG11c2ljfGVufDB8fDB8fHww',
      intro:'',
      color:'gray'
      ,tag:'Music'
    },
    {
      img:'https://images.unsplash.com/photo-1627140583146-23077865a2a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNoaWNhZ28lMjBza3lsaW5lfGVufDB8fDB8fHww',
      intro:'',
      color:'green'
      ,tag:'Skyline'
    },
    {
      img:'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'blue'
      ,tag:'Food'
    },
    {
      img:'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRyaW5rfGVufDB8fDB8fHww',
      intro:'',
      color:'orange'
      ,tag:'Drink'
    }
    
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}
export default App
