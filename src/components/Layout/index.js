import React, { Fragment } from "react";
import { ThemeProvider } from "emotion-theming";
import { Global, css } from "@emotion/core";

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
      <Global
        styles={css`
          :root {
            --color-orange: #fd5e53;
            --color-green: #21bf73;
            --color-white: #FFFFFF;
            --color-black: #000000
          }
        `}
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Fragment>
  );
};

export default Layout;