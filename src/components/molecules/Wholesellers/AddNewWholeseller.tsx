import React, { useState } from "react";
import { useNewWholesellerStyles } from "@/static/stylesheets/molecules";
import LogoPrev from "@/static/icons/ic_previous.png";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ActionButton } from "@/components/atoms/Button/ActionButton";

const AddNewWholeseller = () => {
  const classes = useNewWholesellerStyles();
  const [masterType, setMasterType] = useState("Regional Wholeseller");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <div className="headContainer">
        <div className="icon">
          <img src={LogoPrev} alt={"Logo"} />
        </div>
        <div className="headTitle">Add New Wholeseller</div>
      </div>

      <div className="field">
        <div className="bazaarField">
          <Select
            label="Age"
            variant={"standard"}
            fullWidth={true}
            value={masterType}
            onChange={handleChangeMasterType}
          >
            <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
            <MenuItem value={"Regional Wholeseller 1"}>Grocery 1</MenuItem>
          </Select>
        </div>

        <div className="stateField">
          <div>
            <Select
              label="Age"
              variant={"standard"}
              fullWidth={true}
              value={masterType}
              onChange={handleChangeMasterType}
            >
              <MenuItem value={"Regional Wholeseller"}>
                Uttar Pradesh, Delhi + 2more
              </MenuItem>
              <MenuItem value={"Regional Wholeseller 1"}>
                Uttar Pradesh, Delhi + 2more 1
              </MenuItem>
            </Select>
          </div>
          <div>
            <Select
              label="Age"
              variant={"standard"}
              fullWidth={true}
              value={masterType}
              onChange={handleChangeMasterType}
            >
              <MenuItem value={"Regional Wholeseller"}>All Cities</MenuItem>
              <MenuItem value={"Regional Wholeseller 1"}>All Cities 1</MenuItem>
            </Select>
          </div>
        </div>

        <div className="cityField">
          <Select
            label="Age"
            variant={"standard"}
            fullWidth={true}
            value={masterType}
            onChange={handleChangeMasterType}
          >
            <MenuItem value={"Regional Wholeseller"}>
              Regional Wholeseller
            </MenuItem>
            <MenuItem value={"Regional Wholeseller 1"}>
              Regional Wholeseller 1
            </MenuItem>
            <MenuItem value={"Regional Wholeseller 2"}>
              Regional Wholeseller 2
            </MenuItem>
          </Select>
        </div>
      </div>

      <div className="actionButton">
        <ActionButton variant="primary" title="cancel" />
        <ActionButton variant="default" title="save" />
      </div>
    </div>
  );
};

export { AddNewWholeseller };
