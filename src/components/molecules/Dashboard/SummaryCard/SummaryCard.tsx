import React, { useEffect, useState } from "react";
import { useSummarycardStyle } from "@/static/stylesheets/molecules/summarycardStyle";
import { AppService } from "../../../../service/AllApiData.service";

const SummaryCard = () => {
  const [getTotalBazaar, setTotalBazaar] = useState("");
  const [getWholesellers, setWholesellers] = useState("");
  const getAllLists = async () => {
    const responseJson = await AppService.getAllSummerys();
    console.log(responseJson.data.results);
    totalBazaar(responseJson);
    totalWholesellers(responseJson);
   
  };
 
  const totalBazaar = (responseJson:any) =>{
    let sum = responseJson.data.results.reduce(function(prev: number, current:any) {
      return prev + +current.bazaars
    }, 0);
    console.log(sum);
    setTotalBazaar(sum);
  }

  const totalWholesellers = (responseJson:any) =>{
    let sum = responseJson.data.results.reduce(function(prev: number, current:any) {
      return prev + +current.wholesellers
    }, 0);
    console.log(sum);
    setWholesellers(sum);
  }

  useEffect(() => {
    getAllLists();
  }, []);
  const classes = useSummarycardStyle();

  return (
    <div className={classes.root}>
      <div className={classes.bazaarCard}>
        <p className="headTitle">Total Bazar</p>
        <p className="headSubtitle">{getTotalBazaar}</p>
      </div>

      <div className={classes.wholesellerCard}>
        <div className="wholesellerItem">
          <p className="headTitle">Total Wholesellers</p>
          <p className="headSubtitle">{getWholesellers}</p>
        </div>
        <div>
          <p className="headTitle2">Total Revenue Earned</p>
          <p className="headSubtitle2">Rs. 1,54,000</p>
        </div>
        <div>
          <p className="headTitle2">No. of Bills</p>
          <p className="headSubtitle2">52</p>
        </div>
      </div>

      <div className={classes.agentsCard}>
        <div className="agentItem">
          <p className="headTitle">Total Agents</p>
          <p className="headSubtitle">53</p>
        </div>
        <div>
          <p className="headTitle2">Commission Paid</p>
          <p className="headSubtitle2">Rs. 54,000</p>
        </div>
        <div>
          <p className="headTitle2">Customers Generated</p>
          <p className="headSubtitle2">1200</p>
        </div>
      </div>
    </div>
  );
};

export { SummaryCard };
