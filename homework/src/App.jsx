import "./App.css";
import Counter from "./components/Counter/Counter.jsx";
import CharacterCounter from "../src/components/CharacterCounter/CharacterCounter";
import RestaurantView2 from "../src/components/RestaurantView2/RestaurantView2.jsx";
import PlayList from "./components/PlayList/PlayList";
import Lesson8 from "./components/Lesson8/Lesson8.jsx";
import Modal from "./components/Modal/Modal.jsx";
import Profile from "./components/Profile/Profile.jsx";
// import RestaurantView from "./components/views/RestaurantView.jsx";
/* eslint-disable react/prop-types */

function App() {
  return (
    <>
      <div>
        <h2>Week 1 - First React Component</h2>
        <Profile message="First Week" />
        <h2>Week 2 - Props and State</h2>
        <CharacterCounter />
        <h2> Week 3 - Props, State, and events</h2>
        <Counter />
        {/* <RestaurantView /> */}
        <h2> Week 4 - Props, State, and Components Practice </h2>
        {/* <PlayList /> started the exercise here and add more functionalities on the week 5 */}
        <Lesson8 />
        <h2> Week 5 - No class - Easter Holidays</h2>
        <h3>Personal Practice</h3>
        <Modal />
        <h2>Week 6 - Conditional rendering </h2>
        {/* <PlayList /> started the exercise here and add more functionalities on the week 8 */}
        <RestaurantView2 />
        {/* <RestaurantView /> */}
        <h2>Week 7</h2>
        <h2>
          Organize folders and apply Css Modules to Playlist and ButtonModule
          components
        </h2>
        <h2>Week 8</h2>
        <PlayList />
      </div>
    </>
  );
}

export default App;
