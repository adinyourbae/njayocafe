// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Add a rule to handle MP3 files
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/', // Adjust the publicPath as needed
            outputPath: 'static/', // or any other output path you prefer
            name: '[name].[ext]',
            esModule: false,
          },
        },
      ],
    });

    // Add a rule to handle MP4 files
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/', // Adjust the publicPath as needed
            outputPath: 'static/', // or any other output path you prefer
            name: '[name].[ext]',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};
