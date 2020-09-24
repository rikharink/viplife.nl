const tailwindcss = require("tailwindcss");
const presetEnv = require("postcss-preset-env");
module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    presetEnv({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    }),
    require("postcss-import"),
  ],
};
