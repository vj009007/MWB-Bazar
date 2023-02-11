import React from "react";
import { BazaarCard } from "@/components/molecules/Bazaars";
import { Grid } from "@mui/material";
import { useBazaarsStyles } from "@/static/stylesheets/screens";

const BazaarsGridView = () => {
  const classes = useBazaarsStyles();
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2}>
       
            <Grid item xs={4}>
              <BazaarCard />
            </Grid>
         
        </Grid>
      </div>
    </>
  );
};

export { BazaarsGridView };
