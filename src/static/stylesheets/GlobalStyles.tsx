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

  // select css
  .agent-dropdown {
    position: relative;
    .dropdown {
      position: absolute;
      right: 0;
      top: 100%;
      background: #ffffff;
      box-shadow: 0px 6px 20px rgb(0 0 0 / 10%);
      border-radius: 8px;
      display: none;
      flex-direction: column;
      width: 285px;
      a {
        padding: 12px 25px;
        border-bottom: 1px solid #f0f0f3;
        display: flex;
        gap: 15px;
        align-items: center;
        span.icon {
          background: #f6f6f6;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          width: 36px;
        }
      }
    }
  }
  .agent-dropdown:hover img + .dropdown {
    display: flex !important;
    right: -20px;
    z-index: 999;
  }
  // select css

  //person odel css

  td.person-details {
    position: relative;
    .person-model {
      position: absolute;
      padding: 15px;
      background: #ffffff;
      box-shadow: 0px 6px 20px rgb(0 0 0 / 10%);
      border-radius: 8px;
      width: 195px;
      z-index:9999;
      display:none;
      .job-title {
        background: rgba(0, 165, 255, 0.1);
        border-radius: 4px;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        font-family: 'Manrope';
        color: #00A5FF;
        padding:4px 10px;
      }
    }
  }
  td.person-details:hover 
    .person-model {
      display:flex;
    }
`;

export const GlobalStyles = () => {
  return <Global styles={styles()} />;
};
