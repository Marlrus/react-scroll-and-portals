import React, { useState } from 'react';
import './App.css';
import InfoCard from './pages/InfoCard/InfoCard';
import Modal from './Components/Modal';

import { StickyOptions } from './App.styles';

const App = () => {
  const initial_sections = [
    'gallery',
    'section1',
    'section2',
    'section3',
    'section4',
    'section5',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [sections, setSections] = useState(initial_sections);

  const darkSections = ['gallery', 'section1', 'section3', 'section5'];
  const lightSections = ['gallery', 'section2', 'section4'];

  const filterSections = (sections, toFilter) =>
    setSections(sections.filter((section) => toFilter.includes(section)));

  return (
    <div className="App">
      <h1 className="main-title">PUREBA DE MODAL</h1>
      <div className="button-container">
        <button className="button" onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        <button
          className="button"
          onClick={() => filterSections(initial_sections, darkSections)}
        >
          Filter 2 & 4
        </button>
        <button
          className="button"
          onClick={() => filterSections(initial_sections, lightSections)}
        >
          Filter 1, 3 & 5
        </button>
        <button
          className="button"
          onClick={() => filterSections(initial_sections, initial_sections)}
        >
          Reset Filter
        </button>
      </div>
      <Modal
        open={isOpen}
        closeModal={() => setIsOpen(false)}
        sections={sections}
      >
        <InfoCard sections={sections} />
        <div>
          <StickyOptions>Opciones Adicionales Sticky</StickyOptions>
        </div>
      </Modal>
    </div>
  );
};

export default App;
