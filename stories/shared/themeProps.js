import React from "react";
//import { useTheme } from "./theme/ThemeProvider";
import { colorsList } from "../shared/colors2";
//console.log("THEME ", colorStyles);
//console.log("THEME ", ThemeProvider);

export const ColorStylesArgType = {
  colorStyle: {
    name: "colorStyle",
    description: "Color style pair from theme",
    type: { name: "string", required: false },
    control: {
      type: "select",
      options: Object.keys(colorsList),
    },
  },
};

export const bgArgTypes = {
  bg: {
    name: "Background Color",
    description: "Color style pair from theme",
    type: { name: "string", required: false },
    control: {
      type: "select",
      options: Object.keys(colorsList),
    },
  },
};

export const buttonColorArgTypes = {
  colorStyle: {
    name: "Button Color",
    description: "Color style pair from theme",
    type: { name: "string", required: false },
    control: {
      type: "select",
      options: ["error", "secondary"],
    },
  },
};

export const colorArgType = {
  bg: {
    name: "Color",
    description: "Color style pair from theme",
    type: { name: "string", required: false },
    control: {
      type: "color",
    },
  },
};

export const color2ArgType = {
  color: {
    name: "Color",
    description: "Color style pair from theme",
    type: { name: "string", required: false },
    control: {
      type: "color",
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
