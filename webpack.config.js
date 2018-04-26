const path = require('path');
const webpack = require('webpack');
const packageJson = require('./package.json');

const promiseShimPlugin = new webpack.ProvidePlugin({ Promise: 'es6-promise-promise' });


const filePaths = [
  path.resolve(__dirname, 'src'),
];

const coreConfig = {
  target: 'web',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: filePaths,
        loader: 'babel-loader',
        options: { presets: ['es2015'] },
      },
    ],
  },
  performance: {
    hints: 'error',
    maxAssetSize: 175000,
  },
  devtool: 'source-map',
};

const coreOutput = {
  path: path.resolve(__dirname, 'dist', packageJson.version, ''),
};


module.exports = [
  Object.assign({}, coreConfig, {
    plugins: [promiseShimPlugin],
    output: Object.assign({}, coreOutput, {
      filename: 'core.js',
      library: 'Core',
      libraryTarget: 'this',
    }),
  }),
  Object.assign({}, coreConfig, {
    plugins: [promiseShimPlugin],
    output: Object.assign({}, coreOutput, {
      filename: 'core-amd.js',
      library: 'Core',
      libraryTarget: 'amd',
    }),
  }),
  Object.assign({}, coreConfig, {
    output: Object.assign({}, coreOutput, {
      filename: 'core-node.js',
      library: 'Core',
      libraryTarget: 'commonjs2',
    }),
    performance: Object.assign({}, coreConfig.performance, { hints: 'warning' }),
  }),
];
