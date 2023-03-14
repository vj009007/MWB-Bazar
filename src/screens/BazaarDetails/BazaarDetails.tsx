import React, { useEffect, useState } from "react";
import UploaderFrame from "@/static/icons/uploader-frame.png";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { AppService } from "@/service/AllApiData.service";
import {useBazaarDetailsStyles} from "@/static/stylesheets/screens";

const BazaarDetails = (props: {
  formData: { bazaar_name: any };
  setFormData: (arg0: any) => void;
}) => {
  const classes = useBazaarDetailsStyles();

  const [, setMasterType] = useState("");
  const [AllState, setAllState] = React.useState([]);
  const [AllDis, setAllDis] = React.useState([]);
  const [AllCity, setAllCity] = React.useState([]);

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
    props.setFormData({
      ...props.formData,
      bazaar_state: [event.target.value],
    });
    
  };

  const handleChangeMasterType2 = (event: SelectChangeEvent) => {
    // setMasterType(event.target.value as string);
    props.setFormData({
      ...props.formData,
      bazaar_district: [event.target.value],
    });
  
  };
  const handleChangeMasterType3 = (event: SelectChangeEvent) => {
    props.setFormData({
      ...props.formData,
      bazaar_city: [event.target.value],
    });
   
  };


  const [, setSelectedImage] = useState();
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



  const getAllLists = async () => {
    const responseJson = await AppService.getAllStates();
    // console.log(responseJson.data.bazaar);
    setAllState(responseJson.data.results);
   
  };

  const getAllDis = async () => {
    const responseJson = await AppService.getAllDistric();
    // console.log(responseJson.data.bazaar);
    setAllDis(responseJson.data.results);
   
  };

  const getAllCity= async () => {
    const responseJson = await AppService.getAllCity();
    // console.log(responseJson.data.bazaar);
    setAllCity(responseJson.data.results);
   
  };
 




  useEffect(() => {
    // console.log(props);
    getAllLists();
    getAllDis();
    getAllCity();
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
          <TextField variant="standard" onChange={e => props.setFormData({
      ...props.formData, bazaar_name: e.target.value})} fullWidth={true} />
        </div>

        <div className="flex gap-4 py-[20px]">
          <div>
            <p className="fieldTitle">Select State</p>
            <Select
              label="Age"
              variant={"standard"}
              fullWidth={true}
              onChange={handleChangeMasterType}
            >
              {AllState.map((items:any)=>(
              <MenuItem value={items.id}>
              {items.state}
              </MenuItem>
              
              ))}
            </Select>
          </div>

          <div>
            <p className="fieldTitle">District</p>
            <Select
              label="Age"
              variant={"standard"}
              fullWidth={true}
              onChange={handleChangeMasterType2}
            >
             {AllDis.map((items:any)=>(
              <MenuItem value={items.id}>
              {items.district}
              </MenuItem>
                ))}
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
            {AllCity.map((items:any)=>(
              <MenuItem value={items.id}>
              {items.city}
              </MenuItem>
                ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default BazaarDetails;
