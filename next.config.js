const { i18n } = require('./next-i18next.config')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const createWithImages = (imageConfig) => (nextConfig) =>
  require('next-images')({ ...imageConfig, ...nextConfig })

const withImages = createWithImages({
  // exclude: /\.svg$/,
})


const config = {
  // experimental: {
  //   forceSwcTransforms: true,
  // },
  images: {
    disableStaticImages: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      loader: 'svg-react-loader',
    })

    // TODO: Remove this if nx fix their webpack overrides - see issue
    //       https://github.com/nrwl/nx/issues/4182
    // Prevent nx from adding an svg handler - stick to what is provided by
    // nextjs or that we have defined ourselves.
    config.module.rules.push = (...items) => {
      Array.prototype.push.call(
        config.module.rules,
        ...items.filter((item) => item.test.toString() !== '/\\.svg$/')
      )
    }

    return config
  },

  i18n,
  serverRuntimeConfig: {
    API_URL: process.env.API_URL,
  },

  productionBrowserSourceMaps: true,

  async redirects() {
    return [
      {
        source: '/signup',
        destination:
          process.env.NEXT_PUBLIC_NEW_SIGNUP_FLOW === 'false'
            ? '/signup/0'
            : '/signup/account-type',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    if (process.env.NEXT_PUBLIC_PROXY_ENABLED === 'true') {
      console.log('RUNNING APPLICATION WITH PROXY')
      return []
    }
    return [
      {
        source: '/api/:slug*',
        destination: '/404',
      },
    ]
  },
}


module.exports = withBundleAnalyzer(withImages(config))

