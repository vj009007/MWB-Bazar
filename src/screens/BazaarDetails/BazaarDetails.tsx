import React, { useEffect, useState } from "react";
import { useAddbazaarStyles } from "@/static/stylesheets/molecules";
import UploaderFrame from "@/static/icons/uploader-frame.png";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";

const BazaarDetails = (props: {
  formData: { bazaar_name: any };
  setFormData: (arg0: any) => void;
}) => {
  const classes = useAddbazaarStyles();

  const [masterType, setMasterType] = useState("");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
    // console.log(event.target.value as string);
    props.setFormData({
      ...props.formData,
      bazaar_state: event.target.value as string,
    });
  };

  const handleChangeMasterType2 = (event: SelectChangeEvent) => {
    //setMasterType(event.target.value as string);
  };
  const handleChangeMasterType3 = (event: SelectChangeEvent) => {
    //setMasterType(event.target.value as string);
  };
  const handleChangeMasterType4 = (event: SelectChangeEvent) => {
    // setMasterType(event.target.value as string);
  };

  const [selectedImage, setSelectedImage] = useState();
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setSelectedImage(e.target.files[0]);
      props.setFormData({
        ...props.formData,
        bazaar_image: e.target.files[0].name,
      });
    }
  };
  useEffect(() => {
    // console.log(props);
  }, []);

  return (
    <div className={classes.root}>
      <div className="pt-[50px]">
        <div className={classes.content}>
          <div className="py-5">
            <div className="uploadIcon">
              <img src={UploaderFrame} alt={"Uploader"} />
              <input
                accept="image/*"
                onChange={imageChange}
                className={"kycForms"}
                type="file"
              />
            </div>
            <div className={"title"}>Upload Media here</div>-
            <div className={"subtitle"}>
              Image can be size of 512 PX by 512 PX Only
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px]">
        <div>
          <p className="fieldTitle">Bazaar Name</p>
          <TextField variant="standard" fullWidth={true} />
        </div>

        <div className="flex gap-4 py-[20px]">
          <div>
            <p className="fieldTitle">Select State</p>
            <Select
              label="Age"
              variant={"standard"}
              fullWidth={true}
              onChange={handleChangeMasterType3}
            >
              <MenuItem value={"Regional Wholeseller"}>
                Uttar Pradesh, Delhi + 2more
              </MenuItem>
              <MenuItem value={"Regional Wholeseller 1"}>
                Uttar Pradesh, Delhi + 2more
              </MenuItem>
            </Select>
          </div>

          <div>
            <p className="fieldTitle">District</p>
            <Select
              label="Age"
              variant={"standard"}
              fullWidth={true}
              onChange={handleChangeMasterType3}
            >
              <MenuItem value={"Regional Wholeseller"}>All Districts</MenuItem>
              <MenuItem value={"Regional Wholeseller 1"}>
                All Districts
              </MenuItem>
            </Select>
          </div>
        </div>

        <div>
          <p className="fieldTitle">City</p>
          <Select
            label="Age"
            variant={"standard"}
            fullWidth={true}
            onChange={handleChangeMasterType3}
          >
            <MenuItem value={"Regional Wholeseller"}>All Cities</MenuItem>
            <MenuItem value={"Regional Wholeseller 1"}>All Cities</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default BazaarDetails;
