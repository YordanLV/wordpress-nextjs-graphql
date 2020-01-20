import React from "react";

import FooterWrapper from "./FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()}, Copyright Wordpress Blog
    </FooterWrapper>
  );
};

export default Footer;
