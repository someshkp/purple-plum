import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const CardLimits = ({ limitDetails }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex justify-between items-center px-3 mb-6">
        <h2 className="text-lg font-bold text-gray-800">Card Limits</h2>
        <Button icon={<EditOutlined />} color="default" variant="filled">
          Edit Limit
        </Button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {limitDetails.map((item) => (
          <div key={item.id} className="p-4 ">
            <h3 className="text-sm font-medium text-gray-400">
              {item.heading}
            </h3>
            {item.day && (
              <p className="text-lg font-semibold text-gray-800">{item.day}</p>
            )}
            {item.month && (
              <p className="text-lg font-semibold text-gray-800">
                {item.month}
              </p>
            )}
            {item.transaction && (
              <p className="text-lg font-semibold text-gray-800">
                {item.transaction}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardLimits;
