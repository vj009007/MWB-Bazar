import { css } from "@emotion/css";

export const useWholesellerReportCardStyle = () => {
  return {
    root: css`
      .borderItem {
        border-left: 3px solid #e1e1e1;
      }

      .wholesellerItem {
        padding-left: 40px;
        padding-right: 40px;
      }

      .headTitle {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #2e2c34;
      }

      .headContent {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        color: #2e2c34;
      }
    `,
  };
};
