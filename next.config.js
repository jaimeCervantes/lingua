/** @type {import('next').NextConfig} */
const path = require('path');
const withNextTranspileModule = require('next-transpile-modules')([
  "@fullcalendar/common",
  "@fullcalendar/react",
  "@fullcalendar/daygrid",
  "@fullcalendar/timegrid",
]);

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
    components: path.join(__dirname, 'src/components'),
    pagesFn: path.join(__dirname, 'src/pagesFn'),
    styles: path.join(__dirname, 'src/styles'),
    util: path.join(__dirname, 'src/util'),
    muiConfig: path.join(__dirname, 'src/muiConfig'),
  }

  return { ...prevAlias, ...moreAlias };
}


module.exports = withNextTranspileModule(nextConfig);
