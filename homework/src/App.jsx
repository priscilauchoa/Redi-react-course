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
        <Profile message="First Week"/>
        <CharacterCounter />
        <RestaurantView />
        <PlayList />
        <Lesson8 />
        <Modal />
        <Counter />

      </div>
    </>
  );
}

export default App;

// function Button({ onClick, children }) {
//   return (<button onClick={onClick}>{children}</button>);
// }

// // function CounterContent(currentCount) {

// //   setCount()
// //   return (
// //     <div className='counter'>
// //       <CounterButton onClick={coun)} />
// //     </div>
// //   )
// // }

// function ParentComponentFromModal() {
//   const [modalOpen, setModelOpen] = useState(false);

//   const handleOpenModal = () => {
//     setModelOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModelOpen(false);
//   };

//   return (
//     <div className="container">
//       <Button onClick={handleOpenModal}>Open Modal</Button>
//       {modalOpen && <Modal onClose={handleCloseModal}></Modal>}
//     </div>
//   );
// }

// function Modal({ onClose }) {
//   return (
//     <div>
//       <Button onClick={onClose}>X</Button>
//       <main></main>
//     </div>
//   );
// }
