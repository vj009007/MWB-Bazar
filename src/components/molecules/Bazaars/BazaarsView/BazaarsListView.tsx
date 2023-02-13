import React, { useEffect, useState } from "react";
import { useBazaarListStyles } from "@/static/stylesheets/molecules/";
import LogoEcBazaar from "@/static/icons/ic_bookmark.png";
import LogoDot from "@/static/icons/ic_dot.png";
import { AppService } from "../../../../service/AllApiData.service";

const BazaarsListView = () => {
  const classes = useBazaarListStyles();
  const [getAllBazar, setGetAllBazar] = useState([]);

  const getAllLists = async () => {
    const responseJson = await AppService.getAllBazarList();
    setGetAllBazar(responseJson.data.results);
  };

  useEffect(() => {
    getAllLists();
  }, []);


  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th className="nameTitle">BAZAAR NAME</th>
          <th className="categoryTitle">GROUP CATEGORY</th>
          <th className="wholesellerTitle">WHOLESELLERS</th>
          <th className="agentTitle">AGENTS</th>
          <th className="statesTitle">STATES</th>
          <th className="revenewEarned">REVENUE EARNED</th>
          <th className="billsTitle">NO. OF BILLS</th>
          <th></th>
        </tr>
        {getAllBazar.map((item: any) => (
          <tr>
            <td>
              <div className="brandData">
                <img className="brandLogo" src={LogoEcBazaar} alt={"Logo"} />
                {item.bazaar_name}
              </div>
            </td>
            <td>Home and kichen appliances</td>
            <td> {item.wholesellers}</td>
            <td>{item.agents}</td>
            <td>{item.states}</td>
            <td>Rs. {item.earnings}</td>
            <td>{item.bills}</td>
            <td>
              <img src={LogoDot} alt={"Logo"} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export { BazaarsListView };
