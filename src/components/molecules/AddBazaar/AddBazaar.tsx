import React, { useState } from "react";
import { useAddbazaarStyles } from "@/static/stylesheets/molecules";
import UploaderFrame from "@/static/icons/uploader-frame.png";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

export default function AddBazaar() {
  const classes = useAddbazaarStyles();

  const [masterType, setMasterType] = useState("Regional Wholesaler");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className="uploadIcon">
          <img src={UploaderFrame} alt={"Uploader"} />
        </div>
        <div className={"title"}>Upload Media here</div>
        <div className={"subtitle"}>
          Image can be size of 512 PX by 512 PX Only
        </div>
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
            <MenuItem value={"Regional Wholesaler"}>Grocery</MenuItem>
            <MenuItem value={"Regional Wholesaler 1"}>Grocery 1</MenuItem>
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
              <MenuItem value={"Regional Wholesaler"}>
                Uttar Pradesh, Delhi + 2more
              </MenuItem>
              <MenuItem value={"Regional Wholesaler 1"}>
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
              <MenuItem value={"Regional Wholesaler"}>All Cities</MenuItem>
              <MenuItem value={"Regional Wholesaler 1"}>All Cities 1</MenuItem>
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
            <MenuItem value={"Regional Wholesaler"}>
              Regional Wholeseller
            </MenuItem>
            <MenuItem value={"Regional Wholesaler 1"}>
              Regional Wholeseller 1
            </MenuItem>
            <MenuItem value={"Regional Wholesaler 2"}>
              Regional Wholeseller 2
            </MenuItem>
          </Select>
        </div>
      </div>

      <div></div>
    </div>
  );
}
