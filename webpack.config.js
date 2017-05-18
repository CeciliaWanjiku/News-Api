const path = require ("path");

module.exports ={
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase:'./dist',
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
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
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }

        ]
    }

};
