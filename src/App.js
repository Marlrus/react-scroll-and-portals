import React, { useState } from 'react';
import './App.css';
import InfoCard from './pages/InfoCard/InfoCard';
import Modal from './Components/Modal';

import { StickyOptions } from './App.styles';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <h1>HAI</h1>
      <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
      <Modal open={isOpen} closeModal={() => setIsOpen(false)}>
        <InfoCard />
        <div>
          <StickyOptions>Opciones Adicionales Sticky</StickyOptions>
        </div>
      </Modal>
    </div>
  );
};

export default App;
