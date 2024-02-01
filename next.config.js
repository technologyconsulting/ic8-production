/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/coming-soon",
  //       permanent: true,
  //     },
  //     {
  //       source: "/people",
  //       destination: "/coming-soon",
  //       permanent: true,
  //     },
  //     {
  //       source: "/about",
  //       destination: "/coming-soon",
  //       permanent: true,
  //     },
  //     {
  //       source: "/sign-in",
  //       destination: "/coming-soon",
  //       permanent: true,
  //     },
  //     {
  //       source: "/sign-up",
  //       destination: "/coming-soon",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
