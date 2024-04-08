import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
    function minus(){
       setCount(count-1)
    }
    function plus(){
       setCount(count+1)
    }
 
  return (
    <div className='counter'>
        <button onClick={minus}>-</button>
        <h3>{count}</h3> 
        <button onClick={plus}>+</button>
    </div>
  )
}

export default Counter;   