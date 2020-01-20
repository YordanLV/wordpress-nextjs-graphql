import React, { Fragment } from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

import Container from './Container';
import Footer from "../Footer";
import ResetCss from "./ResetCss";

const theme = {
  zIndex: {},
  media: {
    xl: "screen and (max-width: 1199px)",
    lg: "screen and (max-width: 991px)",
    md: "screen and (max-width: 767px)",
    sm: "screen and (max-width: 575px)",
    xs: "screen and (max-width: 0px)"
  }
};

const Layout = ({ children }) => {
  return (
    <Fragment>
      <ResetCss />
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
          :root {
            --color-pink: #f6e5f5;
            --color-brown: #f6e7e6;
            --color-blue: #b9cced;
            --color-white: #ffffff;
            --color-black: #000000;
          }
          html {
            /* 1rem = 10px */
            font-size: 62.5%;
          }
          body {
            font-size: 1.6rem;
            background-color: var(--color-pink);
            font-family: 'Montserrat', sans-serif;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <Container>
          {children}
          <Footer />
        </Container>
      </ThemeProvider>
    </Fragment>
  );
};

export default Layout;
