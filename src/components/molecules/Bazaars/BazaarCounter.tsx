import React from "react";
import { useBazaarCounterStyles } from "@/static/stylesheets/molecules";

const BazaarCounter = () => {
  const classes = useBazaarCounterStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wholesellerCard}>
        <div>
          <div className="wholesellerItem">
            <p className="headTitle">Total Plans</p>
            <p className="wholesellerCount">8</p>
          </div>
        </div>

        <div className="borderItem">
          <div className="wholesellerItem">
            <p className="headTitle">Total Subscribers</p>
            <p className="subscriberCount">12,065</p>
          </div>
        </div>

        <div className="borderItem">
          <div className="wholesellerItem">
            <p className="headTitle">Revenue Generated</p>
            <p className="revenewCount">Rs. 1,33,902</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BazaarCounter };
