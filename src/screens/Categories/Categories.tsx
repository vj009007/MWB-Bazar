import React, { useState } from "react";
import { useCategoriesStyles } from "@/static/stylesheets/screens/categoriesStyles";
import GroupCategories from "../GroupCategories";
import MuiTreeView from "@/components/atoms/MuiTreeView/MuiTreeView";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { TreeView, TreeItem } from "@mui/lab";
import LogoEcBazaar from "@/static/images/placeholder.jpg";
import LogoDelete from "@/static/icons/ic_delete.png";
import LogoEdit from "@/static/icons/ic_edit.png";
import LogoAdd from "@/static/icons/ic_add.png";

const Categories = (props: {
  formData: { bazaar_name: any };
  setFormData: (arg0: any) => void;
}) => {
  const classes = useCategoriesStyles();
  const [expanded, setExpanded] = React.useState([])
  const [selected, setSelected] = React.useState([])
  const [node, setNode] = React.useState("")

  const handleToggle = (event: any, nodeIds: React.SetStateAction<never[]>) => {
    setExpanded(nodeIds)
}

const handleSelect = (event: any) => {
    setSelected(event)
}
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

const dataSave = (e:any) => {
  // console.log(e.target.value);
  // props.setFormData({
  //   ...props.formData,
  //   bazaar_category: [selectedImage, e.target.value, node],
  // });
}

  return (
    <div className={classes.root}>
      <div className="container">
        <div className="leftContainer">
        <TreeView
        className="treefont"
        aria-label="file system navigator"
        selected={selected}
        // onNodeToggle={handleToggle}
        onNodeSelect={handleSelectedItems}
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
        }}
      >
        <TreeItem nodeId="Beverages" label="Beverages">
          <TreeItem nodeId="Calendar" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="Chocolate Biscuits" label="Chocolate Biscuits">
          <TreeItem nodeId="Butter Biscuits" label="Butter Biscuits" />
          <TreeItem nodeId="Namkeens" label="Namkeens">
            <TreeItem nodeId="Chips" label="Chips" />
          </TreeItem>
        </TreeItem>
      </TreeView>
        </div>
        <div className="rightContainer">
            <table className="groupCeta"> 
              <tr>
                <th>Image</th>
                <th>Category Name</th>
                <th></th>
              </tr>
              <tr>
                <td className="max-w-[58px]" style={{position:"relative"}}>
                {selectedImage ===undefined ? <img src={LogoEcBazaar} alt={"Logo"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '40px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={imageChange}  name="image"  /></td>
                <td><input  onChange={dataSave}
                  type="text" name="fullName"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-full p-[15px] dark:border-[#EBEAED]"
                  placeholder="Snacks"
                />
                </td>
                <td>
                    <div className="ActionLogo">
                      <img src={LogoDelete} alt={"Logo"} />
                      <div className="dividor"></div>
                      <img src={LogoEdit} alt={"Logo"} />
                    </div>
                </td>
              </tr>
            </table>
            <div>
        <div className="addButton">
          <img src={LogoAdd} alt={"Logo"} />
          <p>Add New Group Category</p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
