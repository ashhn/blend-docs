import React from "react";
//import { addDecorator } from '@storybook/react';

import { addDecorator, addParameters } from "@storybook/react";
//import { withInfo } from '@storybook/addon-info';

//import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

//import { DocsPage } from 'storybook-addon-deps/blocks/DocsPage';
//import { DocsPage } from 'storybook-addon-deps/blocks';
//addParameters({ docs: { page: DocsPage } });

/// Root behavious will change
/// https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#simplified-hierarchy-separators

addParameters({
  /*options: {
      showRoots: true,
    },
    */
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

import { ThemeProvider, Box } from "@blend-ui/core";

const themeProviderDecorator = (story) => (
  <ThemeProvider>
    <Box px={5}>{story()}</Box>
  </ThemeProvider>
);

addDecorator(themeProviderDecorator);
