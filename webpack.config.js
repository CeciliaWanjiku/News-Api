const path = require ("path");

const PORT = process.env.PORT || 8080;

module.exports ={
    entry: "./src/js/main.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase:'./dist',
        disableHostCheck: true,
        host: '0.0.0.0',
        port: PORT,
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bowe_components)/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css?$/,
                loader: 'style-loader!css-loader',

            },
               {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              query: {
                name: 'assets/[name].[ext]'
              }
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                }
              }
            }
          }]
      },

        ]
    }

};
