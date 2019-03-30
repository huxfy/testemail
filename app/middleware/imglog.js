'use strict';
const debug = require('debug')('test-email:test');

module.exports = options => {
  return async function imglog(ctx, next) {

    debug(`请求来了，访问链接 ${ctx.url}`);
    debug('-------------------------headers----------------');
    debug('%O', ctx.request.headers);
    debug('-------------------------ip----------------');
    debug('%O', ctx.ip);

    await next();
  };
};
