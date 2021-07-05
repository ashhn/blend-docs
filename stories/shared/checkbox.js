import React from "react";
import { action } from "@storybook/addon-actions";
import { Checkbox } from "demo-blend-ui/core";

export const checkedStatus = true;

export const checkAction = (e) => {
  console.log("CHECK ", e);
  console.log("CHECK ", e.target, e.currentTarget, e.currentTarget.id);
  action(`${e.currentTarget.id} was clicked`)(
    e.currentTarget.value,
    e.currentTarget.checked
  );
  checkedStatus = !checkedStatus;
};

export const CheckboxStateful = ({ children, color }) => {
  const [value, setValue] = React.useState(false);
  return (
    <Checkbox
      id="checkbox"
      checked={value}
      color={color}
      onChange={() => setValue(!value)}
    >
      {children}
    </Checkbox>
  );
};
