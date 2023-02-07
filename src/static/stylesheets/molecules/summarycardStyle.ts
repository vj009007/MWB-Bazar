import { css } from "@emotion/css";

export const useSummarycardStyle = () => {
  return {
    root: css`
      display: flex;
      width: 100%;
      height: auto;
    `,

    bazaarCard: css`
      font-size: 16px;
      font-family: "Manrope", serif;
      width: 300px;
      padding: 20px 40px 20px 40px;
      background: #fbfafc;
      border: 2px solid #e1e1e1;

      .headTitle {
        font-size: 14px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
      }

      .headSubtitle {
        font-size: 30px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
      }
    `,

    wholesellerCard: css`
      display: flex;
      gap: 65px;
      padding: 20px 40px 20px 40px;
      width: 100%;
      background: #fafafa;
      border: 2px solid #e1e1e1;

      .wholesellerItem {
        border-right: 3px solid #e1e1e1;
        padding-right: 20px;
      }
      .headTitle {
        font-size: 14px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
      }

      .headSubtitle {
        font-size: 30px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
      }
    `,

    agentsCard: css`
      display: flex;
      gap: 65px;
      padding: 20px 40px 20px 40px;
      width: 100%;
      background: #f9fbff;
      border: 2px solid #e1e1e1;

      .agentItem {
        border-right: 3px solid #e1e1e1;
        padding-right: 20px;
      }
      .headTitle {
        font-size: 14px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
      }

      .headSubtitle {
        font-size: 30px;
        font-family: "Manrope", serif;
        font-style: normal;
        font-weight: 600;
      }
    `,
  };
};
