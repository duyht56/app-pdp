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
          // test
          './BenefitsProps0': './components/BenefitsProps0',
          './BenefitsProps1': './components/BenefitsProps1',
          './BenefitsProps2': './components/BenefitsProps2',
          './BenefitsProps3': './components/BenefitsProps3',
          './BenefitsProps4': './components/BenefitsProps4',
          './BenefitsProps5': './components/BenefitsProps5',
          './BenefitsProps6': './components/BenefitsProps6',
          './BenefitsProps7': './components/BenefitsProps7',
          './BenefitsProps8': './components/BenefitsProps8',
          './BenefitsProps9': './components/BenefitsProps9',
          './BenefitsProps10': './components/BenefitsProps10',
          './BenefitsProps11': './components/BenefitsProps11',
          './BenefitsProps12': './components/BenefitsProps12',
          './BenefitsProps13': './components/BenefitsProps13',
          './BenefitsProps14': './components/BenefitsProps14',
          './BenefitsProps15': './components/BenefitsProps15',
          './BenefitsProps16': './components/BenefitsProps16',
          './BenefitsProps17': './components/BenefitsProps17',
          './BenefitsProps18': './components/BenefitsProps18',
          './BenefitsProps19': './components/BenefitsProps19',
          './BenefitsProps20': './components/BenefitsProps20',
          './BenefitsProps21': './components/BenefitsProps21',
          './BenefitsProps22': './components/BenefitsProps22',
          './BenefitsProps23': './components/BenefitsProps23',
          './BenefitsProps24': './components/BenefitsProps24',
          './BenefitsProps25': './components/BenefitsProps25',
          './BenefitsProps26': './components/BenefitsProps26',
          './BenefitsProps27': './components/BenefitsProps27',
          './BenefitsProps28': './components/BenefitsProps28',
          './BenefitsProps29': './components/BenefitsProps29',
          './BenefitsProps30': './components/BenefitsProps30',
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
