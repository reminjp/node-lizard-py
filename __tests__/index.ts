import * as fs from 'fs';
import * as path from 'path';
import * as lizard from '../src';

describe('test', () => {
  const inputPath = path.resolve(__dirname, 'input.cpp');
  const outputPath = path.resolve(__dirname, 'output.json');

  const input = fs.readFileSync(inputPath, { encoding: 'utf-8' });
  const output = fs.readFileSync(outputPath, { encoding: 'utf-8' }).replace(/\{filename\}/g, inputPath);
  const outputObject = JSON.parse(output);

  test('analyzeFile', async done => {
    expect(await lizard.analyzeFile(inputPath)).toEqual(outputObject);
    done();
  });

  test('analyzeSourceCode', async done => {
    expect(await lizard.analyzeSourceCode(inputPath, input)).toEqual(outputObject);
    done();
  });
});
