/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'dev-ui-image-assets.s3.ap-south-1.amazonaws.com'],
  },
}

module.exports = nextConfig

