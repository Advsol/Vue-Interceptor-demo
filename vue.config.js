// vue.config.js
const location = require('./package.json').build_Destination;
const packagename = require('./package.json').name;
module.exports = {
    // options...
    outputDir: location,
    assetsDir: "./",
    publicPath: "~/iPartSource/" + packagename+ ".zip/"
}
