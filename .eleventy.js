const Nunjucks = require("nunjucks");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
   eleventyConfig.addPlugin(eleventyNavigationPlugin);

   let nunjucksEnvironment = new Nunjucks.Environment(
      new Nunjucks.FileSystemLoader("_includes")
   );

   eleventyConfig.setLibrary("njk", nunjucksEnvironment);

   const markdownIt = require("markdown-it");

   // create a new markdown-it instance with the plugin
   const markdownItAnchor = require("markdown-it-anchor");
   const markdownLib = markdownIt({ html: true }).use(markdownItAnchor);

   // replace the default markdown-it instance
   eleventyConfig.setLibrary("md", markdownLib);

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

   eleventyConfig.addNunjucksFilter("rewriteBasename", (slug) => {
      slug = slug.replace("/README.md", "");

      return slug.toLowerCase();
   });

   eleventyConfig.addNunjucksFilter("generateNav", (collections) => {
      // Sort by alphabetical
      collections.sort((a, b) => a.url.localeCompare(b.url));

      // let navItems = {};

      collections.forEach((collection) => {
         const dirname = collection.template.parsed.dirname
            .replace("./", "/")
            .toLowerCase();
         const basename = collection.template.parsed.basename.toLowerCase();
         collection.url = collection.url.replace("README/", "");

         collection.data.eleventyNavigation = {};

         if (dirname.split("/").length > 2) {
            collection.data.eleventyNavigation.url = collection.url;

            if (basename === "readme.md") {
               let lastIndex = dirname.lastIndexOf("/");

               collection.data.eleventyNavigation.parent = dirname
                  .substring(0, lastIndex)
                  .replace("/", " ")
                  .trim();
               collection.data.eleventyNavigation.key = dirname
                  .replace("/", " ")
                  .trim();
            } else {
               collection.data.eleventyNavigation.parent = dirname
                  .replace("/", " ")
                  .trim();
               collection.data.eleventyNavigation.key =
                  dirname.replace("/", " ").trim() + " " + basename;
               collection.data.eleventyNavigation.title = basename;
            }
         } else if (dirname.split("/").length > 1) {
            collection.data.eleventyNavigation.url = collection.url;

            if (basename === "readme.md") {
               // collection.data.eleventyNavigation.parent = "Home";
               collection.data.eleventyNavigation.key = dirname
                  .replace("/", " ")
                  .trim();
            } else {
               collection.data.eleventyNavigation.parent = dirname
                  .replace("/", " ")
                  .trim();
               collection.data.eleventyNavigation.key =
                  dirname.replace("/", " ").trim() + " " + basename;
               collection.data.eleventyNavigation.title = basename;
            }
         }
      });

      // console.log(navItems);
      return collections;
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
