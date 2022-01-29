/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcPath = path.resolve('./src');
const nodeModulesPath = path.resolve('./node_modules');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
        alias: {
            '@game': srcPath,
            '@models': path.resolve(srcPath, './models'),
        },
        modules: [srcPath, nodeModulesPath],
    },
    devServer: {
        port: 9000,
        open: true,
        watchContentBase: true,
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.tsx?/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve('./tsconfig.json'),
                        },
                    },
                ],
            },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash:7].[ext]',
                            outputPath: 'assets',
                        },
                    },
                ],
            },
            {
                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,
                sideEffects: true,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: '[hash].css',
        }),
    ],
};
