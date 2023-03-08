import React, { useState } from "react";
import { useSubCategoriesStyles } from "@/static/stylesheets/screens/subcategoriesStyles";
import MuiTreeView from "@/components/atoms/MuiTreeView/MuiTreeView";
import BulkIcon from "@/static/svg/ic_bulkuploads.svg";
import { Grid, TextField } from "@mui/material";
import UploaderFrame from "@/static/icons/uploader-frame.png";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import LogoAdd from "@/static/icons/ic_add.png";

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
              <div className="addButton flex justify-items-center items-center">
                <img src={BulkIcon} alt={"Logo"} />
                <p>Bulk Upload</p>
              </div>
            </div>

            <div className="border-2 p-5 mt-3 rounded-md ">
              <div className="flex gap-5">
                <div className="uploadCard">
                  <div className="uploadIcon px-3">
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
                  <div className="uploadIcon px-3">
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

              <div className="flex gap-5 py-5">
                <div className="uploadCard">
                  <div className="uploadIcon px-3">
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

              <div className="field">
                <div className="bazaarField">
                  <div>
                    <p className="commonSelectText">Product Name</p>
                    <TextField variant="standard" fullWidth={true} />
                  </div>

                  <div>
                    <p className="commonSelectText">Brand Name</p>
                    <TextField variant="standard" fullWidth={true} />
                  </div>
                </div>

                <div className="stateField">
                  <div>
                    <p className="commonSelectText">Total Weight</p>
                    <div className="flex gap-4">
                      <div>
                        <TextField variant="standard" fullWidth={true} />
                      </div>
                      <div>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType}
                        >
                          <MenuItem value={"Regional Wholeseller"}>Kg</MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            Kg
                          </MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="commonSelectText">No. of Units</p>
                    <div className="flex gap-4">
                      <div>
                        <TextField variant="standard" fullWidth={true} />
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
                            Unit
                          </MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            Unit
                          </MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="commonSelectText">Total MRP</p>
                    <TextField variant="standard" fullWidth={true} />
                  </div>
                  <div>
                    <p className="commonSelectText">Per Unit Weight</p>
                    <div className="flex gap-4">
                      <div>
                        <TextField variant="standard" fullWidth={true} />
                      </div>
                      <div>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType}
                        >
                          <MenuItem value={"Regional Wholeseller"}>Kg</MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            Kg
                          </MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="commonSelectText">MRP</p>
                    <TextField variant="standard" fullWidth={true} />
                  </div>
                </div>

                <div className="cityField">
                  <div>
                    <p className="commonSelectText">GST</p>
                    <TextField variant="standard" fullWidth={true} />
                  </div>
                  <div>
                    <p className="commonSelectText">HSN Code</p>
                    <TextField variant="standard" fullWidth={true} />
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center border-dashed border-2 border-[#4E2FA9] p-3 rounded-md w-[300px] justify-center cursor-pointer">
                <img className="w-[20px]" src={LogoAdd} alt={"Logo"} />
                <p className="text-[#4E2FA9]">Add New Product</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SubCategories;
