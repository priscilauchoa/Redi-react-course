import './App.css'
import Counter from './components/Counter'
import CharacterCounter from './components/CharacterCounter'
import RestaurantView from './components/RestaurantView'
import PlayList from './components/PlayList/PlayList'

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
        <RestaurantView />
        <PlayList />
      </div>
    </>
  )
}

export default App
