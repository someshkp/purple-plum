import { CloseCircleOutlined, DownOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import DownArrow from "../assets/down-arrow-icon.svg";

import resetPinIcon from "../assets/reset-pin.svg";

export const CardHeader = ({ title, status }) => (
  <div className="flex justify-between items-center p-4 border-b">
    <div className="flex flex-col items-baseline space-x-6 space-y-1">
      <div className="flex items-center space-x-6">
        <h1 className="text-xl font-semibold">{title}</h1>
        <Badge
          className="custom-badge"
          count={
            <span
              className={`text-sm font-medium ${
                status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </span>
          }
        />
      </div>
      <div>
        <h4>Debit Card | +91 9985889489</h4>
      </div>
    </div>
    <div className="flex space-x-3 pr-5">
      <Button color="default" variant="filled">
        <img
          src={resetPinIcon}
          alt="reset pin icon"
          width={"18px"}
          height={"18px"}
        />
        Reset PIN
      </Button>
      <Button color="default" variant="filled" style={{ alignItems: "center" }}>
        More{" "}
        <img src={DownArrow} alt="downArrow" width={"9px"} height={"9px"} />
      </Button>
      <CloseCircleOutlined style={{ fontSize: "20px" }} />
    </div>
  </div>
);
