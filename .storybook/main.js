const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
    {
      name: "storybook-addon-turbo-build",
      options: {
        // Please refer below tables for available options
        optimizationLevel: 2,
        esbuildMinifyOptions: { target: "es2015" },
        disableSourceMap: true
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  target: 'node',
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        return prop.parent
          ?
            /@mui/.test(prop.parent.fileName) ||
            !/node_modules/.test(prop.parent.fileName)
          : true;
      },
    },
  },
  webpackFinal: (config) => {
    config.resolve.plugins = config.resolve.plugins || []
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      })
    )

    config.module.rules = config.module.rules.map((rule) => {
      if (/svg/.test(rule.test)) {
        // Silence the Storybook loaders for SVG files
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        };
      }

      if (/css/.test(rule.test)) {
        rule.use.push('postcss-loader')
      }

      return rule
    })

    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          issuer: /\.tsx?$/,
          use: ['svg-react-loader'],
        },
        {
          loader: require.resolve('url-loader'),
        },
      ],
    });

    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        path: false
      }
    }

    return config
  },
}
