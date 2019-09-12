from lizard import lizard
import json
import sys


def dumps_default(o):
    if isinstance(o, lizard.FunctionInfo):
        return vars(o)
    raise TypeError(repr(o) + " is not JSON serializable")


options = json.load(sys.stdin, encoding='utf-8')

attribute = lizard
for i in options['method'].split('.'):
    attribute = getattr(attribute, i)

result = json.dumps(vars(attribute(*options['args'])), default=dumps_default)
print(result)
