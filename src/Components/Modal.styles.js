import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1000;
  overflow-y: scroll;
  width: 70%;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const Gallery = styled.div`
  height: 500px;
  background-image: url('https://cdn2.hubspot.net/hubfs/2486333/administrador-edificio.jpg');
  background-position: center;
  background-size: cover;
`;
