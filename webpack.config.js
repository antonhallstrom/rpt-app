const PROD = process.env.NODE_ENV === 'production'
const path = require('path')

const autoprefixer = require('autoprefixer')
const postcssScss = require('postcss-scss')

const webpack = require('webpack')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const WDS_HOST = '0.0.0.0'
const WDS_PORT = 4000

process.chdir(__dirname)

module.exports = {
  entry: {
    main: [
      'core-js',
      !PROD && 'react-hot-loader/patch',
      !PROD && `webpack-dev-server/client?http://${WDS_HOST}:${WDS_PORT}`,
      !PROD && 'webpack/hot/only-dev-server',
      'react',
      'react-dom',
      './src',
    ].filter(Boolean),
  },
  output: {
      filename: '[name]-[hash].js',
      chunkFilename: '[name]-[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      pathinfo: !PROD,
      publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve('src')],
        use: [
          { loader: 'cache-loader' },
          {
            loader: 'happypack/loader',
            options: { id: 'javascript' },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|mp3|wav)$/,
        exclude: /\.icon\.svg$/i,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: '[path][name]-[hash].[ext]',
        },
      },
      {
        test: /\.icon\.svg$/i,
        loader: 'svg-sprite-loader',
      },
    ],
  },
  plugins: [
    new HappyPack({
      id: 'javascript',
      loaders: [
        {
          path: 'babel-loader',
          query: { cacheDirectory: true },
        },
      ],
      threads: 4,
    }),
    new HappyPack({
      id: 'scss',
      loaders: [
        { path: 'style-loader' },
        { path: 'css-loader' },
        { path: 'sass-loader' },
        {
          path: 'postcss-loader',
          options: {
            parser: postcssScss,
            plugins: [autoprefixer()],
          },
        },
      ],
      threads: 2,
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(PROD ? 'production' : 'development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({ React: 'react' }),
    PROD && new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJSPlugin({
      sourceMap: true
    }),
  ].filter(Boolean),
  devtool: PROD ? 'source-map' : 'inline-eval-cheap-source-map',
  devServer: {
    host: WDS_HOST,
    historyApiFallback: true,
    hot: true,
    port: WDS_PORT,
    compress: true,
  },
}
