# Lizard wrapper

A Node.js wrapper for [Lizard](https://github.com/terryyin/lizard), a code complexity analyser.

## Requirement

* Node.js
* Python
* [Lizard](https://github.com/terryyin/lizard)

## Usage

### Sample code

```js
const lizard = require('lizard-wrapper');

var result = lizard.analyzeFile('fizzbuzz.cpp');
var s = JSON.stringify(result);
console.log(s);
```

You can also use source code string instead of file.

```js
var result = lizard.analyzeSourceCode('foo.cpp', 'int foo(){}');
```

### Sample output

```json
{"filename":"fizzbuzz.cpp","nloc":15,"function_list":[{"cyclomatic_complexity":6,"nloc":13,"token_co
unt":89,"name":"main","long_name":"main()","start_line":3,"end_line":15,"parameters":[],"filename":"
fizzbuzz.cpp","top_nesting_level":0,"length":13,"fan_in":0,"fan_out":0,"general_fan_out":0}],"token_
count":96}
```

## Licence

MIT License
