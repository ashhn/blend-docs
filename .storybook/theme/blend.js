import { create } from "@storybook/theming";
import logoSmall from "./blend.png";

export default create({
  base: "light",

  /*colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',
*/
  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "white",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  /*
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'hotpink',
*/
  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Blend",
  brandUrl: "https://prifina.com",
  brandImage: logoSmall,
  /*brandImage: 'https://placehold.it/350x150'*/
});
