const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Use 'production' for final build
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Cleans the dist folder before each build
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Use our html file as a template
            filename: 'index.html', // Output filename
            inject: 'body' // Inject script at the end of the body
        })
    ]
};