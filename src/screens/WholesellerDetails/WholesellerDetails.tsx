import React from "react";
import { DashboardLayout } from "@/components/layouts";
import { usewholesellerDetailsStyle } from "@/static/stylesheets/screens/wholesellerDetailsStyle";
import UploaderFrame from "@/static/icons/wholesellerShopIcon.svg";
import ProfileAvatar from "@/static/icons/profileAvatar.svg";
import callIcon from "@/static/icons/callIcon.svg";
import planIcon from "@/static/icons/planIcon.svg";
import blueArrow from "@/static/icons/blueArrow.svg";
import { IoIosArrowBack } from "react-icons/io";
import { WholesellerTab } from "@/components/organisms/WholesellerTab";
import { ProfileListGrid } from "@/components/molecules/WholesellerDetails/ProfileListGrid";
import { CustomerListGrid } from "@/components/molecules/WholesellerDetails/CustomerListGrid";
import { ProductsListGrid } from "@/components/molecules/WholesellerDetails/ProductsListGrid";
import { BranchesListGrid } from "@/components/molecules/WholesellerDetails/BranchesListGrid";
import { ReportsListGrid } from "@/components/molecules/WholesellerDetails/ReportsListGrid";

const WholesellerDetails = () => {
  const classes = usewholesellerDetailsStyle();
  return (
    <>
      <DashboardLayout>
        <div className={classes.root}>
          <div className="grid grid-cols-3 gap-5">
            <div className="flex gap-5 items-center">
              <div className="cursor-pointer">
                <IoIosArrowBack />
              </div>
              {/* Wholeseller Icon */}
              <div>
                <div className="uploadIcon">
                  <img
                    src={UploaderFrame}
                    alt={"Uploader"}
                    className="w-[50px]"
                  />
                  <p className="base-text py-2">Wingreens Mart</p>
                  <p className="secoundary-text py-2">Wholeseller</p>
                  <p className="text-orange bg-[#FFD6AD] p-2 rounded-md flex justify-center">
                    Pending Approval
                  </p>
                </div>
              </div>
            </div>

            <div>
              {/* Cotact Card*/}
              <div className="border-2 p-5 rounded-md w-[100%] h-[170px]">
                <div className="flex gap-4">
                  <div className="flex gap-4">
                    <img
                      src={ProfileAvatar}
                      alt={"Uploader"}
                      className="w-[40px]"
                    />
                    <div>
                      <p className="secoundary-text">Contact Person</p>
                      <p className="base-text-cart">Sachin Yadav</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img src={callIcon} alt={"Uploader"} className="w-[40px]" />
                    <div>
                      <p className="secoundary-text">Phone Number</p>
                      <p className="base-text-cart">+91-9876543210</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-5">
                  <img
                    src={ProfileAvatar}
                    alt={"Uploader"}
                    className="w-[40px]"
                  />
                  <div>
                    <p className="secoundary-text">Firm Address</p>
                    <p className="base-text-cart">
                      W 107b, Midc, Thane, Taloja, Ahmadabad, Gujarat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* Plan Card */}
              <div className="border-2 p-5 rounded-md w-[50%] h-[170px]">
                <div className="flex gap-4">
                  <img src={planIcon} alt={"Uploader"} className="w-[40px]" />
                  <div>
                    <p className="secoundary-text">Plan</p>
                    <p className="base-text-cart">Premium</p>
                  </div>
                </div>
                <div className="py-[13px]">
                  <p className="text-blue bg-[#9bdcff] w-[190px] p-2 rounded-md flex justify-center">
                    Expiry day: 24 June, 2022
                  </p>
                </div>
                <div className="flex gap-4 items-center text-[#4E2FA9]">
                  <p>View Details</p>
                  <img
                    src={blueArrow}
                    alt={"Uploader"}
                    className="w-[15px] font-semibold"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Tab */}
          <div className="mt-[50px]">
            <WholesellerTab
              items={[
                {
                  label: "Profile",
                  content: <ProfileListGrid type={"WholeSeller"} />,
                },
                {
                  label: "Customers",
                  content: <CustomerListGrid type={"Retailer"} />,
                },
                {
                  label: "Products",
                  content: <ProductsListGrid type={"Retailer"} />,
                },
                {
                  label: "Branches",
                  content: <BranchesListGrid type={"Retailer"} />,
                },
                {
                  label: "Reports",
                  content: <ReportsListGrid type={"Retailer"} />,
                },
              ]}
            />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default WholesellerDetails;
