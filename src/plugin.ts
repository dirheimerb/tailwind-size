import postcss from 'postcss';
import sizingStyles from './sizing.js';
import fs from 'fs';

postcss()
  .process(sizingStyles, { parser: require('postcss-js') })
  .then(result => {
    fs.writeFileSync('output.css', result.css);
  });
