var express = require('express');
var db = require('../db');

function list (req, res, next) {
    res.send(db.users);
}

function show (req, res, next) {
    console.log(req.params.users_id);
    res.send(db.get(req.params.users_id));
}

function update (req, res, next) {
    var result = db.set(req.body.user);
    res.send(result);
}

function create (req, res, next) {
    var result = db.set(req.body.user);
    res.send(result);
}

module.exports = {
    list: list,
    show: show,
    update: update,
    create: create
};
