import { createGlobalStyle } from "styled-components";
import NanumGothic from "./font/NanumGothic.woff";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    
  /* http://meyerweb.com/eric/tools/css/reset/
  v5.0.1 | 20191019
  License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
  display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
  display: none;
  }
  body {
    line-height: 1;
    color:${(props) => props.theme.textColor}
  }
  menu, ol, ul {
  list-style: none;
  }
  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  content: '';
  content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a{
    text-decoration-line: none;
  }
  @font-face {
    font-family: 'NanumGothic';
    font-family: 'NanumGothic';
        src: local('NanumGothic'), local('NanumGothic');
        font-style: normal;
        src: url(${NanumGothic}) format('truetype');
  }
  *{
    box-sizing: border-box;
    font-family: 'Roboto', 'Nanum Gothic', sans-serif;
  }
  body{
    background-color: ${(props) => props.theme.bgColor}
  }

  a {
    color: inherit; 
    text-decoration: none; 
    outline: none;

  }
  a:hover, a:active {
    text-decoration: none; 
    color:#fff; 
  }
  `;

export default GlobalStyles;
