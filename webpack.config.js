const { join } = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { BannerPlugin } = require('webpack');

const libConfig = {
  entry: join(__dirname, 'lib', 'index.js'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'titef.js',
    libraryTarget: 'commonjs',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
};

const cliConfig = {
  entry: join(__dirname, 'lib', 'cli', 'index.js'),
  output: {
    path: join(__dirname, 'bin'),
    filename: 'titef.js',
    libraryTarget: 'commonjs',
  },
  plugins: [
    new BannerPlugin({
      banner: '#! /usr/bin/env node',
      raw: true,
    }),
  ],
};

const generateConfiguration = ({
  entry, output, plugins = [], externals,
}) => ({
  target: 'node',
  entry,
  output,
  plugins: [
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
    }),
    ...plugins,
  ],
  externals,
});

module.exports = [
  generateConfiguration(libConfig),
  generateConfiguration(cliConfig),
];
