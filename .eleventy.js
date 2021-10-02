module.exports = function (eleventyConfig) {
   eleventyConfig.addPassthroughCopy("static");

   eleventyConfig.setBrowserSyncConfig({
      files: [
         "**/*.njk",
         "**/*.md",
         "_site/**/*.css",
         "_site/**/*.js",
         // "!_site/**",
      ],
   });

   return {
      dir: { input: "src", output: "_site" },
   };
};
