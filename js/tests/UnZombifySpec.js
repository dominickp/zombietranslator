define(['UnZombify'], function (UnZombify) {

    var unzombify;

    describe('UnZombify', function () {

        beforeEach(function () {

            unzombify = new UnZombify();

        });


        it("should replace a 'rh' at the end of words with 'r'", function () {
            expect(unzombify.unzombify('My carh.')).toBe('My car.');
            expect(unzombify.unzombify('Hardy har har har')).not.toMatch(/rh/g);
        });

        it("should replace a 'hra' with 'a'", function () {
            expect(unzombify.unzombify('My chrar.')).toBe('My car.');
            expect(unzombify.unzombify('Hardy har har har')).not.toMatch(/hra/g);
        });

        it("should capitalize the starts of sentences", function () {
            var sentence = 'Hr thrrRRrr hrrrRrw\'s rrRrt grrrRrrrRrng?';
            var sentence2 = 'prr grrrrRrrrss rrRr chran';
            expect(unzombify.unzombify(sentence).charAt(0)).toBe(sentence.charAt(0).toUpperCase());
            expect(unzombify.unzombify(sentence2).charAt(0)).toBe(sentence2.charAt(0).toUpperCase());
        });

        it("should replace 'rr' with 'e'", function () {
            expect(unzombify.unzombify('HrrllrrrRr.')).toBe('Hello.');
            expect(unzombify.unzombify('HrrllrrrRr hrrrRrws rrRrt grrrRrrrRrng?')).not.toMatch(/rr/g);
        });

        it("should replace 'rrRr' with 'i'", function () {
            expect(unzombify.unzombify('My rrRrcrr cRRrrhram.')).toBe('My ice cream.');
            expect(unzombify.unzombify('SrrrrRrRRrr thrrRrng thrrn')).not.toMatch(/rrRr/g);
        });

        it("should replace 'rrrRr' with 'o'", function () {
            expect(unzombify.unzombify('HrrrRrld mrr clrrrRrsrr.')).toBe('Hold me close.');
            expect(unzombify.unzombify('RrrRrff rrrRrf mrr nrrrRrw')).not.toMatch(/rrrRr/g);
        });

        it("should replace 'rrrrRr' with 'u'", function () {
            expect(unzombify.unzombify('HrrrrRrng rrrrRrp rrrRrn rrRrt.')).toBe('Hung up on it.');
            expect(unzombify.unzombify('LrrrrRrmbrrrh jhrack')).not.toMatch(/rrrrRr/g);
        });

        it("should replace 'RR' with 'r'", function () {
            expect(unzombify.unzombify('SrrrRr crrrRrRRny.')).toBe('So corny.');
            expect(unzombify.unzombify('Thhrat rrRrs hrrrRrRRRRrrRrblrr, hrrrrRrh?')).not.toMatch(/RR/g);
        });

        it("should replace '☠' with ':)'", function () {
            expect(unzombify.unzombify('Hraww, srrrRr crrrrRrtrr ☠')).toBe('aww, so cute :)');
            expect(unzombify.unzombify('VrrRRy swrrrrt ☠')).not.toMatch(/☠/g);
        });

        it("should replace 'Ok' with 'ECHHh'", function () {
            expect(unzombify.unzombify('Hmm ECHHh rrRr grrt rrRrt')).toBe('Hmm ok i get it');
            expect(unzombify.unzombify('Mhraybrr rrRr drrrRrn\'t rrrrRrndrrRRsthrand, ECHHh?')).not.toMatch(/ECHHh/g);
        });

    });
});