import { Tabs } from "antd";

export const TabNavigation = ({ onTabChange }) => (
  <Tabs
    defaultActiveKey="1"
    onChange={onTabChange}
    className="bg-[#f0fcf9] px-10"
    style={{ marginBottom: "0 !important" }}
  >
    <Tabs.TabPane tab="Details" key="1" />
    <Tabs.TabPane tab="Card Limits & Settings" key="2" />
    <Tabs.TabPane tab="Events" key="3" />
    <Tabs.TabPane tab="Blocked Cards" key="4" />
    <Tabs.TabPane tab="Linked Cards" key="5" />
    <Tabs.TabPane tab="Offers" key="6" />
  </Tabs>
);
