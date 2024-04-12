// import { useState } from 'react'

// function Counter() {
//   const [count, setCount] = useState(0)
//     function minus(){
//        setCount(count-1)
//     }
//     function plus(){
//        setCount(count+1)
//     }

//   return (
//     <div className='counter'>
//         <button onClick={minus}>-</button>
//         <h3>{count}</h3> 
//         <button onClick={plus}>+</button>
//     </div>
//   )
// }

// export default Counter;  

// import { useState } from 'react'

function Counter() {
  return (
    <div className='counter'>
      {/* <CounterContent currentCount={currentCount}/>
      <CounterButton onClick={currentCount} /> */}
    </div>
  )
}

export default Counter;

// function CounterButton(currentCount) {
//   setCount(currentCount)
//   const [count, setCount] = useState(0)
//   function minus() {
//     setCount(count - 1)
//   }
//   function plus() {
//     setCount(count + 1)
//   }
//   return (
//     <div className='counter'>
//       <button onClick={minus}>-</button>
//       <button onClick={plus}>+</button>
//     </div>
//   )
// }


// function CounterContent(currentCount) {
//   return (
//     <div className='counter'>
//       <h3>{currentCount}</h3>

//     </div>
//   )
// }
