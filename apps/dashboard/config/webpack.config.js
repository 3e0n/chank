/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const distFolder = path.resolve(__dirname, '../dist');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../index.tsx'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, distFolder),
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@libs': path.resolve(__dirname, '../../../libs'),
            '@': path.resolve(__dirname, '../../..'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // disable type checker - we will use it in fork ForkTsCheckerWebpackPlugin
                            transpileOnly: true,
                        },
                    },
                ],
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            inject: true,
            template: path.resolve(__dirname, '../index.html'),
        }),
        new ForkTsCheckerWebpackPlugin({
            tsconfig: path.resolve(__dirname, '../tsconfig.json'),
        }),
    ],
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    devServer: {
        contentBase: [distFolder, path.resolve(__dirname, '../../../node_modules')],
    },
};
