var child_process = require('child_process');

var exec = function (method, args) {
	if (!Array.isArray(args)) {
		args = [];
	}
	var input = JSON.stringify({ method: method, args: args });
	var result = child_process.execFileSync('python', ['exec.py'], { input: input });
	return JSON.parse(result);
}

exports.exec = exec;

exports.analyzeFile = function (path) {
	return exec('analyze_file', [path]);
}

exports.analyzeSourceCode = function (name, code) {
	return exec('analyze_file.analyze_source_code', [name, code]);
}

