const CracoLessPlugin = require("craco-less");
const path = require("path");
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
    webpack: {
        alias: {
            "@": pathResolve("src"),
        },
    },
    babel: {
        plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],//装饰器
    },
    plugins: [
        {
            plugin: CracoLessPlugin,//用来支持less
            options: {
                lessLoaderOptions: {
                    lessOptions: { javascriptEnabled: true },//用来支持antd的less变量
                },
                modifyLessRule: function () {
                    return {
                        test: /\.less$/,
                        exclude: /node_modules/,
                        use: [
                            { loader: "style-loader" },
                            {
                                loader: "css-loader",
                                options: {
                                    modules: {
                                        localIdentName: "[local]_[hash:base64:6]",//用来支持css module
                                    },
                                },
                            },
                            { loader: "less-loader" },// compiles Less to CSS
                        ],
                    };
                },
            },
        },
    ],
};
