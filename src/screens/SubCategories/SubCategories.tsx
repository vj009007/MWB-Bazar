import React, { useState } from "react";
import { useSubCategoriesStyles } from "@/static/stylesheets/screens/subcategoriesStyles";
import MuiTreeView from "@/components/atoms/MuiTreeView/MuiTreeView";
import BulkIcon from "@/static/svg/ic_bulkuploads.svg";
import { Grid, TextField } from "@mui/material";
import UploaderFrame from "@/static/icons/uploader-frame.png";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import LogoAdd from "@/static/icons/ic_add.png";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { TreeView, TreeItem } from "@mui/lab";

const SubCategories = (props: {
  formData: { bazaar_name: any };
  setFormData: (arg0: any) => void;
}) => {
  const classes = useSubCategoriesStyles();
  const [masterType, setMasterType] = useState("Regional Wholeseller");
  const [node, setNode] = React.useState("")
  const [contactInfo, setContactInfo] = useState({
    name: "",
    brandname: "",
    totalweight: "",
    nounit: "",
    perunit: "",
    mrp: "",
    gst: "",
    tmrp:"",
    hsn: ""
  });

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };
  const handleSelectedItems = (event:any, nodeId:any) => {
    // console.log(event.target.value);
    setNode(nodeId);
  }

  const [selectedImage, setSelectedImage] = useState();
  const imageChange = (e:any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setSelectedImage(e.target.files[0]);
    }
  };
  const [selectedImage2, setSelectedImage2] = useState();
  const imageChange2 = (e:any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setSelectedImage2(e.target.files[0]);
    }
  };
  const [selectedImage3, setSelectedImage3] = useState();
  const imageChange3 = (e:any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setSelectedImage3(e.target.files[0]);
    }
  };

  const handleChange = (event: {
    preventDefault(): unknown; target: { name: any; value: any; }; 
}) => {
    event.preventDefault();
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    // props.setFormData({
    //   ...props.formData,
    //   bazaar_product: [contactInfo],
    // });
  };


  React.useEffect(() => {
  
    
      
      }, []);

  return (
    <div className={classes.root}>
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={3}>
          <TreeView  onNodeSelect={handleSelectedItems}
        className="treefont"
        aria-label="file system navigator"
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          height: 300,
          flexGrow: 1,
          maxWidth: 300,
          overflowY: "auto",
          border: 2,
          padding: "30px",
          borderColor: "#E1E1E1",
          borderRadius: "6px",
          mt:8,
        }}
      >
        <TreeItem nodeId="1" label="Beverages">
          <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="5" label="Chocolate Biscuits">
          <TreeItem nodeId="10" label="Butter Biscuits" />
          <TreeItem nodeId="6" label="Namkeens">
            <TreeItem nodeId="8" label="Chips" />
          </TreeItem>
        </TreeItem>
      </TreeView>
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
                  <div className="uploadIcon px-3" style={{position:"relative"}}>
                    

                    {selectedImage3 ===undefined ? <img src={UploaderFrame} alt={"Uploader"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage3)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '130px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={imageChange3}  name="image"  />
                  </div>

                  <div className="content">
                    <div className={"title"}>Upload front Image</div>
                    <div className={"subtitle"}>
                      Image can be size of 512 PX by 512 PX Only
                    </div>
                  </div>
                </div>

                <div className="uploadCard">
                  <div className="uploadIcon px-3" style={{position:"relative"}}>
                    

                    {selectedImage ===undefined ? <img src={UploaderFrame} alt={"Uploader"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '130px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={imageChange}  name="image"  />
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
                  <div className="uploadIcon px-3" style={{position:"relative"}}>
                    

                    {selectedImage2 ===undefined ? <img src={UploaderFrame} alt={"Uploader"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage2)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '130px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={imageChange2}  name="image"  />
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
                    <TextField onChange={handleChange} name="name"
           variant="standard" fullWidth={true} />
                  </div>

                  <div>
                    <p className="commonSelectText">Brand Name</p>
                    <TextField onChange={handleChange} name="brandname"
            variant="standard" fullWidth={true} />
                  </div>
                </div>

                <div className="stateField">
                  <div>
                    <p className="commonSelectText">Total Weight</p>
                    <div className="flex gap-4">
                      <div>
                        <TextField onChange={handleChange} name="totalweight"
            variant="standard" fullWidth={true} />
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
                        <TextField onChange={handleChange}  name="nounit" variant="standard" fullWidth={true} />
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
                    <TextField onChange={handleChange} variant="standard" name="tmrp" fullWidth={true} />
                  </div>
                  <div>
                    <p className="commonSelectText">Per Unit Weight</p>
                    <div className="flex gap-4">
                      <div>
                        <TextField onChange={handleChange} variant="standard"  name="perunit" fullWidth={true} />
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
                    <p className="commonSelectText">HSN Code</p>
                    <TextField onChange={handleChange} variant="standard"  name="hsn" fullWidth={true} />
                  </div>
                </div>

                <div className="cityField">
                  <div>
                    <p className="commonSelectText">GST</p>
                    <TextField onChange={handleChange} variant="standard" name="gst" fullWidth={true} />
                  </div>
                 
                  <div>
                    <p className="commonSelectText">MRP</p>
                    <TextField variant="standard"  name="mrp" 
                    onChange={handleChange} fullWidth={true} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center border-dashed border-2 border-[#4E2FA9] p-3 rounded-md w-[300px] justify-center cursor-pointer mt-10">
                <img className="w-[20px]" src={LogoAdd} alt={"Logo"} />
                <p className="text-[#4E2FA9]">Add New Product</p>
              </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SubCategories;
