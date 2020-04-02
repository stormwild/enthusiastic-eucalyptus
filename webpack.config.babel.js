import { resolve as _resolve } from 'path';
import nodeExternals from 'webpack-node-externals';

const config = {
  mode: process.env.NODE_ENV || 'development',
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
      {
        test: /\.(graphql|gql)$/,
        use: [
          {
            loader: 'webpack-graphql-loader',
            options: {
              // validate: true,
              // schema: "./path/to/schema.json",
              // removeUnusedFragments: true
              // etc. See "Loader Options" below
            },
          },
        ],
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
