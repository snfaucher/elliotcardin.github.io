const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {

    entry: './src/index',

    output: {
        filename: 'index.js',
        path: 'dist',
        /* IMPORTANT!
         * You must compile to UMD or CommonJS
         * so it can be required in a Node context: */
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'react-hot-loader'
                    },
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: [/node_modules/]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new StaticSiteGeneratorPlugin({
            crawl : true,
            locals: {
                // Properties here are merged into `locals`
                // passed to the exported render function
                greet: 'Hello'
            }
        })
    ]

};