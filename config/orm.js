var connection = require("../config/connection.js");

function questionmark(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function sql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}

var orm = {
    all: function(input, cb) {
        var queryString = "SELECT * FROM " + input + ";";
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    create: function(table, columes, values, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += columes.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionmark(values.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, values, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    update: function(table, colVal, con, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += sql(colVal);
        queryString += " WHERE ";
        queryString += con;

        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};


module.exports = orm;