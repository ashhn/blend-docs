import React from "react";
//import { useTheme } from "./theme/ThemeProvider";
import { colorStyles } from "@blend-ui/core";
//console.log("THEME ", colorStyles);
//console.log("THEME ", ThemeProvider);

export const ColorStylesArgType = {
  colorStyle: {
    name: "colorStyle",
    description: "Color style pair from theme",
    type: { name: "string", required: false },
    control: {
      type: "select",
      options: Object.keys(colorStyles),
    },
  },
};
/*
colorStyle: {
    name: "colorStyle",
    description: "Color style pair from theme",
    type: { name: "string", required: false },
    control: {
      type: "select",
      options: ["error"],
    },
  },

export const SpaceArgType = {
    space: {
      name: "space",
      description:
        "Styled systems dynamic space props <br> <a href='https://styled-system.com/api#space' target='_blank'>Styled-system space</a>",
      type: {
        name: "string",
      },
      control: {
        type: null,
      },
    },
  };

  */
