import React, { createRef } from "react";

import { SearchSelect, Label, Box, Text } from "demo-blend-ui/core";

export default { title: "Core/Search Select" };

const selectOptions = [
  {
    key: "0",
    value: "This is component",
    searchValue: "This is component +358",
    component: (
      <React.Fragment>
        <Text as="span">This is component</Text>
        <Text as="span">(+358)</Text>
      </React.Fragment>
    ),
  },
  { key: "1", value: "Premium Economy" },
  { key: "2", value: "Something" },
];
export const select = () => (
  <Box>
    <Label htmlFor="cabinClass">Cabin Class</Label>
    <SearchSelect
      id="cabinClass"
      name="cabinClass"
      defaultValue="1"
      options={selectOptions}
      onChange={(e) => {
        console.log("Change ", e.target.value);
      }}
    />
  </Box>
);
select.story = {
  name: "Search Select",
};
export const select2 = () => {
  const boxRef = createRef();

  return (
    <Box width={"200px"} ref={boxRef}>
      <Label htmlFor="cabinClass">Cabin Class</Label>
      <SearchSelect
        id="cabinClass"
        name="cabinClass"
        size={"xs"}
        defaultValue="000"
        options={selectOptions}
        onChange={(e, code) => {
          console.log("Change ", e);
          console.log("Change ", code);
        }}
        showList={true}
        selectOption={"key"}
        width={"50px"}
        containerRef={boxRef}
        containerOffset={"20px"}
      />
    </Box>
  );
};
select2.story = {
  name: "With List Visible",
};
