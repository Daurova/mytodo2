module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          plugins: [['@babel/plugin-transform-private-property-in-object', { loose: true }]],
        },
      },
    });
    return config;
  },
};