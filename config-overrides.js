/* eslint-disable  react-hooks/rules-of-hooks */
const { useBabelRc, override, addWebpackModuleRule } = require('customize-cra');

const disableMinification = () => config => {
  const dontMinify = Boolean(process.env.REACT_APP_NO_MINIFY);
  if (dontMinify) {
    config.optimization.minimize = false;
  }
  return config;
};

module.exports = override(
  useBabelRc(),
  addWebpackModuleRule({
    test: /\.(js|tsx)$/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: '@linaria/webpack-loader',
        options: {
          cacheDirectory: 'src/.linaria_cache',
          sourceMap: process.env.NODE_ENV !== 'production',
        },
      },
    ],
  }),
  disableMinification()
)
