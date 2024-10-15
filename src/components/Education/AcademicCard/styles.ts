import styled from "styled-components";
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
  width: 340px;
  height: 340px;
  background-color: rgba(255, 255, 255, 0.2); /* Branco com 70% de opacidade */
  padding: 20px;
  border-radius: 8px;
  border: 2px dashed rgba(255, 255, 255); /* Borda tracejada */

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #656565;

  // overflow: hidden;
  // cursor: pointer;
  // transition: transform 0.3s;
  // &:hover {
  //   transform: scale(1.05);
  // }
`;

export const CardImage = styled.img`
  height: auto;
  margin: 0 auto;
`;

export const CardContent = styled.div`
  padding: 16px;
  height: 170px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  color: black;
`;

export const CardProperties = styled.div`
  list-style: none;
  padding: 0;
  color: #656565;
  p {
    margin-bottom: 8px;
  }

  ul {
    li {
      color: #656565;
    }
  }

  a {
    color: #656565;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #76bbe9;
    }
  }
`;

export const ViewImageLink = styled.a`
  color: #76bbe9;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;
