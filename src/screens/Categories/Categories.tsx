import React from "react";
import { useCategoriesStyles } from "@/static/stylesheets/screens/categoriesStyles";
import GroupCategories from "../GroupCategories";
import MuiTreeView from "@/components/atoms/MuiTreeView/MuiTreeView";

const Categories = () => {
  const classes = useCategoriesStyles();

  return (
    <div className={classes.root}>
      <div className="container">
        <div className="leftContainer">
          <MuiTreeView />
        </div>
        <div className="rightContainer">
          <GroupCategories />
        </div>
      </div>
    </div>
  );
};

export default Categories;
