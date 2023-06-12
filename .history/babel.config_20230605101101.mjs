
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/transform-runtime', ['module-extension', { mjs: 'js' }]],
  sourceMaps: false,
  retainLines: false,
  minified: true,
};