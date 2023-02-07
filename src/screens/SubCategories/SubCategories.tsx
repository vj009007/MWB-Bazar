import React, { useState } from "react";
import { useSubCategoriesStyles } from "@/static/stylesheets/screens/subcategoriesStyles";
import MuiTreeView from "@/components/atoms/MuiTreeView/MuiTreeView";
import LogoAdd from "@/static/icons/ic_add.png";
import { Grid } from "@mui/material";
import UploaderFrame from "@/static/icons/uploader-frame.png";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

const SubCategories = () => {
  const classes = useSubCategoriesStyles();
  const [masterType, setMasterType] = useState("Regional Wholeseller");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <MuiTreeView />
          </Grid>
          <Grid item xs={9}>
            <div className="rightContainer">
              <div className="addButton">
                <img src={LogoAdd} alt={"Logo"} />
                <p>Add New Group Category</p>
              </div>
            </div>

            <div className="uploadContainer">
              <div className="uploadCard">
                <div className="uploadIcon">
                  <img src={UploaderFrame} alt={"Uploader"} />
                </div>

                <div className="content">
                  <div className={"title"}>Upload front Image</div>
                  <div className={"subtitle"}>
                    Image can be size of 512 PX by 512 PX Only
                  </div>
                </div>
              </div>

              <div className="uploadCard">
                <div className="uploadIcon">
                  <img src={UploaderFrame} alt={"Uploader"} />
                </div>

                <div className="content">
                  <div className={"title"}>Upload front Image</div>
                  <div className={"subtitle"}>
                    Image can be size of 512 PX by 512 PX Only
                  </div>
                </div>
              </div>
            </div>

            <div className="uploadCard">
              <div className="uploadIcon">
                <img src={UploaderFrame} alt={"Uploader"} />
              </div>

              <div className="content">
                <div className={"title"}>Upload front Image</div>
                <div className={"subtitle"}>
                  Image can be size of 512 PX by 512 PX Only
                </div>
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
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
                </Select>

                <Select
                  label="Age"
                  variant={"standard"}
                  fullWidth={true}
                  value={masterType}
                  onChange={handleChangeMasterType}
                >
                  <MenuItem value={"Regional Wholeseller"}>Grocery</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>
                    Grocery 1
                  </MenuItem>
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
                    <MenuItem value={"Regional Wholeseller"}>
                      All Cities
                    </MenuItem>
                    <MenuItem value={"Regional Wholeseller 1"}>
                      All Cities 1
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
                    <MenuItem value={"Regional Wholeseller"}>
                      Uttar Pradesh, Delhi + 2more
                    </MenuItem>
                    <MenuItem value={"Regional Wholeseller 1"}>
                      Uttar Pradesh, Delhi + 2more 1
                    </MenuItem>
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
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SubCategories;
