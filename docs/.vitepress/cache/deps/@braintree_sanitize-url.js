import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/@braintree/sanitize-url/index.js
var require_sanitize_url = __commonJS({
  "node_modules/@braintree/sanitize-url/index.js"(exports, module) {
    var invalidPrototcolRegex = /^(%20|\s)*(javascript|data)/im;
    var ctrlCharactersRegex = /[^\x20-\x7E]/gmi;
    var urlSchemeRegex = /^([^:]+):/gm;
    var relativeFirstCharacters = [".", "/"];
    function isRelativeUrl(url) {
      return relativeFirstCharacters.indexOf(url[0]) > -1;
    }
    function sanitizeUrl(url) {
      if (!url) {
        return "about:blank";
      }
      var urlScheme, urlSchemeParseResults;
      var sanitizedUrl = url.replace(ctrlCharactersRegex, "").trim();
      if (isRelativeUrl(sanitizedUrl)) {
        return sanitizedUrl;
      }
      urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
      if (!urlSchemeParseResults) {
        return "about:blank";
      }
      urlScheme = urlSchemeParseResults[0];
      if (invalidPrototcolRegex.test(urlScheme)) {
        return "about:blank";
      }
      return sanitizedUrl;
    }
    module.exports = {
      sanitizeUrl
    };
  }
});
export default require_sanitize_url();
//# sourceMappingURL=@braintree_sanitize-url.js.map
