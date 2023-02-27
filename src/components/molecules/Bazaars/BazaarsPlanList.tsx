import React, { useEffect, useState } from "react";
import { useBazaarplanListStyles } from "@/static/stylesheets/molecules";
import { AppService } from "@/service/AllApiData.service";

const BazaarsPlanList = () => {
  const classes = useBazaarplanListStyles();
  const data = [1, 2, 3, 4, 5, 6, 7];
  const [getPlans, setTotalPlans] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
    const handlePrevClick = () => {
     setPage(page - 1);
     
   }
 
   const handleNextClick = async () => {
     setPage(page + 1);
   }

   const startIndex = (page - 1) * itemsPerPage;
   const displayedItems = getPlans.slice(startIndex, startIndex + itemsPerPage);


  const getAllLists = async () => {
    const responseJson = await AppService.getAllPlansData();
    // console.log(responseJson.data.bazaar);
    setTotalPlans(responseJson.data.results);
    
    // totalWholesellers(responseJson);
   
  };
 
  // const totalBazaar = (responseJson:any) =>{
  //   let sum = responseJson.data = (datas:any)=> {
  //     return datas.bazaars
  //   };
  //   console.log(sum);
  //   setTotalBazaar(sum);
  // }

  // const totalWholesellers = (responseJson:any) =>{
  //   let sum = responseJson.data.results.reduce(function(prev: number, current:any) {
  //     return prev + +current.wholesellers
  //   }, 0);
  //   console.log(sum);
  //   setWholesellers(sum);
  // }

  useEffect(() => {
    getAllLists();
  }, []);

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

        {getPlans.map((item: any) => (
          <tr>
            <td className="plan-name">{item.plan_name}</td>
            <td>{item.bazaar}</td>
            <td className="state">{item.state}</td>
            <td className="has-details">
            {item.district}
            </td>
            <td> {item.city}</td>
            <td className="duration">{item.duration}</td>
            <td className="price">Rs. {item.plan_price}</td>
            <td>
              <table className="inside-table">
                <tr>
                  <td className="activeTitle">{item.subscribers_active}</td>
                  <td className="expiredTitle">{item.subscribers_expired}</td>
                  <td className="revenueTitle">{item.subscribers_deactivated}</td>
                </tr>
              </table>
            </td>
            <td className="pr-0">
              <div className="flex items-center gap-3 whitespace-nowrap">
                <div>
                  <div> Rs. {item.revenue_generated}</div>
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
