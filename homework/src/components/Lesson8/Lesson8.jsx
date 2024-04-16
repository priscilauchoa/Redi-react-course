// import './styles.css';
import { Fragment, useState } from 'react';

/**
 * INSTRUCTIONS:
 *
 * 1. Turn the input into a controlled component by adding a related component
 * state. [DOCS: https://bit.ly/3VXcaNI]
 * 2. Clicking the "SHOW" button should toggle the input text visibility, and
 * the button label should toggle between "SHOW" and "HIDE".
 * [DOCS: https://mzl.la/3Ue6HRy]
 * 3. Clicking the "CLEAR" button should clear the input. If the input is empty,
 * this button should be disabled.
 * 4. The warning message should only be displayed when the password is longer
 * than 10 characters.
 */


const PasswordInput = () => {
  const [text,setText] = useState("")
  const [typeInput,setTextInput] = useState("password")
  const [disabled,setDisabled] = useState(false)
  const [isVisible,setIsVisible] = useState(false)
  const [limitMessage, setLimitMessage] = useState(false)
  
  function handleIsVisisble(){
    setIsVisible(prevState => !prevState)
  }

  function handleText(value){
    setText(value)
    setDisabled(false)
    console.log(value.length)
    value.length === 10 ? setLimitMessage(true) : setLimitMessage(false)
  }

  function showPass(){
    setTextInput(typeInput == "password" ? "text" : "password")
   }

  function clearPassword(){
    setText("")
    handleIsVisisble ? setDisabled(true) : setDisabled(false)
   }

  console.log("## disabled and isVisible",disabled, isVisible)
  return (
    <Fragment>
      <div className="flex-container container">
        <input maxLength="10" value={text} onChange={(e)=>handleText(e.target.value)} type={typeInput} />
        <button onClick={showPass}>{typeInput == "password" ? "Show" : "Hide" }</button>
        <button disabled={disabled} onClick={clearPassword}>Clear</button> 
      {limitMessage && <p className="warning">🚨 Must be no more than 10 characters!</p> }
      </div>
    </Fragment>
  );
};

export default PasswordInput;

