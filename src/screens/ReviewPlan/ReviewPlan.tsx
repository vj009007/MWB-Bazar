import * as React from "react";
import { useBazaarStepperdStyles } from "@/static/stylesheets/molecules";
import LogoPrev from "@/static/icons/ic_previous.png";
import IcCheckMark from "@/static/svg/ic_checkmark.svg";
import { DashboardLayout } from "@/components/layouts";
import { SectionHeader } from "@/components/molecules/Bazaars";

export default function ReviewPlan() {
  const classes = useBazaarStepperdStyles();

  return (
    <DashboardLayout>
      <SectionHeader />
      <div className={classes.root}>
        <div className="headContainer">
          <div className="icon">
            <img src={LogoPrev} alt={"Logo"} />
          </div>
          <div className="headTitle">Plan Preview</div>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <div className="mt-[30px]">
              <div className="border-2 rounded-lg p-[30px] w-[340px]">
                <div className="flex gap-5 justify-between">
                  <div>
                    <p className="text-[#4E2FA9] text-[16px] font-bold mt-[30px]">
                      Individual
                    </p>
                  </div>

                  <div className="bg-[#F9F5F2] rounded-full p-[10px] w-[140px] h-[135px] text-center items-center">
                    <p className="text-[#FF6652] text-[44px] font-bold">12</p>
                    <p className="font-[#84818A]">Branches</p>
                  </div>
                </div>

                <div className="py-[20px]">
                  <p className="text-[#121127] text-[24px] font-bold">
                    ₹24 <span className="text-[#7A7A86]">/month</span>
                  </p>
                </div>
                <div>
                  <p className="text-[#121127] text-[14px] font-semibold">
                    Available for UP, Delhi, Punjab
                  </p>
                </div>

                <div className="mt-[100px]">
                  <p className="font-[#121127] text-[24px] font-bold">
                    Features
                  </p>
                  <div className="flex gap-5 py-6">
                    <ul>
                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            25 Projects
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            Up to 10,000 subscribers
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            {" "}
                            Advanced analytics
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            24-hour support response time
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            Marketing advisor
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-[30px]">
              <div className="border-2 rounded-lg p-[30px] w-[340px]">
                <div className="flex gap-5 justify-between">
                  <div>
                    <p className="text-[#4E2FA9] text-[16px] font-bold mt-[30px]">
                      Individual
                    </p>
                  </div>

                  <div className="bg-[#F9F5F2] rounded-full p-[10px] w-[140px] h-[135px] text-center items-center">
                    <p className="text-[#FF6652] text-[44px] font-bold">12</p>
                    <p className="font-[#84818A]">Branches</p>
                  </div>
                </div>

                <div className="py-[20px]">
                  <p className="text-[#121127] text-[24px] font-bold">
                    ₹24 <span className="text-[#7A7A86]">/month</span>
                  </p>
                </div>
                <div>
                  <p className="text-[#121127] text-[14px] font-semibold">
                    Available for UP, Delhi, Punjab
                  </p>
                </div>

                <div className="mt-[100px]">
                  <p className="font-[#121127] text-[24px] font-bold">
                    Features
                  </p>
                  <div className="flex gap-5 py-6">
                    <ul>
                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            25 Projects
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            Up to 10,000 subscribers
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            {" "}
                            Advanced analytics
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            24-hour support response time
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            Marketing advisor
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-[30px]">
              <div className="border-2 rounded-lg p-[30px] w-[340px]">
                <div className="flex gap-5 justify-between">
                  <div>
                    <p className="text-[#4E2FA9] text-[16px] font-bold mt-[30px]">
                      Individual
                    </p>
                  </div>

                  <div className="bg-[#F9F5F2] rounded-full p-[10px] w-[140px] h-[135px] text-center items-center">
                    <p className="text-[#FF6652] text-[44px] font-bold">12</p>
                    <p className="font-[#84818A]">Branches</p>
                  </div>
                </div>

                <div className="py-[20px]">
                  <p className="text-[#121127] text-[24px] font-bold">
                    ₹24 <span className="text-[#7A7A86]">/month</span>
                  </p>
                </div>
                <div>
                  <p className="text-[#121127] text-[14px] font-semibold">
                    Available for UP, Delhi, Punjab
                  </p>
                </div>

                <div className="mt-[100px]">
                  <p className="font-[#121127] text-[24px] font-bold">
                    Features
                  </p>
                  <div className="flex gap-5 py-6">
                    <ul>
                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            25 Projects
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            Up to 10,000 subscribers
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            {" "}
                            Advanced analytics
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            24-hour support response time
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="flex gap-4 items-center">
                          <img
                            className="w-[15px]"
                            src={IcCheckMark}
                            alt={"Logo"}
                          />
                          <p className="text-[#121127] text-[14px] font-normal py-[5px]">
                            Marketing advisor
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
