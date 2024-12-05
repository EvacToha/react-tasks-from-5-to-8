import path from "path";
import { Configuration } from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

const config: any = {
    mode:
        (process.env.NODE_ENV as "production" | "development" | undefined) ??
        "development",
    entry: "./src/entrypoint.tsx",
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: "public" }],
        }),
    ],
    devServer: {
        proxy: [
            {
                context: ['/api'],
                target: 'https://bored-api.appbrewery.com',
                changeOrigin: true,
                pathRewrite: {'^/api': ''},
            }
        ],
    }

};

export default config;