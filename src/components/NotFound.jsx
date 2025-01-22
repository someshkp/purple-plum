import React from "react";
import NOTFOUND from "../assets/404.png";

const NotFound = () => {
  return (
    <div className="container">
      <span className="flex justify-center">
        <img src={NOTFOUND} alt="404 not found" />
      </span>
      <span className="flex justify-center text-3xl font-semibold text-[#8a96a3]">
        The Page you are looking for is not available!
      </span>
    </div>
  );
};

export default NotFound;
