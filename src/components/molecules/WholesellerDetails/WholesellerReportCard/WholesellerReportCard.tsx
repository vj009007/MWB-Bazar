import React from "react";
import { useWholesellerReportCardStyle } from "@/static/stylesheets/screens";

const WholesellerReportCard = () => {
  const classes = useWholesellerReportCardStyle();

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <div className="w-w-[100%] bg-[#F7F7F7]">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8">
              <p className="headTitle">Total Orders</p>
              <div className="flex justify-between items-end">
                <p className="headContent py-2">910</p>
                <p className="text-[#4E2FA9] font-semibold cursor-pointer">
                  View Details {">"}
                </p>
              </div>
            </div>
            <div className="border-l-4 p-8">
              <p className="headTitle">Total Income</p>
              <div className="flex justify-between items-end">
                <p className="headContent py-2">₹5,56,690</p>
                <p className="text-[#4E2FA9] font-semibold cursor-pointer">
                  View Details {">"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { WholesellerReportCard };
