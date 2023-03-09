import React from "react";
import { useBulkuploadStyles } from "@/static/stylesheets/screens";
import { DashboardLayout } from "@/components/layouts";
import { SearchField } from "@/components/atoms/SearchField";
import { AddButton, GridOptionButton } from "@/components/atoms/Button";
import { useNavigate } from "react-router-dom";
import TwMultiSelect from "@/components/atoms/TwMultiSelect/TwMultiSelect";
import { Switch } from "@/components/atoms/Switch";

const BulkUploadList = () => {
  const classes = useBulkuploadStyles();
  const navigate = useNavigate();
  const data = [1, 2, 3, 4, 5];

  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div className="flex justify-between">
            <p className="commonTitle">Plans</p>
            <SearchField />
          </div>

          <div>
            <div className="overflow-x-auto relative pt-[20px] pb-[40px]">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-[12px] text-[#2E2C34] bg-gray-50 font-[600]">
                  <tr className=" [#2E2C34]">
                    <th scope="col" className="py-3 px-4">
                      PRODUCT NAME
                    </th>
                    <th scope="col" className="py-3 px-4">
                      BRAND
                    </th>
                    <th scope="col" className="py-3 px-4">
                      WEIGHT
                    </th>
                    <th scope="col" className="py-3 px-4">
                      MRP
                    </th>
                    <th scope="col" className="py-3 px-4">
                      ...
                    </th>
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
                          <p className="mb-3 text-[14px] font-[600] text-[#2E2C34] font-Manrope  cursor-pointer">
                            Individual
                          </p>
                        </div>
                      </th>
                      <td className="py-4 px-6  [#2E2C34]">
                        <div className="flex gap-5 align-middle">
                          <div>
                            <p className="font-[14px] text-[#2E2C34]">
                              24 Jan, 2021 4:00PM
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6  [#2E2C34]">
                        24 Jan, 2023 12:00PM
                      </td>
                      <td className="py-4 px-6  [#2E2C34]">12</td>
                      <td className="py-4 px-6  [#2E2C34]"><GridOptionButton icon={"vertical-options"} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export { BulkUploadList };
