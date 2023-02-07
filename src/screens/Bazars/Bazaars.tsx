import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts";
import { SectionHeader } from "@/components/molecules/Bazaars";
import { Grid } from "@mui/material";
import { Breadcrumbs } from "@/components/molecules/Breadcrumb";
import {
  BazaarsGridView,
  BazaarsListView,
} from "@/components/molecules/Bazaars/BazaarsView";

const Bazaars = () => {
  const [itemView, setItemView] = useState("Grid");
  return (
    <>
      <DashboardLayout>
        <SectionHeader />
        <Grid container rowSpacing={1} columnSpacing={1}>
          <Grid item xs={12}>
            <Breadcrumbs
              setItemView={(item: any) => setItemView(item)}
              itemType={itemView}
            />
          </Grid>
          {itemView === "Grid" ? <BazaarsGridView /> : <BazaarsListView />}
        </Grid>
      </DashboardLayout>
    </>
  );
};

export default Bazaars;
