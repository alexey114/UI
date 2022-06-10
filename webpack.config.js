const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const path = require('path');

let entries = {
    // 'react-part_bundle': './src/front/index.tsx',
    'index1js': './src/front/index1.js',
    'index2js': './src/front/index2.js',
    'index1': './src/front/index1.scss',
    'index2': './src/front/index2.scss',
    'index3': './src/front/index3.scss',
    'index4': './src/front/index4.scss',
    'index5': './src/front/index5.scss',
    'index6': './src/front/index6.scss',
    'index1A': './src/front/index1A.scss',
    'index2A': './src/front/index2A.scss',
    'index3A': './src/front/index3A.scss',
    'index4A': './src/front/index4A.scss',
    'index5A': './src/front/index5A.scss',
    'index6A': './src/front/index6A.scss',
    'nutrition/index11': './src/front/nutrition/index1.scss',
    'nutrition/index12': './src/front/nutrition/index2.scss',
}

module.exports = {
    mode: 'development',
    entry: entries,
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     loader: 'ts-loader',
            //     exclude: /node_modules/,
            //     options: {
            //         configFile: 'tsconfig.json'
            //     }
            // },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            // {
            //     test: /\.module\.scss$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 sourceMap: true,
            //                 modules: { getLocalIdent: getCSSModuleLocalIdent }
            //             }
            //         },
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         }
            //     ],
            // },
            // { // @@## нужно? // сломало все. Непонятно нужно ли это вообще. Может это только для tsx ? Вероятно
            //     test: /\.(jpg|png|gif|svg)$/,
            //     use: {
            //         loader: 'file-loader',
            //         options: {
            //             name: "[name].[ext]",
            //             // outputPath: "../svg",
            //             esModule: false
            //         }
            //     }
            // }
        ]
    },
    // resolve: {
    //     extensions: ['.tsx', '.ts', '.js']
    // },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dest/front/'),
        devtoolModuleFilenameTemplate(info) {
            return `file:///${info.absoluteResourcePath.replace(/\\/g, '/')}`;
        },
    },
    devtool: 'source-map',
    devServer: {
        // contentBase: './dest/front/'
        port: 9000
    },
    optimization: {
        minimize: !true,
        // splitChunks: { // required to be compiled, but for what? // @@## resolve globally. Definitely not req. here
        //     cacheGroups: {
        //         styles: {
        //             name: "styles",
        //             type: "css/mini-extract",
        //             chunks: "all",
        //             enforce: true,
        //         },
        //     },
        // },
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "front/*.html", context: path.resolve(__dirname, "src"), to: path.resolve(__dirname, "dest") },
                { from: "front/fitness_app/*.html", context: path.resolve(__dirname, "src"), to: path.resolve(__dirname, "dest") },
                { from: "front/*.js", context: path.resolve(__dirname, "src"), to: path.resolve(__dirname, "dest") },
                { from: "front/images/image_1.jpg", context: path.resolve(__dirname, "src"), to: path.resolve(__dirname, "dest/front/images") },
                { from: "front/images/imagess.png", context: path.resolve(__dirname, "src"), to: path.resolve(__dirname, "dest/front/images") }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            // chunkFilename: "css/[name].css"
            // filename: './css/index1111.css',
        }),
    ],
};