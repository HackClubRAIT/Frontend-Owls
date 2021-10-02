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

   eleventyConfig.addCollection("pages", (collection) => {
      return collection.getAllSorted().map((item) => {
         console.log("Output Path :", item.outputPath);

         item.outputPath = item.outputPath.replace(
            "README/index.html",
            "index.html"
         );
         item.outputPath = item.outputPath.toLowerCase();
      });
   });

   return {
      dir: {
         input: "./",
         includes: "_includes",
         layouts: "_includes/layouts",
         output: "_site",
      },
   };
};
