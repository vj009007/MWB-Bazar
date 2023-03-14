import React from "react";
import { Grid } from "@mui/material";
import { FeaturesTab } from "@/components/organisms/FeaturesTab";
import { Planview } from "../PlanCard";
import {usePlanTabStyle} from "@/static/stylesheets/molecules";

const PlanTab = () => {
  const classes = usePlanTabStyle();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FeaturesTab
            items={[
              {
                label: "All Plans (20)",
                content: <Planview />,
              },
              {
                label: "Free (13)",
                content: <Planview />,
              },
              {
                label: "Paid(23)",
                content: <Planview />,
              },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PlanTab;
