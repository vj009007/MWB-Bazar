import React from "react";
import clipIcon from "@/static/icons/clipIcon.svg";
import NidDoc from "@/static/icons/NidDoc.svg";
import { usewholesellerDetailsStyle } from "@/static/stylesheets/screens";

interface ProfileListGridProps {
  type?: "WholeSeller" | "Retailer";
}

const ProfileListGrid: React.FC<ProfileListGridProps> = (props) => {
  const classes = usewholesellerDetailsStyle();
  return (
    <>
      <div>
        <div className="flex gap-5 justify-between items-center  w-[500px] py-[20px] border-b-2">
          <p className="profileTabMedium">Contact Person</p>
          <div>
            <p className="profileTabBase">Ashish Patel</p>
            <p className="profileTabBase">+91-8477852310</p>
          </div>
        </div>

        <div className="flex gap-5 justify-between items-center  w-[500px] py-[20px] border-b-2">
          <div>
            <p className="profileTabMedium">Aadhaar</p>
            <p className="profileTabMedium">PAN</p>
          </div>
          <div>
            <p className="profileTabBase">2674839927399</p>
            <p className="profileTabBase">ABCSDI794930</p>
          </div>
        </div>

        <div className="flex gap-5 justify-between items-center  w-[500px] py-[20px] border-b-2">
          <p className="profileTabMedium"> Firm Address</p>
          <div>
            <p className="profileTabBase">Firm Address</p>
            <p className="profileTabBase">Show Directions</p>
          </div>
        </div>

        <div className="flex gap-5 justify-between items-center  w-[500px] py-[20px] border-b-2">
          <p className="profileTabMedium">Bazaar</p>
          <div className="flex gap-2">
            <p className="profileTabBase">electronics</p>
            <p className="profileTabBase">electronics</p>
          </div>
        </div>

        <div className="flex gap-5 justify-between items-center  w-[500px] py-[20px] border-b-2">
          <p className="profileTabMedium">States</p>
          <div>
            <p className="profileTabBase">
              Gujarat, Delhi, Uttar Pradesh, Punjab
            </p>
          </div>
        </div>

        <div className="flex gap-5 justify-between items-center  w-[500px] py-[20px] border-b-2">
          <p className="profileTabMedium">Districts</p>
          <div>
            <p className="profileTabBase">Rajkot, Mohali, Ahemdabad, + 5more</p>
          </div>
        </div>

        <div className="flex gap-5 justify-between items-center  w-[500px] py-[20px] border-b-2">
          <p className="profileTabMedium">Cities</p>
          <div>
            <p className="profileTabBase">Chandigarh, Ahemdabad, + 5more</p>
          </div>
        </div>

        <div className="flex gap-5 justify-between items-center  w-[500px] py-[20px] border-b-2">
          <p className="profileTabMedium">Agent</p>
          <div>
            <p className="profileTabBase">Kunal Patel</p>
            <p className="profileTabBase">+91-8477852310</p>
          </div>
        </div>

        <div className="py-5">
          <div className="flex gap-2">
            <img src={clipIcon} alt={"Uploader"} className="w-[15px]" />
            <p className="profileTabBase">Documents</p>
          </div>

          <div>
            <img src={NidDoc} alt={"Uploader"} className="w-[500px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export { ProfileListGrid };
