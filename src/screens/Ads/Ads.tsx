
import React, { useEffect, useState } from "react";
import {  Dialog, Grid, TextField, TextFieldProps, Typography } from "@mui/material";
import { DashboardLayout } from "@/components/layouts";
import {useAdsStyle} from "@/static/stylesheets/screens/AdsStyle";
import { useNavigate } from "react-router-dom";
import { AddButton, GridOptionButton } from "@/components/atoms/Button";

const Ads = () => {
  const classes = useAdsStyle();
  const navigate = useNavigate();

  return (
    <>
      <DashboardLayout>   
        <div>
          <div className="flex align-middle justify-between">
            <p className="commonTitle">Agents</p>
            <AddButton
              label="Create New Offer"
              onClick={() => navigate("/addagent")}
            />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Ads;
