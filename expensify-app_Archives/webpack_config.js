const path = require('path');
var webpack = require('webpack');

// var templateFn = require('adjust-sourcemap-loader')
//     .moduleFilenameTemplate({
//         format: 'outputRelative'
//     });

const projectPath = '/home/ankit/Code_Practice/VSCode_Code_Environment/VSCode_Workables/React_Workables/React_Practice_Projects/The Complete React Developer Course_ (w Hooks and Redux)_AndrewMead/React_App_Zone/React_App/expensify-app';

module.exports = {
    entry: './src/app.js',
    // entry: './src/playground-files/appTwo.js',
    // entry: './src/playground-files/appEleven.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        // devtoolModuleFilenameTemplate: 'file:///[resource-path]'
        devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
        // devtoolModuleFilenameTemplate: templateFn,
        // devtoolFallbackModuleFilenameTemplate: templateFn
        // devtoolModuleFilenameTemplate: "webpack:///[resource-path]?[loaders]"
        // devtoolModuleFilenameTemplate: "[absolute-resource-path]",
        // devtoolModuleFilenameTemplate: "webpack://[namespace]/[resource-path]?[loaders]",
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    // devtool: 'cheap-module-eval-source-map',
    // devtool: false,
    devtool: 'source-map',
    // devtool: 'cheap-module-source-map',
    // plugins: [new webpack.SourceMapDevToolPlugin({
    //     filename: '[file].map',
    //     // exclude: ['ExpenseForm.js'],
    //     options: {
    //         ignoreWarnings: [/Failed to parse source map/]
    //     }
    // })],
    // plugins: [new webpack.EvalSourceMapDevToolPlugin({
    //     filename: '[file].map',
    //     // exclude: ['ExpenseForm.js'],
    //     options: {
    //         ignoreWarnings: [/Failed to parse source map/]
    //     }
    // })],
    // ignoreWarnings: [/Failed to parse source map/],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}