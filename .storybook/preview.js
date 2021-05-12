import React from "react";
import { addDecorator } from "@storybook/react";
import { createGlobalStyle } from "styled-components";

import { baseStyles, ThemeProvider } from "demo-blend-ui/core";

const GlobalStyle = createGlobalStyle`
  body {
   ${baseStyles};
  }
 
`;

const themeProviderDecorator = (story) => {
  //console.log("STYLES ", GlobalStyle);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <div style={{ margin: "3em" }}>{story()}</div>
    </ThemeProvider>
  );
};
addDecorator(themeProviderDecorator);
