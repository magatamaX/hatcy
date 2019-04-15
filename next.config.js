// next.config.js
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const withSass = require('@zeit/next-sass')
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg(withTypescript(
    withSass({
        include: path.resolve(__dirname, 'components/svg'),
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
)