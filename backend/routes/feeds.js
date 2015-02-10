var express = require('express');
var db = require('../db');
var auth = require('../utils/authentication');

function list (req, res, next) {
    res.send(db.feeds());
}

function show (req, res, next) {
    res.send(db.getFeed(req.params.feeds_id));
}

module.exports = {
    before: auth,
    list: list,
    show: show
};
