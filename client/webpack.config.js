const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html', // the path to the template file, source: https://github.com/jantimon/html-webpack-plugin/blob/main/docs/template-option.md
        title: 'Webpack Plugin' // title to use for generated HTML document
      }),
      new InjectManifest({
        swSrc: './src-sw.js', // path and filename of service worker file that will be read during build process
        swDest: 'src-sw.js', // name of the service worker file that this plugin will create
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'Take notes that autosave online and offline',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i, // this regex means that files ending ($) in '.css' (case insensitive) are tested
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/, // this regex means that files ending in either .js or .mjs are tested. the '?' means that the 'm' is matched 0 or 1 time.
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
