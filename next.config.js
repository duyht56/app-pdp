const NextFederationPlugin = require('@module-federation/nextjs-mf');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const deps = require('./package.json').dependencies;

module.exports = withBundleAnalyzer({
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/avif', 'image/webp'],
    domains: ['services.electrolux-medialibrary.com', 'electrolux.it'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    dirs: ['pages', 'components', 'services'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // optimization: {
  //   splitChunks: false,
  // },

  webpack(config, options) {
    const { isServer, dev } = options;
    const location = isServer ? 'ssr' : 'chunks';

    config.plugins.push(
      new NextFederationPlugin({
        name: 'PDP',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './VideoGallery': './components/VideoGallery',
          './BenefitsProps': './components/BenefitsProps',
          './DetailProps': './components/DetailProps',
          './ProductInformation': './components/ProductInformation',
          './LandingProps': './components/LandingProps',
          './ProductListing': './components/ProductListing',
        },
        remotes: {
          SHELL: `SHELL@${process.env.APP_SHELL_URL}/_next/static/${location}/remoteEntry.js`,
        },
        extraOptions: {
          exposePages: true,
        },
        shared: {},
      })
    );

    return config;
  },
});
