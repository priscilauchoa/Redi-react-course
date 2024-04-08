//TODO Build a characters counter.

// Build a simple character counter that lets you know how many characters you have typed inside

//? WHat we need?
// An input of type text where the user can type text
// A span/p tag where to display the amount of characters inside the input. This number should update every time we type or delete a character.

//? How to build it?

//Create a state variable to store the text typed and initialise it
//Define Event Handler Function:. This function will update the text state with the value entered in the textarea.
//Display count: in JSX, create a tag which displays the number of characters of the string stored in the state variable

//! Bonus Point:
//your input accepts a character limit of 50. Display a message to the user when the limit is reached
import { useState } from "react"; 

function CharacterCounter() {
  const [characters, setCharacters] = useState("")
  const [limitMessage, setLimitMessage] = useState("")
  
  function counter(e){
    if(e.target.value.length <= 50){
      setCharacters(e.target.value.length)
      setLimitMessage("");
    }
    if(e.target.value.length >= 50){
      setLimitMessage("You typed 50 characters. Limit of characters achieved");
    }
  }
  return (
    <div>
      <h1>Characters Counter Input</h1>
      <input maxLength={50} onChange={(e)=>counter(e)}type="text"></input>
      <br></br>
      <br></br>
      { limitMessage !== "" ? <h3 className="red">{limitMessage}❗️❗️❗️ </h3> :
      <h3 className="blue">You typed {characters} characters 🚀</h3> }
    </div>
  );
}

export default CharacterCounter;
