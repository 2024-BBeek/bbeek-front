'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
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

body, * {
  font-family: "Roboto";
  box-sizing: border-box;
}

body {
  background: '#ffffff';
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  overscroll-behavior-y: none;
  display: flex;
  justify-content: center;
}

a {
  text-decoration: none;
  color: inherit;
}

html {
  @media (max-width: 599px) {
    font-size: 15px;
  }
  @media (max-width: 530px) {
    font-size: 14px;
  }
  @media (max-width: 490px) {
    font-size: 13px;
  }
  @media (max-width: 460px) {
    font-size: 12px;
  }
  @media (max-width: 420px) {
    font-size: 11px;
  }
  @media (max-width: 390px) {
    font-size: 10px;
  }
  @media (max-width: 350px) {
    font-size: 9px;
  }
  @media (max-width: 320px) {
    font-size: 8px;
  }
}

button {
  padding: 0;
  border: none;
  outline: none;
  background: inherit;
  cursor: pointer;
}
`;

export default GlobalStyle;
