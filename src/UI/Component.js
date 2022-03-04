import React, { useRef } from 'react'
function Component(props) {
    const ref=useRef(null)
    const {count,displayCount}=props;
  return (
    <div className="sub-comp" id='ref' ref={ref} onClick={()=>displayCount(ref)}>
    {count}    
       </div>
  )
}

export default Component