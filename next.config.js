/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}



module.exports = nextConfig;


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],

  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
}