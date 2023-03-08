import React from "react";
import { usewholesellerDetailsStyle } from "@/static/stylesheets/screens";
import { Switch } from "@/components/atoms/Switch";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import MwbImage from "@/static/images/basket_image.png";
import { GridOptionButton } from "@/components/atoms/Button";

interface ProductsListGridProps {
  type?: "WholeSeller" | "Retailer";
}

const ProductsListGrid: React.FC<ProductsListGridProps> = (props) => {
  const classes = usewholesellerDetailsStyle();
  const data = [1, 2, 3, 4];

  return (
    <>
      <div>
        <div className={classes.root}>
          <div className="">
            <div className="productFilters flex gap-5 py-[10px]">
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
            </div>

            <div>
              <div className="overflow-x-auto relative pt-[10px] pb-[40px]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600] ">
                    <tr className=" color-[#2E2C34;]">
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        Product Name
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        Brand
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        Group Category
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        Category
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        Sub-Category
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        Weight
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        MRP
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 dataTableHeader"
                      ></th>
                      <th
                        scope="col"
                        className="py-3 px-6 dataTableHeader"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item: any) => (
                      <tr className="border-b ">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                        >
                          <div className="flex gap-[20px] items-center ">
                            <img
                              className="w-[50px] rounded-md"
                              src={MwbImage}
                              alt={"Mwb Bazaar"}
                            />
                            <p className="mb-3 text-[14px] font-[600] text-gray-700 font-Manrope dark:text-gray-400 cursor-pointer tbodyHead">
                              Amazon Echo Plus (3nd Gen) - Premium…
                            </p>
                          </div>
                        </th>
                        <td className="py-4 px-6  color-[#2E2C34]">amazon</td>
                        <td className="py-4 px-6  color-[#2E2C34] tbodyHead">
                          Branch Name
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34]">
                          <div className="tag">
                            <p className="tbodyHead">electronics</p>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34]">
                          <div className="tag">
                            <p className="tbodyHead">electronics</p>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34;]">
                          <div className="tag">
                            <p className="tbodyHead">XX Kg</p>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34] tbodyHead">
                          ₹15,302.00
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34] tbodyHead">
                          <Switch />
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34]">
                          <p className="stockStatusTitle">
                            <GridOptionButton icon={"vertical-options"} />
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductsListGrid };
