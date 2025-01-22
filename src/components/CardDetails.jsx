import { Button } from "antd";
import CARD from "../assets/card-design/named-card.png";
import COPY from "../assets/copy-icon.svg";
import EYE from "../assets/eye-icon.svg";
import RIGHTARROW from "../assets/right-arrow-icon.svg";

export const CardDetails = ({ cardInfo }) => (
  <div className="flex p-4">
    <div className="rounded ">
      <div className="flex items-center">
        <span>
          <img src={CARD} alt="Card Logo" className="h-30 w-45" />
        </span>
      </div>
      <div className="flex justify-center gap-x-2">
        <Button
          color="cyan"
          variant="outlined"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.196"
              height="14.006"
              viewBox="0 0 18.02 18.01"
            >
              <path
                id="_50357200162d78bf80491b443a5d90f0"
                data-name="50357200162d78bf80491b443a5d90f0"
                d="M17.359,10.722l-3.367.51L10.134,9l3.859-2.228,3.367.51a.563.563,0,1,0,.169-1.112L14.662,5.74l1.055-2.7a.563.563,0,0,0-1.049-.41L13.43,5.8,9.571,8.03V3.575L11.7.914a.563.563,0,1,0-.88-.7L9.008,2.476,7.2.211a.563.563,0,1,0-.88.7l2.129,2.66V8.03L4.586,5.8,3.346,2.631a.563.563,0,0,0-1.049.41l1.055,2.7L.486,6.175A.563.563,0,0,0,.57,7.294a.541.541,0,0,0,.085-.007l3.367-.51L7.883,9l-3.86,2.228-3.367-.51a.563.563,0,1,0-.169,1.113l2.866.434L2.3,14.97a.563.563,0,0,0,1.049.41l1.238-3.17,3.861-2.23v4.456l-2.128,2.66a.563.563,0,0,0,.88.7l1.811-2.265L10.82,17.8a.563.563,0,1,0,.88-.7L9.571,14.435V9.979l3.859,2.228,1.238,3.17a.563.563,0,1,0,1.049-.408l-1.055-2.7,2.867-.434a.563.563,0,1,0-.169-1.113Z"
                transform="translate(-0.008 0.001)"
                fill="#170a33"
              />
            </svg>
          }
          size={"large"}
        >
          <span className="text-[#170a33]">Freeze</span>
        </Button>
        <Button
          color="cyan"
          variant="outlined"
          icon={
            <svg
              id="noun-disable-credit-card-2509464"
              xmlns="http://www.w3.org/2000/svg"
              width="21.196"
              height="14.006"
              viewBox="0 0 25.196 18.006"
            >
              <path
                id="Path_96446"
                data-name="Path 96446"
                d="M12.412,15.954H6.646a.722.722,0,0,1,0-1.444H12.4a.722.722,0,0,1,0,1.444Zm-2.161,2.161a.717.717,0,0,0-.717-.717H6.627a.722.722,0,1,0,0,1.444H9.534a.717.717,0,0,0,.717-.717Z"
                transform="translate(-3.09 -6.913)"
                fill="#170a33"
              />
              <path
                id="Path_96447"
                data-name="Path 96447"
                d="M21.315,6.67H6.2A3.237,3.237,0,0,0,3,9.9v9.361a3.237,3.237,0,0,0,3.2,3.237H16.857a.722.722,0,1,0,0-1.444H6.2a1.8,1.8,0,0,1-1.8-1.8V12.426H23.118v.911a.722.722,0,0,0,1.444,0V9.9A3.237,3.237,0,0,0,21.315,6.67ZM4.4,10.982V9.9A1.8,1.8,0,0,1,6.2,8.1H21.315a1.8,1.8,0,0,1,1.8,1.793v1.085Z"
                transform="translate(-3 -6.67)"
                fill="#170a33"
              />
              <path
                id="Path_96448"
                data-name="Path 96448"
                d="M27.3,16.7h0a4.75,4.75,0,1,1-.01-.01Zm-3.46,0a3.411,3.411,0,0,1,1.86.552L20.938,22a3.43,3.43,0,0,1,2.907-5.3Zm0,6.871a3.411,3.411,0,0,1-1.86-.552l4.767-4.739a3.43,3.43,0,0,1-2.907,5.3Z"
                transform="translate(-3.495 -6.936)"
                fill="#170a33"
              />
            </svg>
          }
          size={"large"}
        >
          <span className="text-[#170a33]">Block</span>
        </Button>
      </div>
    </div>
    <div className="w-2/3 pt-8">
      <ul className="grid grid-cols-4 gap-2">
        {Object.entries(cardInfo.details).map(([key, value]) =>
          key !== "limitInfo" ? (
            <li key={key} className="flex flex-col ">
              <span className="text-xs font-medium text-gray-400">{key}</span>
              <span className="flex items-center space-x-2 font-semibold">
                {key === "Card Holder Name" || key === "Mobile Number" ? (
                  <>
                    <span>{value}</span>
                    <img
                      src={COPY}
                      alt="icon"
                      className="w-4 h-4 object-contain"
                    />
                  </>
                ) : key === "CVC" ? (
                  <>
                    <span>{value.replace(/\d/g, "●")}</span>

                    <img
                      src={EYE}
                      alt="icon1"
                      className="w-4 h-4 object-contain"
                    />
                  </>
                ) : key === "Card Number" ? (
                  <>
                    <span>
                      {value.slice(0, 4)} {value.slice(4).replace(/\d/g, "●")}
                    </span>
                    <img
                      src={EYE}
                      alt="icon1"
                      className="w-4 h-4 object-contain"
                    />
                    <img
                      src={COPY}
                      alt="icon2"
                      className="w-4 h-4 object-contain"
                    />
                  </>
                ) : key === "Network" || key === "Issuer Bank" ? (
                  <img
                    src={value}
                    alt={key}
                    className="w-16 h-10 object-contain"
                  />
                ) : (
                  value
                )}
              </span>
            </li>
          ) : null
        )}
      </ul>

      {/* Render limitInfo in a row format */}
      <div className="mt-4">
        <ul className="flex flex-col gap-6 ">
          {Object.entries(cardInfo.details.limitInfo).map(([key, value]) => (
            <div
              className="border-t border-gray-200 flex justify-between items-center"
              key={key}
            >
              <li className="flex flex-row mt-6 items-center">
                <span className="text-sm font-medium text-gray-400 pr-7">
                  {key}
                </span>
                <span className="font-semibold">{value}</span>
              </li>
              {key === "Combined Limit on Card" && (
                <button className="mt-2 pr-3 text-sm font-semibold flex items-center space-x-2">
                  <span>View Limits</span>
                  <span>
                    <img src={RIGHTARROW} alt="right arrow" />
                  </span>
                </button>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
