var express = require('express');
var db = require('../db');
var auth = require('../utils/authentication');

function list (req, res, next) {
    res.send(db.users());
}

function show (req, res, next) {
    res.send(db.getUser(req.params.users_id));
}

function update (req, res, next) {
    var result = db.setUser(req.body.user);
    res.send(result);
}

function create (req, res, next) {
    var result = db.setUser(req.body.user);
    res.send(result);
}

module.exports = {
    before: auth,
    list: list,
    show: show,
    update: update,
    create: create
};
