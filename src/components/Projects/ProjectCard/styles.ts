import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  width: 1100px;
  height: 320px;
  display: flex;
  background-color: white;
  justify-content: space-around;
  align-items: stretch;
  background-color: #fcfcfc;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 30px;
  color: rgba(0, 0, 0, 0.6);
  padding: 4rem 2rem;

  iframe {
    border: none;
    width: 50%;
    height: 100%; 
    
  }
`;

export const ProjectInfos = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    h1,  {
      margin: 0;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 160px;
    height: 40px;
    border: 2px solid;
    border-image: linear-gradient(to right, #95bbe9 20%, #f1b8d2 80%) 1;
    background-color: white;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    color: #f1b8d2;

    &:hover {
      text-decoration: underline; 
      color: #95bbe9;
    }
  }
`;
