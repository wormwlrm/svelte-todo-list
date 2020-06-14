// svelte.config.js
const preprocess = require("svelte-preprocess");

module.exports = {
  preprocess: preprocess({
    scss: {
      // includePaths: ["src"],
    },
  }),
  // ...other svelte options
};
