const withImages = require('next-images');
const withVdeos = require('next-videos');
const withPlugins = require('next-compose-plugins');

// we have to use next@10.2.3 to use the packages above with images in non 
// public file

module.exports = withPlugins([withImages, withVdeos]);