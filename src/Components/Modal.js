import React from 'react';
import { createPortal } from 'react-dom';
import Navbar from '../Components/Navbar';

import { ModalContainer, Overlay, Grid } from './Modal.styles';

const Modal = ({ open, closeModal, children }) => {
  return (
    open &&
    createPortal(
      <>
        <Overlay onClick={closeModal} />
        <ModalContainer id="portal-container">
          <Navbar />
          <Grid>{children}</Grid>
        </ModalContainer>
      </>,
      document.getElementById('portal')
    )
  );
};

export default Modal;
