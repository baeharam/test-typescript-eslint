const webpackPreprocessor = require('@cypress/webpack-preprocessor');

const webpackOptions = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
};

module.exports = (on) => {
  on(
    'file:preprocessor',
    webpackPreprocessor({
      webpackOptions,
    }),
  );
};
