define(['UnZombify'], function (UnZombify) {

    var unzombify;

    describe('UnZombify', function () {

        beforeEach(function () {

            unzombify = new UnZombify();

        });


        it("should replace a 'rh' at the end of words with 'r''", function () {
            expect(unzombify.unzombify('My carh.')).toBe('My car.');
            expect(unzombify.unzombify('Hardy har har har')).not.toMatch(/rh/g);
        });

        it("should replace a 'hra' with 'a''", function () {
            expect(unzombify.unzombify('My chrar.')).toBe('My car.');
            expect(unzombify.unzombify('Hardy har har har')).not.toMatch(/hra/g);
        });

        it("should capitalize the starts of sentences", function () {
            var sentence = 'Hr thrrRRrr hrrrRrw\'s rrRrt grrrRrrrRrng?';
            var sentence2 = 'prr grrrrRrrrss rrRr chran';
            expect(unzombify.unzombify(sentence).charAt(0)).toBe(sentence.charAt(0).toUpperCase());
            expect(unzombify.unzombify(sentence2).charAt(0)).toBe(sentence2.charAt(0).toUpperCase());
        });

    });
});