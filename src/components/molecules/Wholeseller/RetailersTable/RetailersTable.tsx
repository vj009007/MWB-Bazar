import React from "react";
import CommonSelect from "@/components/atoms/CommonSelect/CommonSelect";
import MwbImage from "@/static/images/basket_image.png";
import { useWholesellerCardStyle } from "@/static/stylesheets/molecules";

const RetailersTable = () => {
  const classes = useWholesellerCardStyle();

  return (
    <div className={classes.root}>
      <div className="p-6 max-w-full bg-white rounded-lg border border-gray-200  ">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-9 items-center">
            <p className="mb-3 text-[16px] font-[700] text-gray-700 font-Manrope ">
              Top Retailers
            </p>
            <p>
              <CommonSelect />
            </p>
          </div>
          <p className="mb-3 text-[14px] font-[700] items-center text-[#5542F6] cursor-pointer text-end  font-Manrope">
            View All
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto relative pt-[40px] pb-[40px]">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-[12px] text-gray-700 border-b border-gray-200 font-[600] ">
              <tr className="color-[#2E2C34;]">
                <th scope="col" className="py-3 px-6 w-[900px] ">
                  name
                </th>
                <th scope="col" className="py-3 px-6">
                  Bazaar
                </th>
                <th scope="col" className="py-3 px-6">
                  City
                </th>
                <th scope="col" className="py-3 px-6">
                  Orders
                </th>
                <th scope="col" className="py-3 px-6">
                  Sales
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item: any) => (
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
                      <p className="mb-3 text-[14px] font-[600] text-gray-700 font-Manrope ">
                        Wingreens Mart
                      </p>
                    </div>
                  </th>
                  <td className="py-4 px-6  text-[14px] text-gray-700 font-[500] leading-[20px]">
                    Electronic
                  </td>
                  <td className="py-4 px-6 text-[14px] text-gray-700 font-[500] leading-[20px]">
                    City Name
                  </td>
                  <td className="py-4 px-6 text-[14px] text-gray-700 font-[500] leading-[20px]">
                    5,951
                  </td>
                  <td className="py-4 px-6 text-[14px] text-gray-700  font-[500] leading-[20px]">
                    ₹15,302.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { RetailersTable };
