// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"], // Allow images from Sanity's CDN
  },
};

export default nextConfig;
