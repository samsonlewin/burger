var connection = require("./connection.js");

var orm = {
selectAll: function(tableInput,callback){
	var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
},

insertOne: function(name,callback){
	var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,false)"
	connection.query(queryString,name, function(err,result){
		if (err) {
			throw err;
		}
		callback(result);
	});
},
updateOne: function(condition, callback){
	var queryString = "UPDATE burgers SET devoured = true WHERE id = ?"
	connection.query(queryString,condition, function(err, results){
		if (err) {throw err;}
		callback(results);
	})
},

};

module.exports = orm;