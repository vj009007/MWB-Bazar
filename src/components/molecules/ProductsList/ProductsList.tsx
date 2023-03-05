import React  from "react";
import { GridOptionButton } from "@/components/atoms/Button";
import { Switch } from "@/components/atoms/Switch";
import { useProductListStyles } from "@/static/stylesheets/molecules";
import LogoContract from "@/static/icons/uploader-frame.png";

interface ProductListProps {
  type?: "WholeSeller" | "Retailer";
}

const ProductsList: React.FC<ProductListProps> = (props) => {
  const classes = useProductListStyles();
  const data = [1, 2, 3, 4, 5, 6];
  // const { type } = props;

  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Group Category</th>
          <th>Category</th>
          <th>Sub-Category</th>
          <th>Weight</th>
          <th>MRP</th>
          <th>Active/Inactive</th>
          <th></th>
        </tr>
        {data.map((item: any) => (
          <tr>
            <td>
              <div className="brandData">
                <img className="brandLogo" src={LogoContract} alt={"Logo"} />
                Amazon Echo Plus (3nd Gen) - Premium…
              </div>
            </td>
            <td>Aamazon</td>
            <td>
              <div className="status">electronics</div>
            </td>
            <td>
              <div className="status">electronics</div>
            </td>
            <td>
              <div className="status">electronics</div>
            </td>
            <td>XX Kg</td>
            <td>₹15,302.00</td>
            <td>
              <div>
                <Switch />
              </div>
            </td>
            <td>
              <GridOptionButton icon={"vertical-options"} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export { ProductsList };
