var orm = require("../config/orm.js");

var burgers = {
all: function (callback){
	orm.selectAll("burgers", function(res){
		callback(res);
	});
},

insert: function(name, callback){
	console.log('inside burgers.js; insert')
	orm.insertOne(name, function(res){
		callback(res);
	});
},

update: function(condition, callback){
	orm.updateOne(condition, function(res){
		callback(res);
	})
}
}


module.exports = burgers;