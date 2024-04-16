/* eslint-disable react/prop-types */

import { useState } from "react";

function Button({ onClick, children }) {
    return (<button onClick={onClick}>{children}</button>);
  }
  
  export default function Modal() {
    const [modalOpen, setModelOpen] = useState(false);
  
    const handleOpenModal = () => {
      setModelOpen(true);
    };
  
    const handleCloseModal = () => {
      setModelOpen(false);
    };
  
    return (
      <div className="container">
        <Button onClick={handleOpenModal}>Open Modal</Button>
        {modalOpen && <ModalContent onClose={handleCloseModal}></ModalContent>}
      </div>
    );
  }
  
  function ModalContent({ onClose }) {
    return (
      <div>
        <Button onClick={onClose}>X</Button>
        <main></main>
      </div>
    );
  }
  