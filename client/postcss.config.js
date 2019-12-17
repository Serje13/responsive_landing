const path = require("path");

module.exports = {
    plugins: [
        require("postcss-import")({
            path: [path.resolve(__dirname, "./index.css")]
        }),
        require("postcss-mixins"),
        require("postcss-nested"),
        require("postcss-extend"),
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
            browsers: [
                ">1%",
                "last 2 versions",
                "Firefox ESR",
                "not ie < 11",
            ],
            flexbox: "no-2009",
        }),
    ]
};