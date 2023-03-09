import React from "react";
import { useCategoriesStyles } from "@/static/stylesheets/screens/categoriesStyles";
import GroupCategories from "../BazaarGroupCategories";
import MuiTreeView from "@/components/atoms/MuiTreeView/MuiTreeView";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { TreeView, TreeItem } from "@mui/lab";

const BazaarCategories = () => {
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
          <GroupCategories formData={{
            bazaar_name: undefined
          }} setFormData={function (arg0: any): void {
            throw new Error("Function not implemented.");
          } } />
        </div>
      </div>
    </div>
  );
};

export default BazaarCategories;
