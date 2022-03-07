import React, { useState} from 'react'
import"../UI/UserView.css"
import Component from './Component'
let components=[{
  "id":0,
  "value":null
},
{
  "id":1,
  "value":null
},
{
  "id":2,
  "value":null
},
{
  "id":3,
  "value":null
},
{
  "id":4,
  "value":null
},
{
  "id":5,
  "value":null
},
{
  "id":6,
  "value":null
},
{
  "id":7,
  "value":null
},
{
  "id":8,
  "value":null
}
]
function UserView() {
    const [count,setCount]=useState(components)
    const [turn,setTurn]=useState("X")
    const [check,setCheck]=useState([])
   const displayCount=(id)=>{
     
     if(count[id].value===null)
     { 
    //  console.log( "_.isEqual(checkX, count)"); // true
      console.log(count);
       if(turn==="X"){
        setTurn("0")
      count[id].value="0"
      setCount([...count]) 
      winCheck() 
       }else{
        setTurn("X")
        count[id].value="X"
        setCount([...count])
        winCheck()
        }
     }
   }     
   const winCheck=()=>{
     
   let a=count.filter(ind=>{
      return ind.value==="X"
    })
   let b=count.filter(ind=>{
      return ind.value==="0"
    })
    let x=0;
    let y=0;
    a.map((index)=>{
       x+=index.id
      
    })
    b.map((index)=>{
      y+=index.id
     
   })
      if((x%3===0) && a.length!==1&&a.length!==2&&a.length!==0)
      {
       alert("winner")
      }
      if((y%3===0) && b.length!==1&&b.length!==2&&b.length!==0)
      {
      alert("B winner")   
      }
  }
  const resetHandler=()=>{
    window.location.reload(true);
  }
  return (
      <div className="parent">
          <div className='heding'><h1>Tik-Tac-Toe</h1></div>
    <div className='main-comp'>
      {
          count.map((index)=>{
            return <Component key={index.id} count={index} displayCount={displayCount} />
          })
       
      }
    </div>
    <button onClick={resetHandler}>reset</button>
    </div>
  )
}

export default UserView