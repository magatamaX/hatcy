// next.config.js
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const withSass = require('@zeit/next-sass')

module.exports = withTypescript(
    withSass({
        cssModules: true,
        sassLoaderOptions: {
            url: false
        },
        webpack( config, options ) {
            // Do not run type checking twice:
            if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())
            
            return config
        }
    })
)
