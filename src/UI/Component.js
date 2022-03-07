import React from 'react'
function Component(props) {
  const {count,displayCount}=props
  return (
    <div className="sub-comp" id='count.id' onClick={()=>displayCount(count.id)}>
    {count.value}    
       </div>
  )
  }

export default Component