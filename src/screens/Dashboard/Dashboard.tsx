import React, { useEffect, useState } from "react";
import { Dialog, Grid, Pagination } from "@mui/material";
import { DashboardLayout } from "@/components/layouts";
import { SummaryCard } from "@/components/molecules/Dashboard/SummaryCard";
import { useDashboardStyles } from "@/static/stylesheets/screens";
import { BazaarReportCard } from "@/components/molecules/Bazaars/BazaarReportCard";
import { BazaarCard,BazaarCounter,BazaarsPlanList,} from "@/components/molecules/Bazaars";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import { AppService } from "../../service/AllApiData.service";

const Dashboard = () => {
  // const [getTotalBazaar, setTotalBazaar] = useState("");
  // const [getWholesellers, setWholesellers] = useState("");
  // const getAllLists = async () => {
  //   const responseJson = await AppService.getAllSummerys();
  //   // console.log(responseJson.data);
  //   totalBazaar(responseJson.data.bazaar);
  //   totalWholesellers(responseJson.data.wholeseller);
   
  // };
 
  // const totalBazaar = (responseJson:any) =>{
  //   let sum = responseJson.data.results.reduce(function(prev: number, current:any) {
  //     return prev + +current.bazaars
  //   }, 0);
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

  // useEffect(() => {
  //   getAllLists();
  // }, []);


  const classes = useDashboardStyles();
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div className={classes.summaryTitle}>
            <p>Summary</p>
          </div>

          <div>
            <SummaryCard />
          </div>

          <div className={classes.commonTitle}>
            <p>Bazar Report</p>
          </div>

          <div className="bazaarButtons">
            <ActionButton variant={"primary"} title={"Today"} />
            <ActionButton variant={"default"} title={"This Week"} />
            <ActionButton variant={"default"} title={"Last Week"} />
            <ActionButton variant={"default"} title={"This Month"} />
            <ActionButton variant={"default"} title={"Last Month"} />
            <ActionButton variant={"default"} title={"Add"} />
          </div>

          <div className="bazaarFilters pt-[20px]">
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
          </div>

          <div className="bazaarReport">
            <BazaarReportCard
              title="Total Retailers"
              count="53"
              revenue="Total revenue Earned"
              prize="Rz. 1,54,00"
              bills="No of Bills"
              billsNumber="52"
            />
            <BazaarReportCard
              title="Total Agents"
              count="53"
              revenue="Commission Paid"
              prize="Rz. 1,54,00"
              bills="Customers Generated"
              billsNumber="1200"
            />
          </div>

          <div className={classes.commonTitle}>
            <p>Plan Sold</p>
            <p className="moreButton" onClick={handleClickOpen}>See all</p>
          </div>

          <div className="bazaarButtons">
            <ActionButton variant={"primary"} title={"Today"} />
            <ActionButton variant={"default"} title={"This Week"} />
            <ActionButton variant={"default"} title={"Last Week"} />
            <ActionButton variant={"default"} title={"This Month"} />
            <ActionButton variant={"default"} title={"Last Month"} />
            <ActionButton variant={"default"} title={"Add"} />
          </div>

          <div className="bazaarFilters pt-[20px]">
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
          </div>

          <div className="counterCard">
            <BazaarCounter />
          </div>

          <div className="planList">
            <BazaarsPlanList />
          </div>

          <div className={classes.commonTitle}>
            <p>All Bazars</p>
            <p className="moreButton">See all</p>
          </div>

          <div className="bazaarCard">
            <Grid container spacing={2}>
              {data.map((item: any) => (
                <Grid item xs={4}>
                  <BazaarCard />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
          {/* All Plans Details */}
          <Dialog open={open} className="planPopUP" onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <div className="flex items-center justify-between">
            <p className="text-[ #2E2C34] text-[18px] font-semibold pb-3">All Plans Sold</p>
            <p className="closeBtn" onClick={handleClose}> </p>
          </div>
          <div className="bazaarButtons">
            <ActionButton variant={"primary"} title={"Today"} />
            <ActionButton variant={"default"} title={"This Week"} />
            <ActionButton variant={"default"} title={"Last Week"} />
            <ActionButton variant={"default"} title={"This Month"} />
            <ActionButton variant={"default"} title={"Last Month"} />
            <ActionButton variant={"default"} title={"Add"} />
          </div>

          <div className="bazaarFilters pt-[20px]">
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
            <TwMultiSelect />
          </div>

          <div className="counterCard pt-5">
            <BazaarCounter />
          </div>

          <div className="planList">
            <BazaarsPlanList />
          </div>
          <div className="flex items-center justify-between pagination">
            <div className="text-[#84818A] text-sm font-medium">Show 8 from 120 products</div>
           <Pagination count={10} variant="outlined" shape="rounded" />
          </div>
          </Dialog>
          {/* All Plans Details */}

      </DashboardLayout>
    </>
  );
};

export default Dashboard;
