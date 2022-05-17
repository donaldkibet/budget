/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");

module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${{
        process() {
          return "module.exports = {};";
        },
        getCacheKey() {
          // The output is always the same.
          return "cssTransform";
        },
      }};`,
    };
  },
};
