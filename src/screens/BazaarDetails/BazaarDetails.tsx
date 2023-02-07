import React from "react";
import { useBazaarDetailsStyles } from "@/static/stylesheets/screens/bazaardetailsStyles";
import AddBazaar from "@/components/molecules/AddBazaar/AddBazaar";

const BazaarDetails = () => {
  const classes = useBazaarDetailsStyles();

  return (
    <div className={classes.root}>
      <AddBazaar />
    </div>
  );
};

export default BazaarDetails;
