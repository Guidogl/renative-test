const config = require('../metro.config');

const sourceExts = ['webos.tv.js', 'web.tv.js', 'tv.js', 'webos.js', 'tv.web.js', 'web.js', 'mjs', 'js', 'tsx', 'ts'];
config.resolver.sourceExts = sourceExts;
module.exports = config;
