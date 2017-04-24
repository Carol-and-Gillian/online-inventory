module.exports = {
    devtool: 'inline-source-map',
    entry: {
        main: './src/index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: [ 'babel', 'eslint-loader' ]
            },
            { test: /\.json$/, loader: 'file' },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file']
            },
            { test: /\.scss$/, loaders: [ 'style', 'css-loader', 'sass' ] },
            { test: /\.css$/, loaders: [ 'style', 'css-loader', 'sass' ] },
            { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    progress: true,
    resolve: {
      extensions: ['', '.json', '.js']
    },
    output: {
        path: 'build/',
        filename: 'bundle.js'
    }
};