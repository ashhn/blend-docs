import React from "react";

import * as Icons from "@blend-ui/icons";

export default { title: "Icons" };

export const AllIcons = () => {
  const icons = Object.values(Icons);
  return icons.map((IconComponent) => <IconComponent />);
};

export const icons = () => <AllIcons />;
icons.story = {
  name: "Icons",
};
