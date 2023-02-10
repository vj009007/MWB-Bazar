import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { SectionHeader } from "@/components/molecules/Bazaars";
import { useElectronicsBazaarStyles } from "@/static/stylesheets/screens";
import LogoAdd from "@/static/icons/ic_report.png";
import LogoGo from "@/static/icons/ic_go.png";
import { Grid } from "@mui/material";
import { BazaarReportCard } from "@/components/molecules/Bazaars/BazaarReportCard";
import { FeaturesTab } from "@/components/organisms/FeaturesTab";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { AddButton } from "@/components/atoms/Button";
import { useNavigate } from "react-router-dom";
import { WholesellerList } from "@/components/molecules/WholesellerList";
import { ProductsList } from "@/components/molecules/ProductsList";
import { AgentList } from "@/components/molecules/AgentList";
import { SearchField } from "@/components/atoms/SearchField";

const ElectronicsBazaar = () => {
  const classes = useElectronicsBazaarStyles();
  const navigate = useNavigate();

  return (
    <>
      <DashboardLayout>
        <SectionHeader />
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="headingTitle">Electronic Bazaar</div>
            </Grid>

            <Grid item xs={6}>
              <div className={classes.container}>
                <img src={LogoAdd} alt={"Logo"} />
                <p
                  className="reportButton"
                  onClick={() => navigate("/bazaarreport")}
                >
                  View Report
                </p>
                <img src={LogoGo} alt={"Logo"} />
              </div>
            </Grid>

            <Grid item xs={6}>
              <BazaarReportCard
                title="Total Retailers"
                count="53"
                revenue="Total revenue Earned"
                prize="Rz. 1,54,00"
                bills="No of Bills"
                billsNumber="52"
              />
            </Grid>

            <Grid item xs={6}>
              <BazaarReportCard
                title="Total Retailers"
                count="53"
                revenue="Total revenue Earned"
                prize="Rz. 1,54,00"
                bills="No of Bills"
                billsNumber="52"
              />
            </Grid>

            <Grid item xs={6}>
              <div className="bazaarButtons add-bazar">
                <ActionButton variant={"primary"} title={"Today"} />
                <ActionButton variant={"default"} title={"This Week"} />
                <ActionButton variant={"default"} title={"Last Week"} />
                <ActionButton variant={"default"} title={"This Month"} />
                <ActionButton variant={"default"} title={"Last Month"} />
                <ActionButton variant={"default"} title={"Add"} />
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="leftContent">
                <form className="max-w-sm px-4">
                  <div className="relative">
                    <SearchField/>
                  </div>
                </form>

                <div>
                  <AddButton label="Add Bazaar" />
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <FeaturesTab
                items={[
                  {
                    label: "Wholeseller (11)",
                    content: <WholesellerList />,
                  },
                  {
                    label: "Agents (13)",
                    content: <AgentList />,
                  },
                  {
                    label: "Products (230)",
                    content: <ProductsList />,
                  },
                ]}
              />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ElectronicsBazaar;
