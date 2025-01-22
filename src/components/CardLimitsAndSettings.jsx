import React from "react";
import SettingsComponent from "./SettingComponents";
import { cardsettings, limitsDetails } from "../data";
import CardLimits from "./CardLimits";
import AdvanceCardControls from "./AdvanceCardControls";

const CardLimitsAndSettings = () => {
  return (
    <>
      <SettingsComponent settingInfo={cardsettings} />{" "}
      <div className="border-t border-[#DBDBDB]" />
      <CardLimits limitDetails={limitsDetails} />
      <div className="border-t border-[#DBDBDB]" />
      <AdvanceCardControls />
    </>
  );
};

export default CardLimitsAndSettings;
