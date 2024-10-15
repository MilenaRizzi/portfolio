import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px 35px;

  img {
    width: 60px;
  }
`;

export const NavigatorMenu = styled.nav`
  display: flex;
  gap: 40px;
  font-weight: bold;

  p {
    cursor: pointer;

    &:hover {
      color: #999999;
    }
  }
`;
