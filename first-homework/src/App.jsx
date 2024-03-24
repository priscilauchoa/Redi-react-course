import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
          <a href="https://github.com/priscilauchoa"> <img src="https://avatars.githubusercontent.com/u/22195904?v=4" className="logo" alt="Vite logo" /></a>
        
      </div>
      <h1>Priscila Flores </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Redi - React Spring 24 👋
        </p>
      </div>
    </>
  )
}

export default App
