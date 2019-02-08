var path = request('path');

module.exports = {
    entry: "./public/scripts/HelloWorld.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
};