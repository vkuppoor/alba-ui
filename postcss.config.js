// postcss.config.js
module.exports = {
    syntax: "postcss-scss",
    parser: require('postcss-comment'),
    plugins: {
        "postcss-simple-vars": {},
        "postcss-nested": {},
        "postcss-import": {},
        autoprefixer: {},
    },
};
