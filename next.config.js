/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: ['file-loader'],
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
}

module.exports = nextConfig