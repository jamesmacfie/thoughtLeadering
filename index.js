var fs = require('fs');

module.exports = {
	getThought: function() {
		var file = fs.readFileSync('./thoughts.json');
		var thoughtArray = JSON.parse(file);

		return thoughtArray[Math.floor(Math.random() * thoughtArray.length)];
	},
	getAllThoughts: function() {
		var file = fs.readFileSync('./thoughts.json');
		return JSON.parse(file);
	}
}
