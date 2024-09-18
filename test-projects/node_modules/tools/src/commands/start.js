const logger = require('../logger')('commands:start');

module.export = function start(config) {
  logger.highlight('  Starting the app  ');
  logger.debug('Received configuration', config);
}