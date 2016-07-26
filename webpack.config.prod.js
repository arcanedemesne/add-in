import webpack from 'webpack';
import path from 'path';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('prod')
};

export default {
    debug: false,
    devtool: 'source-map',
    noInfo: false,
    entry: './src/index.js',
    target: 'web',
    output: {
        path: __dirname + '/build', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$|\.jsx$/, include: path.join(__dirname, 'src'), loaders: ['babel']}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};