import React from "react";
import { useGroupCategoriesStyles } from "@/static/stylesheets/screens/groupcategoriesStyles";
import LogoEcBazaar from "@/static/images/placeholder.jpg";
import LogoDelete from "@/static/icons/ic_delete.png";
import LogoEdit from "@/static/icons/ic_edit.png";
import LogoAdd from "@/static/icons/ic_add.png";

const GroupCategories = () => {
  const classes = useGroupCategoriesStyles();

  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th>Image</th>
          <th>Group Category Name</th>
          <th></th>
        </tr>
        <tr>
          <td>
            <div className="brandLogo">
              <img src={LogoEcBazaar} alt={"Logo"} />
            </div>
          </td>
          <td>
            <div>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-full p-[15px] dark:border-[#EBEAED]"
                placeholder="Snacks"
              />
            </div>
          </td>
          <td>
            <div className="ActionLogo">
              <img src={LogoDelete} alt={"Logo"} />
              <div className="dividor"></div>
              <img src={LogoEdit} alt={"Logo"} />
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="brandLogo">
              <img src={LogoEcBazaar} alt={"Logo"} />
            </div>
          </td>
          <td>
            <div>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-full p-[15px] dark:border-[#EBEAED]"
                placeholder="Snacks"
              />
            </div>
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
  );
};

export default GroupCategories;
