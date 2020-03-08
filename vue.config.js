// vue.config.js
const location = require('./package.json').destinationLocation;
module.exports = {
    // options...
    outputDir:location,
    assetsDir: "./",
    publicPath: "~/iPartSource/axiossampleapp.zip/"
}
