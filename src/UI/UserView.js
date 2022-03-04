import React, { useState } from 'react'
import"../UI/UserView.css"
import Component from './Component'

function UserView() {
    const [count,setCount]=useState("")
   const displayCount=(props)=>{
       (count===0)?setCount(1):setCount(0)
      return props.current.innerText=count
    //    console.log(props.current.innerText);
   }
   
    
  return (
      <div className="parent">
          <div className='heding'><h1>Tik-Tac-Toe</h1></div>
    <div className='main-comp'>
        <Component count={count} displayCount={displayCount}/>
        <Component count={count} displayCount={displayCount}/>
        <Component count={count} displayCount={displayCount}/>
        <Component count={count} displayCount={displayCount}/>
        <Component count={count} displayCount={displayCount}/>
        <Component count={count} displayCount={displayCount}/>
        <Component count={count} displayCount={displayCount}/>
        <Component count={count} displayCount={displayCount}/>
        <Component count={count} displayCount={displayCount}/>
    </div>
    </div>
  )
}

export default UserView