import React from "react";
import { usewholesellerDetailsStyle } from "@/static/stylesheets/screens";
import { Switch } from "@/components/atoms/Switch";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import { GridOptionButton } from "@/components/atoms/Button";

interface BranchesListGridProps {
  type?: "WholeSeller" | "Retailer";
}

const BranchesListGrid: React.FC<BranchesListGridProps> = (props) => {
  const classes = usewholesellerDetailsStyle();
  const data = [1, 2, 3, 4];
  return (
    <>
      <div>
        <div className={classes.root}>
          <div className="">
            <div className="productFilters flex gap-5 ">
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
            </div>

            <div>
              <div className="overflow-x-auto relative pt-[20px] pb-[40px]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600] ">
                    <tr className=" color-[#2E2C34;]">
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        Branch Name
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        Branch Manager
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        Mobile Number
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        City
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        Bazaar
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        Type
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        Enable/Disable
                      </th>
                      <th scope="col" className="py-3 px-6"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item: any) => (
                      <tr className="border-b ">
                        <td className="py-4 px-6  color-[#2E2C34] tbodyHead">
                          Branch Name
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34]">
                          Ashish Patel
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34]">
                          <div className="tag">
                            <p className="tbodyHead">+91-8477852310</p>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34]">
                          <div className="tag">
                            <p className="tbodyHead">Rajkot</p>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34]">
                          <div className="tag">
                            <p className="tbodyHead">Electronic Baz..</p>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34] tbodyHead">
                          Main Branch
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34]">
                          <p className="stockStatusTitle">
                            <Switch />
                          </p>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34]">
                          <div className="actionMenu">
                            <div>
                              <GridOptionButton icon={"vertical-options"} />
                            </div>
                          </div>
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

export { BranchesListGrid };
