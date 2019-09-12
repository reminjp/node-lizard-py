import * as path from 'path';
import * as child_process from 'child_process';

const pathToExecPy = path.resolve(__dirname, '..', 'res', 'exec.py');

async function exec(method, args = []) {
  const object = { method, args };
  const input = JSON.stringify(object);
  const result = child_process.execFileSync('python', [pathToExecPy], { input, encoding: 'utf8' });
  return JSON.parse(result);
}

export async function analyzeFile(path: string) {
  return exec('analyze_file', [path]);
}

export async function analyzeSourceCode(name: string, code: string) {
  return exec('analyze_file.analyze_source_code', [name, code]);
}
