const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@containers": "src/containers",
    "@hooks": "src/hooks",
    "@styles": "src/styles",
    "@utils": "src/utils",
  })(config);

  return config;
};
