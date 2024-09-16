const chalk = require('chalk');
const pkgUp = require('pkg-up');

module.exports = function getConfig() {
  const pkgPath = pkgUp.sync({cwd: process.cwd()});
  const pkg = require(pkgPath);
  if (pkg.tool) {
    console.log('Found configuration', pkg.tool);
    return pkg.tool;
  } else {
    console.log(chalk.yellow('Could not find configuration, using default'));
    return { port: 1234 };
  }
}