/**
 * Define routes.
 * models, controllers and services are accessible from here. e.g controllers.user.getUser. Other
 * globally accessible modules are _ (lodash), async, request
 */

var api = require('../../api')
var express	= require('express');  

// define your routers
var rootRouter = express.Router();

// define route
rootRouter.get('/', api.helper.static('index.html'));
// rootRouter.get('/user', controllers.user.get)

// exports routers
module.exports.root = rootRouter;