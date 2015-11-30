var fs = require('fs');
var chai = require('chai');

var thoughtLeadering = require('./index');
var thoughtJson = fs.readFileSync('./thoughts.json');
var thoughts = JSON.parse(thoughtJson);

describe('thought leadering', function() {
	it('Should return a random string from the thoughts array', function() {
		var testThought = thoughtLeadering.getThought();

		chai.assert.notEqual(thoughts.indexOf(testThought), -1);
	});

	it('Should return all thoughts', function() {
		var allThoughts = thoughtLeadering.getAllThoughts();

		chai.assert.equal(thoughts.length, allThoughts.length);
	});
});
