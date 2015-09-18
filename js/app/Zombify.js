define([], function() {

    var Zombify = function() {
        this.zombify();
        this.unzombify();
    };

    Zombify.prototype.zombify = function(english) {

        // Cast to string
        zombified = String(english);

        //1. lower-case "r" at the end of words replaced with "rh".
        zombified = zombified.replace(/\b\w+(r)\b/g, function(match){
            return match + 'h';
        });
        // 8. "r" or "R' is replaced by "RR"
        zombified = zombified.replace(/R/g, 'RR').replace(/r/g, 'RR');
        // 2. an "a" or "A" by itself will be replaced with "hra".
        zombified = zombified.replace(/\sa\s/g, ' hra ').replace(/\sA\s/g, ' hra ');
        // 4. "e" or "E" is replaced by "rr"
        zombified = zombified.replace(/e/g, 'rr').replace(/E/g, 'rr');
        // 5. "i" or "I" is replaced by "rrRr"
        zombified = zombified.replace(/i/g, 'rrRr').replace(/I/g, 'rrRr');
        // 6. "o" or "O" is replaced by "rrrRr"
        zombified = zombified.replace(/o/g, 'rrrRr').replace(/O/g, 'rrrRr');
        // 7. "u" or "U" is replaced by "rrrrRr"
        zombified = zombified.replace(/u/g, 'rrrrRr').replace(/U/g, 'rrrrRr');
        // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
        //   ".!?", followed by a space, followed by a letter.)
        zombified = zombified.replace(/(?:^|(?:[.!?]\s))(\w+)/g, function (match) {
            if(match.charAt(1) == ' '){
                return match.charAt(0) + match.charAt(1) + match.charAt(2).toUpperCase() + match.substr(3);
            } else {
                return match.charAt(0).toUpperCase() + match.substr(1);
            }
        });

        return zombified;
    };

    Zombify.prototype.unzombify = function(zombie) {
        var english = zombie+'english';
        return english;
    };

    return Zombify;

});