/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
