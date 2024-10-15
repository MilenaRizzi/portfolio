import styled from "styled-components";

export const TechsContainer = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    text-align: center;
    color: white;
  }

  img {
    margin: 10px;
    opacity: 0;
    transform: translateY(
      20px
    ); /* Adiciona um pequeno deslocamento para dar o efeito de subida */
    transition: opacity 1s, transform 1s;
  }

  img.visible {
    opacity: 1;
    transform: translateY(0); /* Volta à posição normal */
  }

  img:nth-of-type(1) {
    transition-delay: 0.5s;
  }
  img:nth-of-type(2) {
    transition-delay: 1s;
  }
  img:nth-of-type(3) {
    transition-delay: 1.5s;
  }
  img:nth-of-type(4) {
    transition-delay: 2s;
  }
  img:nth-of-type(5) {
    transition-delay: 2.5s;
  }
  img:nth-of-type(6) {
    transition-delay: 3s;
  }
  img:nth-of-type(7) {
    transition-delay: 3.5s;
  }
  img:nth-of-type(8) {
    transition-delay: 4s;
  }
`;
