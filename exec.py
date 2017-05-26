import lizard
import json
import sys


def dumps_default(o):
    if isinstance(o, lizard.FunctionInfo):
        return vars(o)
    raise TypeError(repr(o) + " is not JSON serializable")


options = json.loads(''.join(sys.stdin.readlines()))
method = getattr(lizard, options['method'])
result = json.dumps(vars(method(*options['args'])), default=dumps_default)
print(result)
