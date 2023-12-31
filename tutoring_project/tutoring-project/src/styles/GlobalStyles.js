import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
 
const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        line-height: 1.4;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        margin-bottom: 100px;
    }
    ol, ul{
        list-style: none;
    }
    button {
        padding: 0;
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    img {
        width: 100%;
        vertical-align: top;
    }
    .App {
        max-width: 1200px;
        margin: auto;
        padding: 20px;
    }
`;
 
export default GlobalStyles;