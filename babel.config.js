require('ts-node/register');
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: ['expo-router/babel'],
  };
};
