// postcss.config.js
module.exports = {
   plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
      require("postcss-extend"),
   ],
};
