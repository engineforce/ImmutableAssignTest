// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
var loader = require('awesome-typescript-loader')
var CheckerPlugin = loader.CheckerPlugin;
console.log(CheckerPlugin);

module.exports = {

    entry: './index.ts',

    output: {
        filename: 'bundle.js',
        path: './dist'
    },

    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',

    // Add the loader for .ts files.
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new CheckerPlugin()
    ]
};