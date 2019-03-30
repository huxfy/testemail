'use strict';
const debug = require('debug')('test-email:test');

module.exports = options => {
  return async function imglog(ctx, next) {

    debug('请求来了');
    debug('-------------------------this.ctx----------------');
    debug('%O', ctx);
    debug('-------------------------this.ctx.request----------------');
    debug('%O', ctx.request);
    debug('-------------------------this.ctx.headers----------------');
    debug('%O', ctx.headers);
    debug('%O', ctx.ip);

    await next();
  };
};
