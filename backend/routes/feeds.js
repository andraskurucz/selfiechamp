var express = require('express');
var db = require('../db');

function list (req, res, next) {
    res.send(db.feeds());
}

function show (req, res, next) {
    res.send(db.getFeed(req.params.feeds_id));
}

module.exports = {
    list: list,
    show: show
};
