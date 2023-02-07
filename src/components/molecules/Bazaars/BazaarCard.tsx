import React from "react";
import { useBazaarCardStyles } from "@/static/stylesheets/molecules";
import Logo from "@/static/icons/ic_laptop.png";
import { useNavigate } from "react-router-dom";

const BazaarCard = () => {
  const classes = useBazaarCardStyles();
  const navigate = useNavigate();

  return (
    <div
      className={classes.root}
      onClick={() => navigate("/electronicsbazaar")}
    >
      <div className={classes.container}>
        <div className={classes.bazaarContainer}>
          <div className={classes.bazaarCard}>
            <img className="brandLogo" src={Logo} alt={"Logo"} />
            <p className="headTitle">Computer Bazaar</p>
            <p className="headSubtitle">Laptop | Computer + 5</p>
          </div>

          <div className={classes.wholeSellerContainer}>
            <div className={classes.wholesellerCard}>
              <div className="container">
                <p className="headTitle">20</p>
                <p className="headSubtitle">Wholesellers</p>
              </div>

              <div className="container">
                <p className="headTitle">13</p>
                <p className="headSubtitle">Agents</p>
              </div>

              <div className="container">
                <p className="headTitle">12</p>
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
                <p className="headSubtitle">Rs. 1,54,000</p>
              </div>

              <div>
                <p className="headTitle">No. of Bills</p>
                <p className="headSubtitle">52</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BazaarCard };
