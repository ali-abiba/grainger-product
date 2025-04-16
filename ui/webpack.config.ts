import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/index.tsx', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans the output directory before each build
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Matches .ts and .tsx files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/, // Matches .scss files
        use: ['style-loader', 'css-loader', 'sass-loader'], // Process SASS files
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Matches image files
        type: 'asset/resource', // Handles image assets
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // HTML template file
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000, // Development server port
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },
};

export default config;