const { join } = require('path');
const webpack = require('webpack');
const defaultconfig = {
  entry: './src/index.js',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

const customize = config => Object.assign({}, config);

webpack(customize(defaultconfig)).watch(
  { ignored: /node_modules/ },
  (err, stats) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(stats.toString());
  }
);
