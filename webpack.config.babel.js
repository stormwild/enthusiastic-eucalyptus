import { resolve as _resolve } from 'path';
import nodeExternals from 'webpack-node-externals';

const config = {
  mode: 'development',
  target: 'node',
  devtool: 'source-map',
  entry: {
    app: './server/server.js',
  },
  output: {
    path: _resolve(__dirname),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [],
  resolve: {
    modules: [_resolve(__dirname, './server/')],
  },
  externals: [nodeExternals()],
};

export default config;
