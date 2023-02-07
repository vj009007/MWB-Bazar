import React from "react";
import { useBazaarListStyles } from "@/static/stylesheets/molecules/";
import LogoEcBazaar from "@/static/icons/ic_bookmark.png";
import LogoDot from "@/static/icons/ic_dot.png";

const BazaarsListView = () => {
  const classes = useBazaarListStyles();
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

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
        {data.map((item: any) => (
          <tr>
            <td>
              <div className="brandData">
                <img className="brandLogo" src={LogoEcBazaar} alt={"Logo"} />
                Eletcronics Bazaar
              </div>
            </td>
            <td>Home and kichen appliances</td>
            <td>24</td>
            <td>235</td>
            <td>12</td>
            <td>Rs. XX,XXX</td>
            <td>52</td>
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
