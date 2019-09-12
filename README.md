# Lizard on npm

A Node.js wrapper for [Lizard](https://github.com/terryyin/lizard), a code complexity analyser.

## Requirements

- Node.js
- Python

## Usage

```
yarn add lizard-py
```

### Sample code

```ts
import * as lizard from 'lizard-py';

const result = lizard.analyzeFile('fizzbuzz.cpp');
const s = JSON.stringify(result);
console.log(s);
```

You can also use source code string instead of file.

```ts
const result = lizard.analyzeSourceCode('foo.cpp', 'int foo(){}');
```

[Sample input and output](./__tests__)

## Licence

MIT License
