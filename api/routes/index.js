'use strict';

const actorRoute = require('./actorRoutes'),
      itemRoute = require('./itemRoutes'),
      orderRoute = require('./orderRoutes');

function init(app) {
    actorRoute(app);
    itemRoute(app);
    orderRoute(app);
}

module.exports = {
    init: init
};