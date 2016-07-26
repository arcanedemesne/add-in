import webpack from 'webpack';
import path from 'path';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('localhost')
};

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: false,
    entry: [
        './src/index.js'
    ],
    target: 'web',
    output: {
        path: __dirname + '/build', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.NoErrorsPlugin()
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