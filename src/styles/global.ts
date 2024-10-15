import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Open Sans", sans-serif;
        margin: 0;
        padding: 0;
        background: linear-gradient(to right, rgba(149, 187, 233, 0.6), rgba(241, 184, 210, 0.60));
        width: 100%;
        height: 100vh; 
    }
`;
