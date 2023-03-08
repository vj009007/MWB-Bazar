import React from "react";
import { GridOptionButton } from "@/components/atoms/Button";
import { usewholesellerDetailsStyle } from "@/static/stylesheets/screens";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import UserCartIcon from "@/static/icons/profileCartIcon.svg";

interface CustomerListGridProps {
  type?: "WholeSeller" | "Retailer";
}

const CustomerListGrid: React.FC<CustomerListGridProps> = (props) => {
  const classes = usewholesellerDetailsStyle();
  const data = [1, 2, 3, 4, 5];

  return (
    <>
      <div>
        <div className={classes.root}>
          <div className="flex gap-5 justify-between items-center">
            <div className="flex gap-4">
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
              <TwMultiSelect />
            </div>
          </div>

          <div>
            <div className="overflow-x-auto relative pt-[10px] pb-[40px]">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-[12px] text-[#2E2C34] bg-gray-50 font-[600]">
                  <tr className=" [#2E2C34]">
                    <th scope="col" className="py-3 px-6 dataTableHeader">
                      Name
                    </th>
                    <th scope="col" className="py-3 px-6 dataTableHeader">
                      Contact Person
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
                      Plan
                    </th>
                    <th scope="col" className="py-3 px-6 dataTableHeader">
                      # of Orders
                    </th>
                    <th scope="col" className="py-3 px-6"></th>
                    <th scope="col" className="py-3 px-6"></th>
                    <th scope="col" className="py-3 px-6"></th>
                    <th scope="col" className="py-3 px-6"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item: any) => (
                    <tr className="border-b">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="flex gap-[20px] items-center ">
                          <p className="mb-3 text-[14px] font-[600] text-[#2E2C34] font-Manrope  cursor-pointer tbodyHead">
                            Laxmi Traders
                          </p>
                        </div>
                      </th>
                      <td className="py-4 px-6  [#2E2C34]">
                        <div className="flex gap-5 align-middle">
                          <div className="flex gap-2 items-center">
                            <img
                              src={UserCartIcon}
                              alt={"Uploader"}
                              className="w-[15px]"
                            />
                            <p className="font-[14px] text-[#4E2FA9] tbodyHead">
                              Ashish Patel
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6  [#2E2C34] tbodyHead">Rajkot</td>
                      <td className="py-4 px-6  [#2E2C34] tbodyHead">
                        Electronic Baz..
                      </td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer tbodyHead">
                        Re-seller
                      </td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer">
                        <div className="flex gap-5 align-middle">
                          <div>
                            <p className="font-[14px] color-[#4E2FA9] tbodyHead">
                              Diamond
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer">
                        <p className="font-[14px] color-[#4E2FA9]">14</p>
                      </td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer"></td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer"></td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer"></td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer"></td>
                      <td className="py-4 px-6  [#2E2C34] cursor-pointer">
                        <GridOptionButton icon={"vertical-options"} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CustomerListGrid };
