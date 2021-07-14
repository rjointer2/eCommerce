const withImages = require('next-images');
const withVdeos = require('next-videos');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withImages, withVdeos]);