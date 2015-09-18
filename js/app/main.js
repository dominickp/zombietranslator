require(['jquery'], function($) {

    $(document).ready(function () {
        $('#zombie-to-english-btn').click(function (event) {
            unzombifyView();
            return false;
        });

        $('#english-to-zombie-btn').click(function (event) {
            zombifyView();
            return false;
        });

        function unzombifyView() {
            $('#english').val(zombify($('#zombie').val()));
            console.log('zombifyView');
        }

        function zombifyView() {
            $('#zombie').val(unzombify($('#english').val()));
        }

        function zombify(english) {
            // 1. lower-case "r" at the end of words replaced with "rh".
            // 2. an "a" or "A" by itself will be replaced with "hra".
            // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
            //   ".!?", followed by a space, followed by a letter.)
            // 4. "e" or "E" is replaced by "rr"
            // 5. "i" or "I" is replaced by "rrRr"
            // 6. "o" or "O" is replaced by "rrrRr"
            // 7. "u" or "U" is replaced by "rrrrRr"
            // 8. "r" or "R' is replaced by "RR"
            //$('#zombie').val($('#english').val());
            var zombie = english+'zombie';
            return zombie;
        }

        function unzombify(zombie) {

            var english = zombie+'english';
            return english;
        }

        $('#english').on("keyup", zombifyView);
        $('#zombie').on("keyup", unzombifyView);

    });

});