import React, { useEffect, useState } from "react";
import { useBazaarCardStyles } from "@/static/stylesheets/molecules";
import Logo from "@/static/icons/ic_laptop.png";
import { useNavigate } from "react-router-dom";
import { AppService } from "../../../service/AllApiData.service";

const BazaarCard = () => {
  const classes = useBazaarCardStyles();
  const navigate = useNavigate();
  const [getAllBazar, setGetAllBazar] = useState([]);

  const getAllLists = async () => {
    const responseJson = await AppService.getAllBazarList();
    setGetAllBazar(responseJson.data.results);
    // console.log("ecomprd", responseJson.data);
  };

  useEffect(() => {
    getAllLists();
  }, []);

  return (
    <>
      {" "}
      {getAllBazar.map((mainData: any) => (
        <>
          <>{console.log(mainData.url)}</>
          <div
            className={classes.root}
            onClick={() => navigate("/electronicsbazaar")}
          >
            <div className={classes.container}>
              <div className={classes.bazaarContainer}>
                <div className={classes.bazaarCard}>
                  <img
                    className="brandLogo"
                    src={mainData.bazaar_image}
                    alt={"Logo"}
                  />
                  <p className="headTitle">{mainData.test}</p>
                  <p className="headSubtitle">{mainData.bazaar_description}</p>
                </div>

                <div className={classes.wholeSellerContainer}>
                  <div className={classes.wholesellerCard}>
                    <div className="container">
                      <p className="headTitle">{mainData.wholesellers}</p>
                      <p className="headSubtitle">Wholesellers</p>
                    </div>

                    <div className="container">
                      <p className="headTitle">{mainData.agents}</p>
                      <p className="headSubtitle">Agents</p>
                    </div>

                    <div className="container">
                      <p className="headTitle">{mainData.states}</p>
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
                      <p className="headSubtitle">{mainData.earnings}</p>
                    </div>

                    <div>
                      <p className="headTitle">No. of Bills</p>
                      <p className="headSubtitle">{mainData.bills}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export { BazaarCard };
