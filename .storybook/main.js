module.exports = {
  stories: ["../stories/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-knobs/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    "@storybook/addon-controls",
    "@storybook/addon-backgrounds",
  ],
};
