import React from "react";
import { useCategoriesStyles } from "@/static/stylesheets/screens/categoriesStyles";
import GroupCategories from "../GroupCategories";
import MuiTreeView from "@/components/atoms/MuiTreeView/MuiTreeView";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { TreeView, TreeItem } from "@mui/lab";
import LogoEcBazaar from "@/static/images/placeholder.jpg";
import LogoDelete from "@/static/icons/ic_delete.png";
import LogoEdit from "@/static/icons/ic_edit.png";
import LogoAdd from "@/static/icons/ic_add.png";

const Categories2 = () => {
  const classes = useCategoriesStyles();
  const [expanded, setExpanded] = React.useState([])
  const [selected, setSelected] = React.useState([])

  const handleToggle = (event: any, nodeIds: React.SetStateAction<never[]>) => {
    setExpanded(nodeIds)
}

const handleSelect = (event: any) => {
    setSelected(event)
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
        onClick={handleSelect}
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
        </div>
        <div className="rightContainer">
            <table className="groupCeta"> 
              <tr>
                <th>Image</th>
                <th>Category Name</th>
                <th></th>
              </tr>
              <tr>
                <td className="max-w-[58px]"><img src={LogoEcBazaar} alt="" /></td>
                <td><input 
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
          <p>Add New Group Category 2</p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Categories2;
