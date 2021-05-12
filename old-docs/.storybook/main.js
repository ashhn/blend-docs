module.exports = {
    stories: ['../stories/**/*.stories.(js|mdx)',
    ],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-links/register',
        '@storybook/addon-knobs/register',
      
        {
          name: '@storybook/addon-docs',
          options: {
            configureJSX: true,
            babelOptions: {},
            sourceLoaderOptions: null,
          },
        },
        
      ],
    };
 /*   
'../../core/stories/*.stories.mdx'
(js|mdx)
module.exports = {
    stories: ['../src/strories/*.stories.[tj]s'],
    };
    

    module.exports = {
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
};
 */