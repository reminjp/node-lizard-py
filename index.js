const path = require('path');
const child_process = require('child_process');

const path_to_execpy = __dirname + path.sep + 'exec.py';

const exec = function(method, args) {
	if (!Array.isArray(args)) {
		args = [];
	}
	let input = JSON.stringify({ method: method, args: args });
	let result = child_process.execFileSync('python', [path_to_execpy], {
		input: input,
	});
	return JSON.parse(result);
};

exports.exec = exec;

exports.analyzeFile = function(path) {
	return exec('analyze_file', [path]);
};

exports.analyzeSourceCode = function(name, code) {
	return exec('analyze_file.analyze_source_code', [name, code]);
};
