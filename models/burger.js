
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(columes, values, cb) {
        orm.create("burgers", columes, values, function(res) {
            cb(res);
        });
    },
    update: function(columesValues, con, cb) {
        orm.update("burgers", columesValues, con, function(res) {
            cb(res);
        });
    }
};

 
module.exports = burger;