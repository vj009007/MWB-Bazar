import React, { useState } from "react";
import { useMasterListStyles } from "@/static/stylesheets/screens";
import { Dialog, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { UploadArea } from "@/components/organisms/UploadArea";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { WholesellerReportCard } from "../WholesellerReportCard";
import MapImage from "@/static/icons/Maps.png";
import MwbImage from "@/static/images/basket_image.png";
import { GrPowerReset } from 'react-icons/gr';
import { BsThreeDotsVertical } from 'react-icons/bs';


interface ReportsListGridProps {
  type?: "WholeSeller" | "Retailer";
}

const ReportsListGrid: React.FC<ReportsListGridProps> = (props) => {
  const classes = useMasterListStyles();
  const { type } = props;
  const [addModalOpen, setAddModalOpen] = useState(false);
  const data = [1, 2, 3, 4, 5];

  const [masterType, setMasterType] = useState("Regional Wholeseller");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  return (
    <>
      <div className={classes.root}>
        <div>
          <WholesellerReportCard />
        </div>
        <div className="py-5">
          <div className="grid grid-cols-3 gap-4">
            <div className="...">
              <div className="flex justify-between">
                <p className="heaadtext py-2">City-Wise Business</p>
                <p className="heaadtext py-2">Delhi-NCR</p>
              </div>

              <div className="flex items-center justify-center py-5">
                <img className="w-[300px]" src={MapImage} alt={"Mwb Bazaar"} />
              </div>
              <div className="py-3">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600] ">
                    <tr className=" color-[#2E2C34;]">
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        CITIES
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        ORDERS
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        SALES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item: any) => (
                      <tr className="border-b ">
                        <td className="py-4 px-6  color-[#2E2C34]">Delhi</td>
                        <td className="py-4 px-6  color-[#2E2C34] tbodyHead">
                          12,202
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34] tbodyHead">
                          ₹150,200
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-2 ...">
              <div className="flex justify-between">
                <p className="heaadtext py-2">Top Poducts</p>
                <p className="heaadtext py-2">View All</p>
              </div>
              <div className="py-3">
                <table className="w-full text-sm text-left text-gray-500 ">
                  <thead className="text-[12px] text-gray-700 bg-gray-50 font-[600] ">
                    <tr className=" color-[#2E2C34;]">
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        ITEM
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        PRICE
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        SOLD
                      </th>
                      <th scope="col" className="py-3 px-6 dataTableHeader">
                        SALES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item: any) => (
                      <tr className="border-b ">
                        <td className="py-4 px-6  color-[#2E2C34]">
                          <div className="flex gap-5 items-center">
                            <img
                              className="w-[50px] rounded-md"
                              src={MwbImage}
                              alt={"Mwb Bazaar"}
                            />
                            <p>Amazon Echo Plus (3nd Gen) - Premium…</p>
                          </div>
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34] tbodyHead">
                          ₹49
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34] tbodyHead">
                          5,951
                        </td>
                        <td className="py-4 px-6  color-[#2E2C34] tbodyHead">
                          ₹15,302.00
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="...">
              <div className="flex justify-between">
                <p className="heaadtext py-2">New Retailers</p>
                <div className="heaadtext py-2 flex gap-5">
                  <GrPowerReset/>
                  <BsThreeDotsVertical/>
                </div>
              </div>

              {data.map((item: any) => (
                <div className="py-3">
                  <div className="flex gap-4">
                    <img
                      className="w-[50px] rounded-full"
                      src={MwbImage}
                      alt={"Mwb Bazaar"}
                    />
                    <div>
                      <p className="RetailerText">Retailer Name</p>
                      <p className="RetailerSubText">City Name</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="...">
              <div className="flex justify-between">
                <p className="heaadtext py-2">New Retailers</p>
                <div className="heaadtext py-2 flex gap-5">
                  <GrPowerReset/>
                  <BsThreeDotsVertical/>
                </div>
              </div>

              {data.map((item: any) => (
                <div className="py-3">
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <img
                        className="w-[50px] rounded-full"
                        src={MwbImage}
                        alt={"Mwb Bazaar"}
                      />
                      <div>
                        <p className="RetailerText">Payment from #1032</p>
                        <p className="RetailerSubText"> Jan 19,2019,2:44pm</p>
                      </div>
                    </div>
                    <div>
                      <p className="heaadtext">+ $250.00</p>
                      <p className="text-[#20C9AC]">Completed</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="...">
              <div className="flex justify-between">
                <p className="heaadtext py-2">Real-Time Sale</p>
              </div>
              {data.map((item: any) => (
                <div className="py-3">
                  <div className="flex gap-4">
                    <img
                      className="w-[40px] rounded-full"
                      src={MwbImage}
                      alt={"Mwb Bazaar"}
                    />
                    <div>
                      <p className="RetailerText">Retailer Name</p>
                      <p className="RetailerSubText">City Name</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={addModalOpen}
        maxWidth={"lg"}
        sx={{
          ".MuiPaper-root": {
            borderRadius: "20px",
          },
        }}
        onClose={() => setAddModalOpen(false)}
      >
        <div className={classes.addDialog}>
          <div className={"title"}>
            Add {type === "WholeSeller" ? "Wholeseller" : "Retailer"} Type
          </div>

          <UploadArea label={"Upload Icon"} />

          <div className={"select-master"}>
            <div className={"input-label"}>
              {type === "WholeSeller" ? "Wholeseller" : "Retailer"} Type
            </div>
            <Select
              label="Age"
              variant={"standard"}
              fullWidth={true}
              value={masterType}
              onChange={handleChangeMasterType}
            >
              <MenuItem value={"Regional Wholeseller"}>
                Regional Wholeseller
              </MenuItem>
              <MenuItem value={"Regional Wholeseller 1"}>
                Regional Wholeseller 1
              </MenuItem>
              <MenuItem value={"Regional Wholeseller 2"}>
                Regional Wholeseller 2
              </MenuItem>
            </Select>
          </div>

          <div className={"action-bar"}>
            <ActionButton
              variant={"default"}
              title={"Cancel"}
              onClick={() => setAddModalOpen(false)}
            />

            <ActionButton
              variant={"primary"}
              title={"Add"}
              onClick={() => setAddModalOpen(false)}
            />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export { ReportsListGrid };
