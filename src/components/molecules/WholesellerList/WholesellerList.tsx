import React, { useState } from "react";
import { usewholesellerListStyles } from "@/static/stylesheets/molecules";
import { GridOptionButton } from "@/components/atoms/Button";
import { Dialog } from "@mui/material";
import { Switch } from "@/components/atoms/Switch";
import LogoContract from "@/static/icons/uploader-frame.png";
import NidFront from "@/static/images/mwb_nid_frnt.png";
import NidBack from "@/static/images/mwb_nid_back.png";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { useWholesellerListStyles } from "@/static/stylesheets/screens";
import dots from "@/static/icons/dots-1.svg";
import complete from "@/static/icons/complete.svg";
import fill from "@/static/icons/fill.svg";
import phone from "@/static/icons/phone.svg";
import contact from "@/static/icons/contact-phone.svg";
import calendar from "@/static/icons/calendar.svg";
import deleteagent from "@/static/icons/delete-agent.svg";

interface WholesellerProps {
  type?: "WholeSeller" | "Retailer";
}

const WholesellerList: React.FC<WholesellerProps> = (props) => {
  const classes = usewholesellerListStyles();
  const wholeSellerListStyles = useWholesellerListStyles();
  const data = [1, 2, 3, 4, 5, 6];
  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th>Name</th>
          <th>Contact Person</th>
          <th>City</th>
          <th>Bazaar</th>
          <th>Type</th>
          <th>Agent</th>
          <th>Status</th>
          <th>Plan Expiry</th>
          <th>Enable/Disable</th>
          <th></th>
        </tr>

        {data.map((item: any) => (
          <tr onClick={() => setAddModalOpen(true)}>
            <td>Firm-ABCS</td>
            <td className="person-details">
              <div className="flex items-center gap-2 text-[#4E2FA9]">
                <img className="brandLogo" src={contact} alt={"Logo"} />
                Sachin Yadav
              </div>
              <div className="flex flex-col items-start gap-2 person-model">
              <span className="job-title">Firm Manager</span>
              <span className="text-sm text-[#2E2C34] font-medium">Sachin Yadav</span>
              <span className="text-[13px] text-[#84818A] font-medium leading-5">Rajkot, Gujarat</span>
              <span className="flex items-center gap-2 text-sm text-[#2E2C34] font-medium"><img src={phone} alt="phone" /> +91-8477852310</span>
            </div>
            </td>
            <td>Rajkot</td>
            <td className="overlap">Electronic Baz Wholeseller</td>
            <td>Wholeseller</td>
            <td className="person-details">
              <div className="flex items-center gap-2 text-[#4E2FA9]">
                <img className="brandLogo" src={contact} alt={"Logo"} />
                Sachin Yadav
              </div>
              <div className="flex flex-col items-start gap-2 person-model">
              <span className="job-title">Firm Manager</span>
              <span className="text-sm text-[#2E2C34] font-medium">Sachin Yadav</span>
              <span className="text-[13px] text-[#84818A] font-medium leading-5">Rajkot, Gujarat</span>
              <span className="flex items-center gap-2 text-sm text-[#2E2C34] font-medium"><img src={phone} alt="phone" /> +91-8477852310</span>
            </div>
            </td>
            <td>
              <div className="status">Pending Approval</div>
            </td>
            <td>
              <div className="text-[#FFA043] text-sm font-medium">25 Jul, 2022</div>
            </td>
            <td>
              <div>
                <Switch />
              </div>
            </td>
            <td>
            <div className="agent-dropdown">
                          <img src={dots} alt="dots" />
                          <div className="dropdown">
                            <a href="#">
                              <span className="icon"><img src={complete} alt="dots" /></span> Complete KYC
                            </a>
                            <a href="#">
                              <span className="icon"><img src={fill} alt="fill" /> </span> Edit Agent
                            </a>
                            <a href="#">
                              <span className="icon"><img src={deleteagent} alt="deleteagent" /> </span> Delete Agent
                            </a>
                            <a href="#">
                              <span className="icon"><img src={calendar} alt="calendar" /> </span> Manage Commission
                            </a>
                          </div>
                        </div>
            </td>
          </tr>
        ))}
      </table>

      <Dialog
        open={addModalOpen}
        maxWidth={"lg"}
        sx={{
          ".MuiPaper-root": {
            borderRadius: "6px",
          },
        }}
        onClose={() => setAddModalOpen(false)}
      >
        <div className={wholeSellerListStyles.addDialog}>
          <div className="modalHead">
            <p className="modalTitle">Pending Approval</p>
            <div onClick={() => setAddModalOpen(false)}>X</div>
          </div>

          <div className="headTitle">
            <div>
              <p className="martTitle">Global Mart</p>
              <p className="martDescription">Wholeseller</p>
            </div>

            <div>
              <Switch />
            </div>
          </div>

          <div className="datContainer">
            <p className="dataTitle">Firm Address</p>
            <div>
              <p className="metaData">W 107b,Ahmadabad, Gujarat</p>
              <p className="dataDescription">Show Directions</p>
            </div>
          </div>

          <div className="datContainer">
            <p className="dataTitle">Firm Address</p>
            <div>
              <p className="metaData">W 107b,Ahmadabad, Gujarat</p>
              <p className="dataDescription">Show Directions</p>
            </div>
          </div>

          <div className="datContainer">
            <p className="dataTitle">Firm Address</p>
            <div>
              <p className="metaData">W 107b,Ahmadabad, Gujarat</p>
              <p className="dataDescription">Show Directions</p>
            </div>
          </div>

          <div className="attachment">
            <div className="attachmentHeader"></div>
            <img className="brandLogo" src={NidFront} alt={"Logo"} />
            <img className="brandLogo" src={NidBack} alt={"Logo"} />
          </div>

          <div>
            <div className={"action-bar"}>
              <ActionButton
                variant={"default"}
                title={"Cancel"}
                onClick={() => setAddModalOpen(false)}
              />

              <ActionButton
                variant={"primary"}
                title={"Approve"}
                onClick={() => setAddModalOpen(false)}
              />

              <ActionButton
                variant={"primary"}
                title={"Reject"}
                onClick={() => setAddModalOpen(false)}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export { WholesellerList };
