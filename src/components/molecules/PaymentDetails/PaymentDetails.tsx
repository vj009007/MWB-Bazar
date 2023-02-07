import React, { useState } from "react";
import { usePaymentdetailsStyle } from "@/static/stylesheets/molecules/paymentdetailsStyle";
import {
  Dialog,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { UploadArea } from "@/components/organisms/UploadArea";


export default function PaymentDetails() {
  const classes = usePaymentdetailsStyle();
  const [paymentType, setPaymentType] = React.useState("cash");
  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div className="container">
        <div className="textContainer">
          <p className="titleHead">Plan name</p>
          <p className="titleDescription">₹1224</p>
        </div>
        <div className="radio-actionButton">
          <div className="radio-button">
            <FormControl>
              <RadioGroup
                aria-labelledby="radio-buttons"
                name="controlled-radio-buttons"
                value={paymentType}
                onChange={() => setPaymentType("cash")}
              >
                <FormControlLabel
                  value="Cash "
                  control={<Radio />}
                  checked={paymentType === "cash" ? true : false}
                  label="Cash "
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="radio-button">
            <FormControl>
              <RadioGroup
                aria-labelledby="radio-buttons"
                name="controlled-radio-buttons"
                value={paymentType}
                onChange={() => setPaymentType("online")}
              >
                <FormControlLabel
                  value="Online"
                  control={<Radio />}
                  checked={paymentType === "online" ? true : false}
                  label="Online Payment"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        {paymentType === "cash" ? (
          <>
            <div className="inputField">
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-[335px] p-[15px] dark:border-[#EBEAED]"
                placeholder="Date"
              />
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-[335px] p-[15px] dark:border-[#EBEAED]"
                placeholder="Amount"
              />
            </div>
            <div className="inputField">
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-[335px] p-[15px] dark:border-[#EBEAED]"
                placeholder="Paid To"
              />
            </div>
          </>
        ) : (
          <>
            <div className="inputField">
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-[335px] p-[15px] dark:border-[#EBEAED]"
                placeholder="Phone Number"
              />
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-[335px] p-[15px] dark:border-[#EBEAED]"
                placeholder="Email Address"
              />
            </div>
            <div className="paymentButton">
              <ActionButton
                variant="primary"
                title="Send Payment Link"
                onClick={() => setAddModalOpen(true)}
              />
              <p>
                Click here
                <span>if you have received the payment manually</span>
              </p>
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
                <p className="title">Add Payment Details</p>
                <UploadArea label={"Upload Icon"} />
                <div>
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
              </div>
            </Dialog>
          </>
        )}
      </div>
    </div>
  );
}
