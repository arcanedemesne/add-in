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
        './src/index'
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
            {test: /\.js$|\.jsx$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /(\.css)$/, loaders: ['style', 'css' ]},
            {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};