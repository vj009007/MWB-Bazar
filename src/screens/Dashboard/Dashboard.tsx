import React from "react";
import { Grid } from "@mui/material";
import { DashboardLayout } from "@/components/layouts";
import { SummaryCard } from "@/components/molecules/Dashboard/SummaryCard";
import { useDashboardStyles } from "@/static/stylesheets/screens";
import { BazaarReportCard } from "@/components/molecules/Bazaars/BazaarReportCard";
import {
  BazaarCard,
  BazaarCounter,
  BazaarsPlanList,
} from "@/components/molecules/Bazaars";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";

const Dashboard = () => {
  const classes = useDashboardStyles();
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
            <p className="moreButton">See all</p>
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
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
