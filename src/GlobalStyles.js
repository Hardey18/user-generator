import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url()
    }

    body {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        background: #262a41;
        ${'' /* overflow: hidden; */}
        height: 100vh;
    }
`;

export default GlobalStyle;