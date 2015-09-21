define(['Zombify'], function (Zombify) {

    var zombify;

    describe('Zombify', function () {

        beforeEach(function () {

            zombify = new Zombify();

        });

        describe('Rule 1', function () {
            it("should replace a lower-case 'r' at the end of words with 'rh''", function () {
                expect(zombify.rule_1('My car was totalled.')).toBe('My carh was totalled.');
                expect(zombify.rule_1('That\'s really cool.')).not.toBe('That\'s rheally cool.');
            });
            it("should not effect other strings", function () {
                var no_transform = 'The quick brown fox jumps onto the lazy dog';
                expect(zombify.rule_1(no_transform)).not.toContain('rh');
                expect(zombify.rule_1(no_transform)).toBe(no_transform);
            });
            it("should throw an error if input is not a string", function () {
                expect(function (zombify) {zombify.rule_1();}).toThrowError();
                expect(function (zombify) {zombify.rule_1(1);}).toThrowError();
                expect(function (zombify) {zombify.rule_1({});}).toThrowError();
            });
        });

        describe('Rule 2', function () {
            it("should replace an 'a' or 'A' by itself will with a 'hra'", function () {
                expect(zombify.rule_2('That is a great story.')).toBe('That is hra great story.');
                expect(zombify.rule_2('A great tale.')).toBe('hra great tale.');
                expect(zombify.rule_2('That\'s really cool.')).not.toBe('That\'s rehrally cool.');
            });
            it("should not effect other strings", function () {
                var no_transform = 'The quick brown fox jumps onto the lazy dog';
                expect(zombify.rule_2(no_transform)).not.toContain('hra');
                expect(zombify.rule_2(no_transform)).toBe(no_transform);
            });
            it("should throw an error if input is not a string", function () {
                expect(function (zombify) {zombify.rule_2();}).toThrowError();
                expect(function (zombify) {zombify.rule_2(1);}).toThrowError();
                expect(function (zombify) {zombify.rule_2({});}).toThrowError();
            });
        });

        describe('Rule 3', function () {
            it("should capitalize the starts of sentences", function () {
                expect(zombify.rule_3('that is a great story.')).toBe('That is a great story.');
                expect(zombify.rule_3('a question? this is another sentence.')).toBe('A question? This is another sentence.');
                expect(zombify.rule_3('Already capitalized')).toBe('Already capitalized');
            });
            it("should use '.!?' to check for ends of sentences", function () {
                expect(zombify.rule_3('a scentence? yes')).toBe('A scentence? Yes');
                expect(zombify.rule_3('a scentence! yes')).toBe('A scentence! Yes');
                expect(zombify.rule_3('a scentence. yes')).toBe('A scentence. Yes');
            });
            it("should throw an error if input is not a string", function () {
                expect(function (zombify) {zombify.rule_3();}).toThrowError();
                expect(function (zombify) {zombify.rule_3(1);}).toThrowError();
                expect(function (zombify) {zombify.rule_3({});}).toThrowError();
            });
            it("should keep the same number of characters", function () {
                var length = 'a question? this is another sentence.'.length;
                expect(zombify.rule_3('a question? this is another sentence.').length).toEqual(length);
            });
        });

        describe('Rule 4', function () {
            it("should replace 'e' or 'E' with 'rr'", function () {
                expect(zombify.rule_4('that is a great story.')).toBe('that is a grrrat story.');
                expect(zombify.rule_4('a question? this is another sentence.')).toBe('a qurrstion? this is anothrrr srrntrrncrr.');
                expect(zombify.rule_4('Already capitalized')).toBe('Alrrrady capitalizrrd');
            });
            it("should remove all E's & e's", function () {
                var scentence = 'The quick brown fox jumps over the lazy dog';
                expect(zombify.rule_4(scentence)).not.toMatch(/e/g);
                expect(zombify.rule_4('eeeee')).not.toMatch(/e/g);
            });
            it("should throw an error if input is not a string", function () {
                expect(function (zombify) {zombify.rule_4();}).toThrowError();
                expect(function (zombify) {zombify.rule_4(1);}).toThrowError();
                expect(function (zombify) {zombify.rule_4({});}).toThrowError();
            });
        });

        describe('Rule 5', function () {
            it("should replace 'i' or 'I' with 'rrRr'", function () {
                expect(zombify.rule_5('i')).toBe('rrRr');
                expect(zombify.rule_5('Correct me if I\'m wrong')).toBe('Correct me rrRrf rrRr\'m wrong');
                expect(zombify.rule_5('I can hold a tiki')).toBe('rrRr can hold a trrRrkrrRr');
            });
            it("should not effect other strings", function () {
                var no_transform = 'The careful brown fox jumps over the lazy dog';
                expect(zombify.rule_5(no_transform)).not.toContain('rrRr');
                expect(zombify.rule_5(no_transform)).toBe(no_transform);
            });
            it("should throw an error if input is not a string", function () {
                expect(function (zombify) {zombify.rule_5();}).toThrowError();
                expect(function (zombify) {zombify.rule_5(1);}).toThrowError();
                expect(function (zombify) {zombify.rule_5({});}).toThrowError();
            });
        });

    });


});