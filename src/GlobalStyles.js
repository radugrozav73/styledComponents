import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'IBM Plex Sans Arabic', sans-serif;
        background-color: ${({ colorSwitchOnRoute }) =>
          colorSwitchOnRoute ? "#0F2825" : "#ffffff"};
        transition: .3s ease-in-out;
    }
`;
export default GlobalStyle;
