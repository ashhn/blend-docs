import React from "react";
import { action } from "@storybook/addon-actions";
import { Radio } from "demo-blend-ui/core";

export const checkAction = (e) => {
  console.log("CLICK ", e, e.target);
  action(`${e.target.id} was clicked`)(e.target.value, e.target.checked);
};

export const RadioStateful = ({ children }) => {
  const [value, setValue] = React.useState(false);
  return (
    <Radio
      checked={value}
      value="TABLE"
      fontSize="14px"
      onChange={() => setValue(!value)}
    >
      {children}
    </Radio>
  );
};

{
  /* <Checkbox id="checkbox" checked={value} onChange={() => setValue(!value)}>
  {children}
</Checkbox>; */
}
