'use strict';

/**
 * order controller
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order.order');