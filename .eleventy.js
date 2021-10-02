const Nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
   let nunjucksEnvironment = new Nunjucks.Environment(
      new Nunjucks.FileSystemLoader("_includes")
   );

   eleventyConfig.setLibrary("njk", nunjucksEnvironment);

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

   // Add Nunjucks filter
   eleventyConfig.addNunjucksFilter("rewriteSlug", (slug) => {
      slug = slug.replace("/README", "");

      return slug.toLowerCase();
   });

   // Re-write exported path
   eleventyConfig.addCollection("pages", (collection) => {
      return collection.getAllSorted().map((item) => {
         item.outputPath = item.outputPath.replace(
            "README/index.html",
            "index.html"
         );
         item.outputPath = item.outputPath.toLowerCase();
      });
   });

   return {
      templateFormats: ["njk", "html", "md"],
      htmlTemplateEngine: "nunjucks",
      dir: {
         input: "./",
         includes: "_includes",
         layouts: "_includes/layouts",
         output: "_site",
      },
   };
};
