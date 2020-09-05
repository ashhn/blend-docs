const fs = require('fs')
const path = require('path')
const React = require('react')
const babel = require('@babel/core')
const mdx = require('@mdx-js/mdx')


const transform = code =>
  babel.transform(code, {
    plugins: [
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-proposal-object-rest-spread',
      'babel-plugin-remove-export-keywords'
    ], 
    presets: ['@babel/preset-env', '@babel/preset-react']
  }).code

function findInDir(dir, filter, fileList = []) {
  if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);

      files.forEach((file) => {
          const filePath = path.join(dir, file);
          const fileStat = fs.lstatSync(filePath);

          if (fileStat.isDirectory()) {
              findInDir(filePath, filter, fileList);
          }
          else if (filter.test(filePath)) {
              fileList.push(filePath);
          }
      });
  }
  return fileList;
}
//console.log('DIR ',__dirname,fs.realpathSync(__dirname+'/../stories'));
const storiesPath=fs.realpathSync(__dirname+'/../stories');
//console.log('STORIES ',storiesPath);

const mdxFiles = findInDir(storiesPath, /^.+\.stories.mdx$/);
console.log(mdxFiles);
let stories={};
mdxFiles.forEach(f=>{
  stories[f]=fs.readFileSync(f);
  /*
  stories[f]=fs.readFileSync(
    path.join(storiesPath, f)
  )
  */

})
//console.log(stories);

describe('Stories', () => {
test.each(Object.keys(stories))("Story %s",(story)=>{
  //console.log(story);
  const jsx = mdx.sync(stories[story])
  const code=transform(jsx);
  //console.log('CODE',code);
  expect(code).toContain('MDXContent.isMDXComponent = true')
}
)
});