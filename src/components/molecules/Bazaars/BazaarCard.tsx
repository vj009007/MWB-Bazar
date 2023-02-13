import React, { useEffect, useState } from "react";
import { useBazaarCardStyles } from "@/static/stylesheets/molecules";
import Logo from "@/static/icons/ic_laptop.png";
import { useNavigate } from "react-router-dom";

const BazaarCard = (props: any) => {
  const classes = useBazaarCardStyles();
  const navigate = useNavigate();

    useEffect(() => {
      // console.log("child", props.getAllBazars);
  
    }, []);


  return (
    <div
      className={classes.root}
      onClick={() => navigate("/electronicsbazaar")}
    >
      <div className={classes.container}>
        <div className={classes.bazaarContainer}>
          <div className={classes.bazaarCard}>
            <img className="brandLogo" src={props.getAllBazars.bazaar_image} alt={"Logo"} />
            <p className="headTitle">{props.getAllBazars.bazaar_name}</p>
            <p className="headSubtitle">{props.getAllBazars.bazaar_description}</p>
          </div>

          <div className={classes.wholeSellerContainer}>
            <div className={classes.wholesellerCard}>
              <div className="container">
                <p className="headTitle">{props.getAllBazars.wholesellers}</p>
                <p className="headSubtitle">Wholesellers</p>
              </div>

              <div className="container">
                <p className="headTitle">13</p>
                <p className="headSubtitle">{props.getAllBazars.agents}</p>
              </div>

              <div className="container">
                <p className="headTitle">{props.getAllBazars.states}</p>
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
                <p className="headSubtitle">{props.getAllBazars.earnings}</p>
              </div>

              <div>
                <p className="headTitle">No. of Bills</p>
                <p className="headSubtitle">{props.getAllBazars.bills}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { BazaarCard };
