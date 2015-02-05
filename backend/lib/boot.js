/**
 * Module dependencies.
 */

var express = require('express');
var fs = require('fs');

module.exports = function(parent, options){
    var verbose = options.verbose;
    fs.readdirSync(__dirname + '/../routes').forEach(function(name){
        name = name.split('.')[0];
        verbose && console.log('\n   %s:', name);
        var obj = require('./../routes/' + name);
        var name = obj.name || name;
        var prefix = obj.prefix || '';
        var router = express.Router();
        var handler;
        var method;
        var path;

        // generate routes based
        // on the exported methods
        for (var key in obj) {
            // "reserved" exports
            // if (~['name', 'prefix', 'engine', 'before'].indexOf(key)) continue;
            // route exports
            switch (key) {
                case 'show':
                    method = 'get';
                    path = '/' + name + '/:' + name + '_id';
                    break;
                case 'list':
                    method = 'get';
                    path = '/' + name + '/list';
                    break;
                case 'edit':
                    method = 'get';
                    path = '/' + name + '/:' + name + '_id/edit';
                    break;
                case 'update':
                    method = 'post';
                    path = '/' + name + '/:' + name + '_id';
                    break;
                case 'create':
                    method = 'post';
                    path = '/' + name + '/create';
                    break;
                case 'index':
                    method = 'get';
                    path = '/';
                    break;
                default:
                    /* istanbul ignore next */
                    throw new Error('unrecognized route: ' + name + '.' + key);
            }

            // setup
            handler = obj[key];
            path = prefix + path;

            // before middleware support
            if (obj.before) {
                router[method](path, obj.before, handler);
                verbose && console.log('     %s %s -> before -> %s', method.toUpperCase(), path, key);
            } else {
                router[method](path, obj[key]);
                verbose && console.log('     %s %s -> %s', method.toUpperCase(), path, key);
            }
        }

        // mount the app
        parent.use(router);
    });
};