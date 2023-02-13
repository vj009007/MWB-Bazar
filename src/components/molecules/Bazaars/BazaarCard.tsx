import React, { useEffect, useState } from "react";
import { useBazaarCardStyles } from "@/static/stylesheets/molecules";
import Logo from "@/static/icons/ic_laptop.png";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const BazaarCard = (props: any) => {
  const classes = useBazaarCardStyles();
  const navigate = useNavigate();

    useEffect(() => {
      // console.log("child", props.getAllBazars);
  
    }, []);


  return (
   <>
 
   {props.getAllBazars.map((addr:any) =>(
      <Grid item xs={4}>
    <div
      className={classes.root}
      onClick={() => navigate("/electronicsbazaar")}
    >
      <div className={classes.container}>
        <div className={classes.bazaarContainer}>
          <div className={classes.bazaarCard}>
            <img className="brandLogo" src={addr.bazaar_image} alt={"Logo"} />
            <p className="headTitle">{addr.bazaar_name}</p>
            <p className="headSubtitle">{addr.bazaar_description}</p>
          </div>

          <div className={classes.wholeSellerContainer}>
            <div className={classes.wholesellerCard}>
              <div className="container">
                <p className="headTitle">{addr.wholesellers}</p>
                <p className="headSubtitle">Wholesellers</p>
              </div>

              <div className="container">
                <p className="headTitle">{addr.agents}</p>
                <p className="headSubtitle">Agents</p>
              </div>

              <div className="container">
                <p className="headTitle">{addr.bazaar_state}</p>
                <p className="headSubtitle">States</p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.revinerContainer}>
          <div className={classes.reveniewCard}>
            <div className="container">
              <div>
                <p className="headTitle">Total Revenue Earned</p>
                <p className="headSubtitle">{addr.earnings}</p>
              </div>

              <div>
                <p className="headTitle">No. of Bills</p>
                <p className="headSubtitle">{addr.bills}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Grid>
   ))}
 
    </>
  );
};
export { BazaarCard };
