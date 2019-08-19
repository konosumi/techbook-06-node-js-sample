
const log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  // ログに出力するエラーレベルは、本番環境と開発環境で環境毎に調整して使います
  // categories: { default: { appenders: ['cheese'], level: 'error' } }
  categories: { default: { appenders: ['cheese'], level: 'debug' } }
});

const logger = log4js.getLogger('cheese');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
