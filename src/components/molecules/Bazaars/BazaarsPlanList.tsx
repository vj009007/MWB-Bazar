import React from "react";
import { useBazaarplanListStyles } from "@/static/stylesheets/molecules";

const BazaarsPlanList = () => {
  const classes = useBazaarplanListStyles();
  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th>Plan Name</th>
          <th>Bazaar</th>
          <th>State</th>
          <th>District</th>
          <th>City</th>
          <th>Duration</th>
          <th>Plan Price</th>
          <th>Active</th>
          <th>Expired</th>
          <th>Deactivated</th>
          <th>Revenue Generated</th>
          <th></th>
          <th></th>
        </tr>

        {data.map((item: any) => (
          <tr>
            <td>Plan Name</td>
            <td>Electronics Bazaar, Computer Bazaar</td>
            <td>UP, Delhi</td>
            <td className="has-details">
              GB Nagar, Ghaziabad, + 1
              <span className="details">more info here</span>
            </td>
            <td>Ghaziabad, Noida, Delhi</td>
            <td>7 days</td>
            <td>Rs. 10,000</td>
            <td className="activeTitle">141</td>
            <td className="expiredTitle">14</td>
            <td className="revenueTitle">7</td>
            <td>
              Rs. 12000
              <div className="w-full bg-[#EBEAED] rounded-full h-2.5">
                <div
                  className="bg-[#5542F6] h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </td>
            <td>16.30%</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export { BazaarsPlanList };
