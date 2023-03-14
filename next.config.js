const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const { dependencies } = require("./package.json");
const {
  addPathPrefix,
} = require("next/dist/shared/lib/router/utils/add-path-prefix");

module.exports = {
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["image/webp"],
    domains: ["services.electrolux-medialibrary.com"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
      domains: ["https://services.electrolux-medialibrary.com"],
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  webpack5: true,
  webpack(config, options) {
    const { isServer } = options;
    const location = isServer ? "ssr" : "chunks";
    config.plugins.push(
      new NextFederationPlugin({
        name: "PDP",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./VideoGallery": "./components/VideoGallery/VideoGallery.js",
          "./BenefitsProps": "./components/BenefitsProps/BenefitsProps.js",
          "./DetailProps": "./components/DetailProps/DetailProps.js",
          "./ProductInformation":
            "./components/ProductInformation/ProductInformation.js",
          "./LandingProps": "./components/LandingProps/LandingProps.js",
          "./title": "./components/test.js",
        },
        remotes: {
          landing: `landing@https://app-shell-theta.vercel.app/_next/static/${location}/remoteEntry.js`,
        },
        extraOptions: {
          exposePages: true,
        },
        shared: {},
      })
    );

    return config;
  },
};
