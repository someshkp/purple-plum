import { useState } from "react";
import { CardHeader } from "./components/CardHeader";
import { TabNavigation } from "./components/TabNavigation";
import { CardDetails } from "./components/CardDetails";
import VISA from "./assets/visa-icon.svg";
import CITIBANK from "./assets/citi-bank-logo.svg";
import CardLimitsAndSettings from "./components/CardLimitsAndSettings";
import Events from "./components/Events";
import NotFound from "./components/NotFound";

const App = () => {
  const [activeTab, setActiveTab] = useState("1");
  const cardInfo = {
    details: {
      "Card Holder Name": "Chandra Sekhar",
      "Mobile Number": "+9 9400394990",
      "Card Type": "Physical - Debit Card",
      Network: VISA,
      "Card Number": "5546 1290 6755 8795",
      "Kyc Status": "Full KYC",
      CVC: "269",
      "Issuer Bank": CITIBANK,
      Address: "789 Innovation Blvd, Suite 200",
      Location: "-",
      "Account Linked": "Saving - xxxx 90958",
      limitInfo: {
        "Combined Limit on Card": "$20,000.00",
        "Last Charged": "02 Aug 2024",
      },
    },
  };

  return (
    <div className="h-screen w-screen p-5 bg-gray-200 flex items-center justify-center">
      <div className="w-full h-full bg-white shadow-md rounded-lg flex flex-col overflow-hidden">
        <CardHeader title="Bank's Reward Debit Card" status="Active" />
        <div>
          <TabNavigation onTabChange={(key) => setActiveTab(key)} />
        </div>

        <div
          className={`flex-grow overflow-y-auto ${
            activeTab !== "1" ? "hidden" : ""
          }`}
        >
          {activeTab === "1" && <CardDetails cardInfo={cardInfo} />}
        </div>
        <div
          className={`flex-grow overflow-y-auto ${
            activeTab !== "2" ? "hidden" : ""
          }`}
        >
          {activeTab === "2" && <CardLimitsAndSettings />}
        </div>
        <div
          className={`flex-grow overflow-y-auto ${
            activeTab !== "3" ? "hidden" : ""
          }`}
        >
          {activeTab === "3" && <Events />}
        </div>
        <div
          className={`flex-grow overflow-y-auto ${
            activeTab !== "4" ? "hidden" : ""
          }`}
        >
          {activeTab === "4" && <NotFound />}
        </div>
        <div
          className={`flex-grow overflow-y-auto ${
            activeTab !== "5" ? "hidden" : ""
          }`}
        >
          {activeTab === "5" && <NotFound />}
        </div>
        <div
          className={`flex-grow overflow-y-auto ${
            activeTab !== "6" ? "hidden" : ""
          }`}
        >
          {activeTab === "6" && <NotFound />}
        </div>
      </div>
    </div>
  );
};

export default App;
