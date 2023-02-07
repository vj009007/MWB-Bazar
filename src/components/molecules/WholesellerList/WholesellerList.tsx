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
          <th>Enable/Disable</th>
          <th></th>
        </tr>

        {data.map((item: any) => (
          <tr onClick={() => setAddModalOpen(true)}>
            <td>Firm-ABCS</td>
            <td>
              <div className="brandData">
                <img className="brandLogo" src={LogoContract} alt={"Logo"} />
                Eletcronics Bazaar
              </div>
            </td>
            <td>Rajkot</td>
            <td>Electronic Baz..</td>
            <td>Wholeseller</td>
            <td>
              <div className="brandData">
                <img className="brandLogo" src={LogoContract} alt={"Logo"} />
                Eletcronics Bazaar
              </div>
            </td>
            <td>
              <div className="status">Pending Approval</div>
            </td>
            <td>
              <div>
                <Switch />
              </div>
            </td>
            <td>
              <GridOptionButton icon={"vertical-options"} />
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
            <div className="attachmentHeader">
            </div>
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
