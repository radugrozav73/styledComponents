import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: ${({ colorSwitchOnServiceRoute }) =>
        colorSwitchOnServiceRoute ? "#0F2825" : "#ffffff"};
        transition: .3s ease-in-out;
    }
`;
export default GlobalStyle;
