import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { SectionHeader } from "@/components/molecules/Bazaars";
import AddBazzarTest from "@/components/molecules/AddBazzarTest/AddBazzarTest";

const AddBazaarNew = () => {

  return (
    <>
      <DashboardLayout>
        <SectionHeader />
        <AddBazzarTest/>
      </DashboardLayout>
    </>
  );
};

export default AddBazaarNew;
