import React from "react";
import Text from "../src/Text";

export const selectOptions = [
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
