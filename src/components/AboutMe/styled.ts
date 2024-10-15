import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  height: 550px;
  background-color: #fcfcfc;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 30px;
  margin-top: 6.25rem;
  color: rgba(0, 0, 0, 0.6); 
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const InfosProfile = styled.div`
  height: 214px;
  display: flex;
  flex-direction: column;

  div {
    margin-top: 20px;
    p {
      font-size: 20px;
    }

    h1 {
      font-size: 40px;
      line-height: 58px;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #95bbe9;

    &:hover {
      color: #f1b8d2;
    }
  }
`;
export const ButtonLestTalk = styled.button`
  width: 166px;
  height: 50px;
  color: white;
  background: linear-gradient(to right, #95bbe9 20%, #f1b8d2 80%);
  border: 2px solid #e8e8e8; 
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 100px;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`;

export const ImageProfile = styled.img`
  border-radius: 100%;
  margin: 30px 32px 0 40px;
  width: 320px;
`;

// export const IconSocialMidia = styled(FontAwesomeIcon)`
//   width: 24px;
//   margin-right: 10px;
//   color: #71a0f9;
// `;
