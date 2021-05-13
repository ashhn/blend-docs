import React, { useState } from "react";
import { Tabs, Tab, TabList, TabPanel, TabPanelList } from "@blend-ui/tabs";

export default { title: "Tabs/Interactive Tabs" };

export const tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabClick = (e, tab) => {
    console.log("Click", e);
    console.log("TAB", tab);
    setActiveTab(tab);
  };

  return (
    <Tabs
      activeTab={activeTab}
      onClick={tabClick}
      title={"Account Settings"}
      style={{ height: "100vh" }}
    >
      <TabList>
        <Tab>Tab One</Tab>
        <Tab test={true}>Tab Two</Tab>
        <Tab test={true}>Tab Three</Tab>
        <Tab test={true}>Tab Four</Tab>
        <Tab test={true}>Tab Five</Tab>
      </TabList>
      <TabPanelList>
        <TabPanel>Tab One Context</TabPanel>
        <TabPanel>Tab Two Context</TabPanel>
        <TabPanel>Tab Three Context</TabPanel>
        <TabPanel>Tab Four Context</TabPanel>
        <TabPanel>Tab Five Context</TabPanel>
      </TabPanelList>
    </Tabs>
  );
};
tabs.story = {
  name: "Interactive Tabs",
};

/*
return (
  <Tabs
    activeTab={activeTab}
    onClick={tabClick}
    title={"Account Settings"}
    style={{ height: "100vh" }}
  >
    <TabList>
      <Tab>User Details</Tab>
      <Tab test={true}>Usage</Tab>
      <Tab>Settings</Tab>
      <Tab>Settings2</Tab>
    </TabList>
    <TabPanelList>
      <TabPanel>Eka panel</TabPanel>
      <TabPanel>Toka panel</TabPanel>
      <TabPanel>Kolmas panel</TabPanel>
      <TabPanel>Kolmas panel2</TabPanel>
    </TabPanelList>
  </Tabs>
);
};
*/
