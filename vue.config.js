const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

// Generate pages object
const pagesObj = {};

const chromeName = ["popup", "options", "content-script"];

chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/index.js`,
    template: "public/index.html",
    filename: `${name}.html`
  };
});
let commonPlugins = [
  { from: 'src/content-script/cs-init.js', to: 'content-script/cs-init.js' },
  { from: 'src/content-script/content-script.css', to: 'content-script/content-script.css' },
  {
    from: 'src/manifest.json',
    to: 'manifest.json',
    transform: content => {
      const jsonContent = JSON.parse(content);
      // jsonContent.version = version;

      if (process.env.NODE_ENV !== "production") {
        jsonContent['content_security_policy'] = "script-src 'self' 'unsafe-eval'; object-src 'self'";
      }

      return JSON.stringify(jsonContent, null, 2);
    },
  }
]
module.exports = {
  pages: pagesObj,
  configureWebpack: {
    plugins: [CopyWebpackPlugin(commonPlugins)]
  }
};
