module.exports = {
  // A map from regular expressions to paths to transformers
  "testPathIgnorePatterns": [
    "\\.snap$",
],
"transform": {
    "^.+\\.([j|t]sx?)$": "babel-jest",
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx"
},
 // "transform": {
 //   "^.+\\.[t|j]sx?$": "babel-jest",
 //   "^.+\\.(md|mdx)$": 'jest-transformer-mdx'
 // },
};
