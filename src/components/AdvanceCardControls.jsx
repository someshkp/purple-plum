import React from "react";
import { Tag } from "antd";
import TICK from "../assets/green-tick.svg";
import CROSS from "../assets/red-cross.svg";
import US from "../assets/badge/us.png";
import UK from "../assets/badge/uk.png";
import UAE from "../assets/badge/uae.png";
import INDIA from "../assets/badge/india.png";

const AdvanceCardControls = () => {
  // Dynamic data for each section
  const merchantRestrictions = [
    "Uber",
    "United Airlines",
    "Marriott",
    "Lyft",
    "Jetblue",
    "Delta",
  ];
  const categoryRestrictions = [
    "Alcohol and Bars",
    "Entertainment",
    "Gambling",
    "Clubs and memberships",
  ];
  const countriesWhitelist = [
    { name: "USA", image: US },
    { name: "UK", image: UK },
    { name: "UAE", image: UAE },
    { name: "India", image: INDIA },
  ];

  const merchantSpecificLimits = [
    {
      id: 1,
      heading: "Domestic POS Transactions",
      day: "$10,000 per Day",
      transaction: "",
    },
    {
      id: 2,
      heading: "Domestic ATM withdrawal",
      day: "$100 per Day",
      transaction: "",
    },
    {
      id: 3,
      heading: "Domestic Online Transactions",
      month: "$50,000 per Month",
      transaction: "",
    },
    {
      id: 4,
      heading: "International POS Transactions",
      transaction: "$10,000 per Transaction",
    },
    {
      id: 5,
      heading: "International ATM withdrawal",
      transaction: "$22,000.00 per Transaction",
    },
    {
      id: 6,
      heading: "International Online Transactions",
      transaction: "$50,000 per Transaction",
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-white  rounded-lg shadow-md">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Advance Card Controls
      </h1>
      <div className="border border-[#DEDEDE] p-10 rounded-lg">
        <div>
          {/* Merchant Restrictions */}
          <div className="my-6">
            <h2 className="text-lg font-semibold text-[#122549] mb-3">
              Merchant Restrictions
            </h2>
            <div className="flex flex-wrap gap-3 pt-3">
              {merchantRestrictions.map((merchant, index) => (
                <Tag
                  key={index}
                  color="green"
                  className="text-sm px-3 py-1 rounded-lg flex space-x-2"
                >
                  <span>
                    <img src={TICK} alt="green tick" />
                  </span>
                  <span>{merchant}</span>
                </Tag>
              ))}
            </div>
          </div>
          <hr />
          {/* Category Restrictions */}
          <div className="my-6">
            <h2 className="text-lg font-semibold text-[#122549] mb-3">
              Category Restrictions
            </h2>
            <div className="flex flex-wrap gap-3 pt-3">
              {categoryRestrictions.map((category, index) => (
                <Tag
                  key={index}
                  color="red"
                  className="text-sm px-3 py-1 rounded-lg flex space-x-2"
                >
                  <span>
                    <img src={CROSS} alt="red cross" />
                  </span>
                  <span>{category}</span>
                </Tag>
              ))}
            </div>
          </div>
          <hr />
          {/* Countries to Whitelist */}
          <div className="my-6">
            <h2 className="text-lg font-semibold text-[#122549] mb-3">
              Countries to Whitelist
            </h2>
            <div className="flex flex-wrap gap-3 pt-3">
              {countriesWhitelist.map((country, index) => (
                <Tag
                  key={index}
                  color="green"
                  className="text-sm px-3 py-1 rounded-lg flex space-x-2"
                >
                  <span>
                    <img
                      src={country.image}
                      alt="country flag"
                      width={"20px"}
                      height={"20px"}
                    />
                  </span>
                  <span>{country.name}</span>
                </Tag>
              ))}
            </div>
          </div>
          <hr />
          {/* Merchant Specific Limits */}
          <div className="my-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Merchant Specific Limits
            </h2>
            <div className="flex space-x-2 pt-3">
              <div className="pt-4">
                <Tag
                  color="green"
                  className="text-sm px-3 py-1 rounded-lg flex space-x-2"
                >
                  <span>
                    <img
                      src={TICK}
                      alt="green tick"
                      width={"30px"}
                      height={"30px"}
                    />
                  </span>
                  <span>Jewelry, Watches and Silver</span>
                </Tag>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {merchantSpecificLimits.map((limit) => (
                  <div key={limit.id} className="p-4">
                    <h3 className="text-sm font-medium text-gray-400">
                      {limit.heading}
                    </h3>
                    {limit.day && (
                      <p className="text-lg font-semibold text-gray-800">
                        {limit.day}
                      </p>
                    )}
                    {limit.month && (
                      <p className="text-lg font-semibold text-gray-800">
                        {limit.month}
                      </p>
                    )}
                    {limit.transaction && (
                      <p className="text-lg font-semibold text-gray-800">
                        {limit.transaction}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceCardControls;
