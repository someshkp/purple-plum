import { MessageOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import React from "react";
import MESSAGEICON from "../assets/message-icon.png";
import DownArrow from "../assets/down-arrow-icon.svg";

const data = [
  { id: 1, heading: "Replacement of Card", date: "9 Sep’24, 9:48pm" },
  { id: 2, heading: "Card dispatched", date: "11 Sep’24, 9:48pm" },
  { id: 3, heading: "Card delivered", date: "13 Sep’24, 9:48pm" },
  { id: 4, heading: "Card activate", date: "15 Sep’24, 9:48pm" },
  { id: 5, heading: "Card Limits Updated", date: "17 Sep’24, 9:48pm" },
  { id: 6, heading: "Card PIN changed", date: "19 Sep’24, 9:48pm" },
];

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-6 m-6">
      <div className="w-1/2 pl-20 pt-10s">
        <Timeline>
          {data.map((item) => (
            <Timeline.Item
              key={item.id}
              dot={
                <div className="custom-circle">
                  <img
                    src={MESSAGEICON}
                    alt=""
                    style={{
                      color: "#A5B5B2",
                      fontSize: "20px",
                      paddingTop: "2px",
                    }}
                  />
                </div>
              }
              style={{ marginBottom: "20px" }}
            >
              <div className="flex flex-col scroll-pt-2">
                <span className="text-lg font-semibold">{item.heading}</span>
                <span className="text-xs text-[#818181] ml-4">{item.date}</span>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
        <span className="text-base flex items-center space-x-2">
          <span>View More </span>
          <span className="pt-2">
            <img src={DownArrow} alt="downArrow" width={"9px"} height={"9px"} />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Events;
