import React  from "react";
import { GridOptionButton } from "@/components/atoms/Button";
import { Switch } from "@/components/atoms/Switch";
import { useAgentStyles } from "@/static/stylesheets/molecules";
import LogoContract from "@/static/icons/uploader-frame.png";

interface MasterListGridProps {
  type?: "WholeSeller" | "Retailer";
}

const AgentList: React.FC<MasterListGridProps> = (props) => {
  const classes = useAgentStyles();
  const data = [1, 2, 3, 4, 5, 6];
  
  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th>Name</th>
          <th>Mobile Number</th>
          <th>City</th>
          <th>Bazaar</th>
          <th>Type</th>
          <th>Status</th>
          <th>Enable/Disable</th>
          <th></th>
          <th></th>
        </tr>
        {data.map((item: any) => (
          <tr>
            <td>Firm-ABC</td>
            <td>
              <div className="brandData">
                <img className="brandLogo" src={LogoContract} alt={"Logo"} />
                +91-8477852310
              </div>
            </td>
            <td>Rajkot</td>
            <td>Electronic Baz..</td>
            <td>Salesman</td>
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
    </div>
  );
};

export { AgentList };
