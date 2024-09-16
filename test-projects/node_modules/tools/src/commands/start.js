const chalk = require('chalk');

module.export = function start(config) {
  console.log(chalk.bgCyanBright('  Starting the app  '));
  console.log(chalk.gray('Received configuration in start -'), config);
}