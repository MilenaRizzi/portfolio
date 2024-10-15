import styled from "styled-components";

export const EducationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1150px;
  padding: 3rem;

  img {
    width: 200px;
  }

  h1 {
    color: #fcfcfc;
    margin: 0;
    padding-top: 30px;
    padding-left: 8px;
  }
`;

export const Courses = styled.div`
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  padding-bottom: 10px;
  position: relative; /* Para posicionar as setas */

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 8px;
  }

 
`;



export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 8px;
  border: 2px dashed rgba(255, 255, 255); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img#unisul {
    width: 246px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  padding: 40px;  /* Aumentado o padding */
  border-radius: 8px;
  position: relative;
  text-align: center;

  img {
    max-width: 90%;  
    max-height: 80vh; 
    height: auto;
  }

  iframe {
    width: 900px; 
    height: 600px; 
    border: none;
  }

  button {
    position: absolute;
    top: 20px;  /* Ajustado a posição do botão */
    right: 20px;
    background-color: #333;
    border: none;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }
  }
`;
