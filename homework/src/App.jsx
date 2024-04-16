import "./App.css";
import Counter from './components/Counter/Counter.jsx'
import CharacterCounter from '../src/components/CharacterCounter/CharacterCounter'
import RestaurantView from '../src/components/RestaurantView/RestaurantView.jsx'
import PlayList from './components/PlayList/PlayList'
import Lesson8 from './components/Lesson8.jsx'
import Modal from './components/Modal/Modal.jsx'
import Profile from "./components/Profile/Profile.jsx";

function App() {
  return (
    <>
      <div>
        <h2>Week 1 - First React Component</h2>
        <Profile message="First Week"/>
        <h2>Week 2 - Props and State</h2>
        <CharacterCounter />
        <h2> Week 3 - Props, State, and events</h2>
        <Counter />
        <RestaurantView />
        <h2> Week 4 - Props, State, and Components Practice </h2>
        {/* <PlayList /> started the exercise here and add more functionalities on the week 5 */}
        <Lesson8 />
        <h2> Week 5 - No class - Easter Holidays</h2>
        <h3>Personal Practice</h3>
        <Modal />
        <h2>Week 6 - Conditional rendering </h2>
        <PlayList />
        <h2>Week 7</h2>

      </div>
    </>
  );
}

export default App;
