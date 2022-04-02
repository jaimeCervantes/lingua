/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig  = {
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack}) {
    config.resolve.alias = augmentRevolveAlias(config.resolve.alias);

    return config;
  },
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "res.cloudinary.com"],
  },
}

function augmentRevolveAlias(prevAlias) {
  const moreAlias = {
    components: path.join(__dirname, 'components'),
    pagesFn: path.join(__dirname, 'pagesFn'),
    styles: path.join(__dirname, 'styles'),
    util: path.join(__dirname, 'util'),
    muiConfig: path.join(__dirname, 'muiConfig'),
  }

  return { ...prevAlias, ...moreAlias };
}


module.exports = nextConfig;
