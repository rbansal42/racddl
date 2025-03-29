/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]__[hash:base64:5]',
            },
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig 