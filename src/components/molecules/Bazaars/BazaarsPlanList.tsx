import React from "react";
import { useBazaarplanListStyles } from "@/static/stylesheets/molecules";

const BazaarsPlanList = () => {
  const classes = useBazaarplanListStyles();
  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={classes.root}>
      <table className="plan-table">
        <tr>
          <th>Plan Name</th>
          <th>Bazaar</th>
          <th>State</th>
          <th>District</th>
          <th>City</th>
          <th className="duration">Duration</th>
          <th>Plan Price</th>
          <th>
            Subscribers
            <table className="inside-table">
              <tr>
                <th>Active</th>
                <th>Expired</th>
                <th>Deactivated</th>
              </tr>
            </table>
          </th>
          <th>Revenue Generated</th>
        </tr>

        {data.map((item: any) => (
          <tr>
            <td className="plan-name">Plan Name</td>
            <td>Electronics Bazaar, Computer Bazaar</td>
            <td className="state">UP, Delhi</td>
            <td className="has-details">
              GB Nagar, Ghaziabad, + 1
              <span className="details">more info here</span>
            </td>
            <td>Ghaziabad, Noida, Delhi</td>
            <td className="duration">7 days</td>
            <td className="price">Rs. 10,000</td>
            <td>
              <table className="inside-table">
                <tr>
                  <td className="activeTitle">141</td>
                  <td className="expiredTitle">14</td>
                  <td className="revenueTitle">7</td>
                </tr>
              </table>
            </td>
            <td className="pr-0">
              <div className="flex items-center gap-3 whitespace-nowrap">
                <div>
                  <div> Rs. 12000</div>
                  <div className="w-full bg-[#EBEAED] rounded-sm h-1 mt-1">
                    <div
                      className="bg-[#5542F6] h-1 rounded-  "
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <div>16.30%</div>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export { BazaarsPlanList };
