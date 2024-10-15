import styled from "styled-components";

// Estilos do modal
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); // Fundo escuro
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; // Colocar acima de outros elementos
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px 40px;
  border-radius: 10px;
  max-width: 1000px;
  width: 100%;
  text-align: center;
  overflow-y: auto;
  max-height: 85vh;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const AboutMeContent = styled.div` 
  width: 750px;
  margin: 0 auto;
`

export const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6rem;
  text-align: justify;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const TimeLineContent = styled.div`
  margin-top: 60px;
`;

// Estilos do botão de fechar
export const CloseButton = styled.button`
  background: #ff5e5e;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
`;

// Estilos da linha do tempo horizontal
export const Timeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  position: relative;
  padding: 20px 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  &::before {
    content: "";
    position: absolute;
    top: 39%;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #ddd;
    z-index: 1;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  padding: 8px;
`;

export const TimelineDate = styled.span`
  font-size: 1rem;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TimelineCircle = styled.div`
  width: 16px;
  height: 16px;
  background-color: #007bff;
  border-radius: 50%;
  position: relative;
  z-index: 2;
`;

export const TimelineEvent = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  color: #656565;

  a {
    text-decoration: none;
    color: #656565;
    font-weight: bold;

    &:hover {
      color: #f1b8d2;
    }
  }
`;
