import webpack from 'webpack'

export default function (config, env, helpers) {
    const PUBLIC_PATH = env.production ? '/simple-rain/' : '/'
    config.output.publicPath = PUBLIC_PATH
    config.plugins.push( new webpack.DefinePlugin({
        'process.env.PUBLIC_PATH': JSON.stringify(PUBLIC_PATH)
    }))
}
