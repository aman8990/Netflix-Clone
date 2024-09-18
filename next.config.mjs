// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.mjs
export default {
  webpack(config, { dev }) {
    if (!dev) {
      // Customize your Webpack configuration
      config.stats = {
        warnings: true,
        errors: true,
      };
    }
    return config;
  },
};
