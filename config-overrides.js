const path = require("path");
const fs = require("fs");
const { getLoader, loaderNameMatches } = require("react-app-rewired");

const rewireBabelLoader = require("react-app-rewire-babel-loader");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = function override(config, env) {
  // console.log(JSON.stringify(config, null, 2));

  const vectorIcons = resolveApp("node_modules/react-native-vector-icons");
  const elements = resolveApp("node_modules/react-native-elements");

  // const fileLoader = getLoader(config.module.rules, rule =>
  //   loaderNameMatches(rule, "file-loader")
  // );
  // if (!fileLoader) throw new Error("can't find file-loader");
  // if (!fileLoader.include) fileLoader.include = [vectorIcons];
  // else fileLoader.include.push(vectorIcons);

  // transpile libraries
  config = rewireBabelLoader.include(config, elements, vectorIcons);

  return config;
};
