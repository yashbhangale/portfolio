
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("E:\\terminal-portfolio\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("E:\\terminal-portfolio\\src\\pages\\404.js")),
  "component---src-pages-contact-js": preferDefault(require("E:\\terminal-portfolio\\src\\pages\\contact.js")),
  "component---src-pages-index-js": preferDefault(require("E:\\terminal-portfolio\\src\\pages\\index.js")),
  "component---src-pages-success-js": preferDefault(require("E:\\terminal-portfolio\\src\\pages\\success.js")),
  "component---src-templates-page-template-js": preferDefault(require("E:\\terminal-portfolio\\src\\templates\\pageTemplate.js"))
}

