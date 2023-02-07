import { css } from "@emotion/css";

export const useBazaarplanListStyles = () => {
  return {
    root: css`
      overflow-x: auto;
      .activeTitle {
        color: #2e2c34;
      }
      .expiredTitle {
        color: #ffa043;
      }
      .revenueTitle {
        color: #ff6652;
      }

      .has-details {
        position: relative;
      }

      .details {
        position: absolute;
        display: inline-block;
        background: white;
        z-index: 20;
        transform: translateY(70%) scale(0);
        transition: transform 0.1s ease-in;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        width: 100%;
        height: 120px;
        padding: 20px;
      }

      .has-details:hover span {
        transform: translateY(70%) scale(1);
      }

      table {
        width: 100%;
        font-size: 14px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        cursor: pointer;
      }
      th {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #84818a;
        width: auto;
        text-align: left;
        border-bottom: 1px solid #e1e1e1;
      }

      td {
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 40px;
        border-bottom: 1px solid #e1e1e1;
      }
      th {
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    `,
  };
};
