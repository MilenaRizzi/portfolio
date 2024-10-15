import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1300px;
  height: 400px;
  background-color: #fcfcfc;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 30px;
  margin: 42px auto;
  color: rgba(0, 0, 0, 0.6);

  h1 {
    font-size: 45px;
    margin: 0;
    padding-bottom: 10px;
    background: linear-gradient(to right, #95bbe9 5%, #f1b8d2 95%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text; 
    text-fill-color: transparent; 
  }
`;

export const ContactInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 500px;

  p {
    display: flex;
    gap: 10px;
  }
`;

export const StyledImage = styled.img`
  width: 500px;
  margin-top: 50px;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 40px;
    color: white;
    background: linear-gradient(to right, #95bbe9 20%, #f1b8d2 80%);
    border: 2px solid #e8e8e8; // Definindo a borda com a cor rosa
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    padding: 5px;

    &:hover {
      text-decoration: underline; /* Adiciona sublinhado ao passar o mouse */
    }
  }
`;
