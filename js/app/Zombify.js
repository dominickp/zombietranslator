define([], function() {

    var Zombify = function() {
        this.zombify();
        this.unzombify();
    };

    Zombify.prototype.zombify = function(english) {

        zombified = String(english);
        // 1. lower-case "r" at the end of words replaced with "rh".
        //if(typeof english == "string"){
        //    var rule1_result = english.replace(/\b\w+(r)\b/g, 'rh');
        //    console.log('result: '+rule1_result);
        //}

        console.log('zombify');
        // 2. an "a" or "A" by itself will be replaced with "hra".

        //// 8. "r" or "R' is replaced by "RR"
        //zombified = zombified.replace(/r/g, 'RR').replace(/R/g, 'RR');
        //// 4. "e" or "E" is replaced by "rr"
        //zombified = zombified.replace(/e/g, 'rr').replace(/E/g, 'rr');
        //// 5. "i" or "I" is replaced by "rrRr"
        //zombified = zombified.replace(/i/g, 'rrRr').replace(/I/g, 'rrRr');
        //// 6. "o" or "O" is replaced by "rrrRr"
        //zombified = zombified.replace(/o/g, 'rrrRr').replace(/O/g, 'rrrRr');
        //// 7. "u" or "U" is replaced by "rrrrRr"
        //zombified = zombified.replace(/u/g, 'rrrrRr').replace(/U/g, 'rrrrRr');

        // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
        //   ".!?", followed by a space, followed by a letter.)
        zombified = zombified.replace(/(?:^|(?:[.!?]\s))(\w+)/g, function (zombified) {
            console.log('matched: '+zombified.charAt(0));
            if(zombified.charAt(1) == ' '){
                console.log('uppercase: '+zombified.charAt(2));
                return zombified.charAt(0) + zombified.charAt(1) + zombified.charAt(2).toUpperCase() + zombified.substr(3);
            } else {
                return zombified.charAt(0).toUpperCase() + zombified.substr(1);
            }
        });

        //$('#zombie').val($('#english').val());

        return zombified;
    };

    Zombify.prototype.unzombify = function(zombie) {
        var english = zombie+'english';
        return english;
    };

    return Zombify;

});