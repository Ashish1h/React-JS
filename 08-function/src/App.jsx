import React from 'react'

const App = () => {
  function scrolling(elem){
    if(elem>0){
      console.log(elem);
    }else{
      console.log(elem)
    }
  }
  return(
    <>
    <div onWheel={(elem)=>{
      scrolling(elem.deltaY);
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      </div>
      
    </>
  )
}

export default App
