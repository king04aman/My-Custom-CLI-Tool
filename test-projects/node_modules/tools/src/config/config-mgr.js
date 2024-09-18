const logger = require('../logger')('config:mgr');
const { cosmiconfigSync } = require('cosmiconfig');
const schema = require('./schema.json');
const betterAjvErrors = require('better-ajv-errors');
const Ajv = require('ajv').default;
const ajv = new Ajv({ jsonPointers: true });
const configLoader = cosmiconfigSync('tool');

module.exports = function getConfig() {

  const result = configLoader.search(process.cwd());

  if (!result) {
    logger.warning('Could not find configuration, using default');
    return { port: 1234 };

  } else {

    const isValid = ajv.validate(schema, result.config);

    if (!isValid) {
      logger.warning('Invalid configuration was supplied');
      console.log();
      console.log(betterAjvErrors(schema, result.config, ajv.errors));
      process.exit(1);
    }

    logger.debug('Found configuration', result.config);
    return result.config;
  }
}