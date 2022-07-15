module.exports = {
   mode: "jit",
   purge: [
      "./_site/**/*.html",
      "./**/*.njk",
      "./**/*.md",
      "./assets/**/*.js",
      "!node_modules",
      "!.github",
   ],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily: {
         display: ["Signika Negative", "sans-serif"],
         body: ["Signika Negative", "sans-serif"],
         heading: ["Signika Negative", "sans-serif"],
      },
      screens: {
         xs: "480px",
         xxs: "360px",
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1280px",
         "2xl": "1536px",
      },
      extend: {
         padding: {
            "16/9": "56.25%",
            "9/16": "177.77%",
            "4/3": "75%",
            "3/4": "120%",
            "1/1": "100%",
         },
         outline: {
            white: ["2px dotted #FFF", "3px"],
            white: ["2px dotted #000", "3px"],
         },
         colors: {
            brown: {
               100: "#ffedd0",
               200: "#e6d0b3",
               300: "#c8b397", // main
               400: "#ab977c",
               500: "#8f7c62",
               600: "#746249",
               700: "#594931",
               800: "#40311b",
               900: "#291c00",
            },
            gray: {
               100: "#f5f5f5",
               200: "#d7d7d7",
               300: "#bababa",
               400: "#9e9e9e",
               500: "#838383",
               600: "#686868",
               700: "#4f4f4f",
               800: "#373737",
               900: "#212121",
            },
            orange: {
               100: "#ffa25d",
               200: "#ff8442",
               300: "#ff6625",
               400: "#f74700",
               500: "#d42300",
               600: "#b20000",
               700: "#920000",
               800: "#730000",
               900: "#580000",
            },
         },
      },
   },
   variants: {
      extend: {
         scale: ["group-hover", "group-focus"],
         translate: ["group-hover", "group-focus"],
         outline: ["group-focus"],
         backgroundColor: ["group-focus", "group-hover"],
         backgroundOpacity: ["group-focus", "group-hover"],
      },
   },
   plugins: [require("@tailwindcss/typography")],
};
