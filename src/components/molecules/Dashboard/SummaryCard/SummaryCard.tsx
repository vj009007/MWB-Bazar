import React from "react";
import { useSummarycardStyle } from "@/static/stylesheets/molecules/summarycardStyle";

const SummaryCard = () => {
  const classes = useSummarycardStyle();

  return (
    <div className={classes.root}>
      <div className={classes.bazaarCard}>
        <p className="headTitle">Total Bazar</p>
        <p className="headSubtitle">10</p>
      </div>

      <div className={classes.wholesellerCard}>
        <div className="wholesellerItem">
          <p className="headTitle">Total Wholesellers</p>
          <p className="headSubtitle">53</p>
        </div>
        <div>
          <p className="headTitle">Total Revenue Earned</p>
          <p className="headSubtitle">Rs. 1,54,000</p>
        </div>
        <div>
          <p>No. of Bills</p>
          <p className="headSubtitle">52</p>
        </div>
      </div>

      <div className={classes.agentsCard}>
        <div className="agentItem">
          <p className="headTitle">Total Agents</p>
          <p className="headSubtitle">53</p>
        </div>
        <div>
          <p className="headTitle">Commission Paid</p>
          <p className="headSubtitle">Rs. 54,000</p>
        </div>
        <div>
          <p className="headTitle">Customers Generated</p>
          <p className="headSubtitle">1200</p>
        </div>
      </div>
    </div>
  );
};

export { SummaryCard };
