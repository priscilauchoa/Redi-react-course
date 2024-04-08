import './App.css'
import Counter from './Counter'
import CharacterCounter from './CharacterCounter'

function App() {

  return (
    <>
       <div>
          <a href="https://github.com/priscilauchoa"> <img src="https://avatars.githubusercontent.com/u/22195904?v=4" className="logo" alt="Vite logo" /></a>
        
      </div>
      <h1>Priscila Flores </h1>
      <div className="card">
      <Counter />

        <p>
          Hello there! 👋
        </p>
        <CharacterCounter />
      </div>
    </>
  )
}

export default App
