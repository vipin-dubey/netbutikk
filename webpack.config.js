/* eslint-disable global-require */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const useExperimentalFeatures = process.env.CARBON_USE_EXPERIMENTAL_FEATURES === 'true';
const useExternalCss = process.env.CARBON_REACT_STORYBOOK_USE_EXTERNAL_CSS === 'true';
const useStyleSourceMap = process.env.CARBON_REACT_STORYBOOK_USE_STYLE_SOURCEMAP === 'true';
const outputDirectory = 'dist';
const replaceTable = { componentsX: useExperimentalFeatures };

const styleLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      sourceMap: useStyleSourceMap
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        require('autoprefixer')({
          browsers: ['last 1 version', 'ie >= 11']
        })
      ],
      sourceMap: useStyleSourceMap
    }
  },
  {
    loader: 'sass-loader',
    options: {
      includePaths: [path.resolve(__dirname, '..', 'node_modules')],
      data: `
        $feature-flags: (
          components-x: ${useExperimentalFeatures},
          grid: ${useExperimentalFeatures},
          ui-shell: ${useExperimentalFeatures},
        );
      `,
      sourceMap: useStyleSourceMap,
      // Ref: webpack-contrib/sass-loader#272
      outputStyle: useStyleSourceMap ? 'compressed' : 'expanded'
    }
  }
];

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\/FeatureFlags\.js$/,
        loader: 'string-replace-loader',
        options: {
          multiple: Object.keys(replaceTable).map(key => ({
            search: `export\\s+const\\s+${key}\\s*=\\s*false`,
            replace: `export const ${key} = ${replaceTable[key]}`,
            flags: 'i'
          }))
        }
      },
      {
        test: /\-story\.jsx?$/,
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              prettierConfig: {
                parser: 'babylon',
                printWidth: 80,
                tabWidth: 2,
                bracketSpacing: true,
                trailingComma: 'es5',
                singleQuote: true
              }
            }
          }
        ],
        enforce: 'pre'
      },
      {
        test: /\.scss$/,
        use: !useExternalCss
          ? [{ loader: 'style-loader' }, ...styleLoaders]
          : ExtractTextPlugin.extract({
            use: styleLoaders
          })
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: !useExternalCss
    ? [
      new CleanWebpackPlugin([outputDirectory]),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
    : [
      new ExtractTextPlugin({
        filename: '[name].[contenthash].css'
      })
    ]
};
