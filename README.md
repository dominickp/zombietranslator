# Zombie Translator

A Javascript app which translates from English to zombie. Makes use of Karma, Jasmin, and RequireJS.


## Translator
### Default Translation Rules
- lower-case "r" at the end of words replaced with "rh".
- an "a" or "A" is replaced with "hra".Edited to be easier. 
- the starts of sentences are capitalized (the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.)
- "e" or "E" is replaced by "rr"
- "i" or "I" is replaced by "rrRr"
- "o" or "O" is replaced by "rrrRr"
- "u" or "U" is replaced by "rrrrRr"
- "r" or "R" is replaced by "RR"

### Custom Translation Rules
- ':)' is replaced with '☠' (skull and cross bones)
- 'Ok', 'OK', and 'ok' are replaced with 'ECHHh'

## Unzombify
I attempted an unzombify and implimented some tests.

## Testing
I wrote most of my translation logic before the assignment was updated, so I was under the assumption that each rule needed to be its own function and modular enough to test separately. My tests were initially geared at each of those specific functions. After the assignment was updated, I made some attempts to get some test coverage for the individual rules from the result of the main translation function.

In Zombify, there were 46 tests with 134 expects. Tests can be found in /js/tests/ZombifySpec.js

In my UnZombify attempt, there were 10 tests with about 2 expects each. These tests can be found in /js/tests/UnZombifySpec.js

### Individual Rule Function Tests

Within each rule function, I implemented at least 3 expects, most using a toBe(), a not.toMatch(), and a toThrowError().

**Rule 1**
7 expects using toBe, not.toBe, not.toContain, and toThrowError.

**Rule 2**
8 expects using toBe, not.toBe, not.toContain, and toThrowError.

**Rule 3**
8 expects using toBe, not.toBe, not.toContain, toThrowError, and toEqual.

**Rule 4**
10 expects using toBe, not.toBe, not.toMatch, and toThrowError.

**Rule 5**
8 expects using toBe, not.toBe, not.toContain, and toThrowError.

**Rule 6**
10 expects using toBe, not.toBe, not.toMatch, and toThrowError.

**Rule 7**
10 expects using toBe, not.toBe, not.toMatch, and toThrowError.

**Rule 8**
8 expects using toBe, not.toBe, not.toMatch, and toThrowError.

**Rule 9**
7 expects using toBe, not.toBe, not.toMatch, and toThrowError.

**Rule 10**
6 expects using toBe, not.toBe, not.toMatch, and toThrowError.

### Main Translation Function Tests

I did some basic checks on the method to ensure it would only return strings, using toBeNull, toBeDefined, and toBeGreaterThan. I included the example translations as toBe test. I also ensured that each individual rule function was called in the main translation function by use of a spy and toHaveBeenCalled.

I then included some (somewhat redundant) tests for each rule, as that's what I gathered from the updated assignment that you wanted in the first place.