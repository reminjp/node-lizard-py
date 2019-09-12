import * as lizard from '../src';

const expectedResult = {
  filename: 'fizzbuzz.cpp',
  nloc: 15,
  function_list: [
    {
      cyclomatic_complexity: 6,
      nloc: 13,
      token_count: 89,
      name: 'main',
      long_name: 'main()',
      start_line: 3,
      end_line: 15,
      parameters: [],
      filename: 'fizzbuzz.cpp',
      top_nesting_level: 0,
      length: 13,
      fan_in: 0,
      fan_out: 0,
      general_fan_out: 0,
    },
  ],
  token_count: 96,
};

test('[WIP] test', async done => {
  const result = await lizard.analyzeSourceCode('foo.cpp', 'int foo(){}');
  expect(result).toEqual(expectedResult);
  done();
});
