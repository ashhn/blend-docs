import React from "react";
import { Portal } from "@blend-ui/modal";

import { action } from "@storybook/addon-actions";

function _onCLose(event, msg) {
  console.log("CLOSE PORTAL ", event, msg);
}
export default { title: "Modal/Portal" };

export const portal = () => (
  <Portal>
    <div>Portal test</div>
  </Portal>
);
portal.story = {
  name: "Portal",
};
