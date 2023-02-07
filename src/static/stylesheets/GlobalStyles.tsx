import React from "react";
import { Global, css } from "@emotion/react";
import "@/static/css/tailwaind.css";
import "@/static/css/fonts.css";

const styles = () => css`
  body {
    margin: 0;
    padding: 0;
    font-family: "Manrope", serif;
    line-height: 1.5;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: "Manrope", serif;
  }
`;

export const GlobalStyles = () => {
  return <Global styles={styles()} />;
};
