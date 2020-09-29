import React from 'react';
import { createPortal } from 'react-dom';
import Navbar from '../Components/Navbar';

import { ModalContainer, Overlay, Grid, Gallery } from './Modal.styles';

const Modal = ({ open, closeModal, children, sections }) => {
  return (
    open &&
    createPortal(
      <>
        <Overlay onClick={closeModal} />
        <ModalContainer id="portal-container">
          <Navbar sections={sections} closeModal={closeModal} />
          <Gallery id="gallery" />
          <Grid>{children}</Grid>
        </ModalContainer>
      </>,
      document.getElementById('portal')
    )
  );
};

export default Modal;
