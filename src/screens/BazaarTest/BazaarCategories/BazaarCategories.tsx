import React from "react";
import { useCategoriesStyles } from "@/static/stylesheets/screens/categoriesStyles";
import GroupCategories from "@/screens/GroupCategories";

const BazaarCategories = () => {
  const classes = useCategoriesStyles();
  return (
    <div className={classes.root}>
      <div className="container">
        <div className="rightContainer">
          <GroupCategories
            formData={{
              bazaar_name: undefined,
            }}
            setFormData={function (arg0: any): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BazaarCategories;
