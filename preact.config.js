import webpack from 'webpack'

export default function (config, env, helpers) {
    const BASE_URL = env.production ? '/simple-rain' : ''

    config.plugins.push(new webpack.DefinePlugin({
        'process.env.BASE_URL': JSON.stringify(BASE_URL)
    }))
}
