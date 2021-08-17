const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  entry:'./src/index.jsx',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/.js*/,
        loader:'babel-loader',
        options:{
          presets:['@babel/preset-env']
        }
      },
      {
        test:/.jsx*/,
        loader:'babel-loader',
        options:{
          presets:['@babel/preset-env','@babel/preset-react']
        }
      },
      {
        test:/.css$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          }
        ],
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: './index.css',
    }),
  ],

};