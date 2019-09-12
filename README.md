# Lizard on npm

[![Latest NPM release][npm-badge]][npm-badge-url]
[![Install Size][npm-size-badge]][npm-size-badge-url]
[![License][license-badge]][license-badge-url]

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

[![License][license-badge]][license-badge-url]

[npm-badge]: https://img.shields.io/npm/v/lizard-py.svg
[npm-badge-url]: https://www.npmjs.com/package/lizard-py
[npm-size-badge]: https://packagephobia.now.sh/badge?p=lizard-py
[npm-size-badge-url]: https://packagephobia.now.sh/result?p=lizard-py
[license-badge]: https://img.shields.io/npm/l/lizard-py.svg
[license-badge-url]: ./LICENSE
