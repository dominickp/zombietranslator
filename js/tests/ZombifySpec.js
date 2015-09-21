define(['Zombify'], function (Zombify) {

    var zombify;

    describe('Zombify', function () {

        beforeEach(function () {

            zombify = new Zombify();

        });

        var sentence = 'The quick brown fox jumps over the lazy dog.';
        it("should return a some non-empty string", function () {
            expect(zombify.zombify(sentence)).not.toBeNull();
            expect(zombify.zombify(sentence)).toBeDefined();
            expect(zombify.zombify(sentence).length).toBeGreaterThan(0);
        });
        it("should make its output different from the input", function () {
            expect(zombify.zombify(sentence)).not.toBe(sentence);
            expect(zombify.zombify(sentence).length).not.toBe(sentence.length);
        });

        it("should translate english into zombie", function () {
            expect(zombify.zombify(sentence)).toBe('Thrr qrrrrRrrrRrck bRRrrrRrwn frrrRrx jrrrrRrmps rrrRrvrrRRh thrr lazy drrrRrg.');
            expect(zombify.zombify('Hello :)')).toBe('HrrllrrrRr ☠');
        });

        it("should call each rule function", function () {
            spyOn(zombify, "rule_1").and.returnValue('string');
            spyOn(zombify, "rule_2").and.returnValue('string');
            spyOn(zombify, "rule_3").and.returnValue('string');
            spyOn(zombify, "rule_4").and.returnValue('string');
            spyOn(zombify, "rule_5").and.returnValue('string');
            spyOn(zombify, "rule_6").and.returnValue('string');
            spyOn(zombify, "rule_7").and.returnValue('string');
            spyOn(zombify, "rule_8").and.returnValue('string');
            spyOn(zombify, "rule_9").and.returnValue('string');
            spyOn(zombify, "rule_10").and.returnValue('string');

            zombify.zombify(sentence);

            expect(zombify.rule_1).toHaveBeenCalled();
            expect(zombify.rule_2).toHaveBeenCalled();
            expect(zombify.rule_3).toHaveBeenCalled();
            expect(zombify.rule_4).toHaveBeenCalled();
            expect(zombify.rule_5).toHaveBeenCalled();
            expect(zombify.rule_6).toHaveBeenCalled();
            expect(zombify.rule_7).toHaveBeenCalled();
            expect(zombify.rule_8).toHaveBeenCalled();
            expect(zombify.rule_9).toHaveBeenCalled();
            expect(zombify.rule_10).toHaveBeenCalled();
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
                expect(zombify.rule_3('a sentence? yes')).toBe('A sentence? Yes');
                expect(zombify.rule_3('a sentence! yes')).toBe('A sentence! Yes');
                expect(zombify.rule_3('a sentence. yes')).toBe('A sentence. Yes');
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
                var sentence = 'The quick brown fox jumps over the lazy dog';
                expect(zombify.rule_4(sentence)).not.toMatch(/e/g);
                expect(zombify.rule_4(sentence)).not.toMatch(/E/g);
                expect(zombify.rule_4('eeeeEEE')).not.toMatch(/e/g);
                expect(zombify.rule_4('eeeeEEE')).not.toMatch(/e/g);
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

        describe('Rule 6', function () {
            it("should replace 'o' or 'O' with 'rrrRr'", function () {
                expect(zombify.rule_6('that is a great story.')).toBe('that is a great strrrRrry.');
                expect(zombify.rule_6('a question? this is another sentence.')).toBe('a questirrrRrn? this is anrrrRrther sentence.');
                expect(zombify.rule_6('Already capitalized')).toBe('Already capitalized');
            });
            it("should remove all O's & o's", function () {
                var sentence = 'The quick brown fox jumps over the lazy dog';
                expect(zombify.rule_6(sentence)).not.toMatch(/o/g);
                expect(zombify.rule_6(sentence)).not.toMatch(/O/g);
                expect(zombify.rule_6('oooOOO')).not.toMatch(/o/g);
                expect(zombify.rule_6('oooOOO')).not.toMatch(/O/g);
            });
            it("should throw an error if input is not a string", function () {
                expect(function (zombify) {zombify.rule_6();}).toThrowError();
                expect(function (zombify) {zombify.rule_6(1);}).toThrowError();
                expect(function (zombify) {zombify.rule_6({});}).toThrowError();
            });
        });

        describe('Rule 7', function () {
            var sentence = 'The quick brown fox jumps over the lazy dog';
            it("should replace 'u' or 'U' with 'rrrrRr'", function () {
                expect(zombify.rule_7(sentence)).toBe('The qrrrrRrick brown fox jrrrrRrmps over the lazy dog');
                expect(zombify.rule_7('a question? this is another sentence.')).toBe('a qrrrrRrestion? this is another sentence.');
                expect(zombify.rule_7('Already capitalized')).toBe('Already capitalized');
            });
            it("should remove all U's & u's", function () {
                expect(zombify.rule_7(sentence)).not.toMatch(/u/g);
                expect(zombify.rule_7(sentence)).not.toMatch(/U/g);
                expect(zombify.rule_7('uuuUUU')).not.toMatch(/u/g);
                expect(zombify.rule_7('uuuUUU')).not.toMatch(/U/g);
            });
            it("should throw an error if input is not a string", function () {
                expect(function (zombify) {zombify.rule_7();}).toThrowError();
                expect(function (zombify) {zombify.rule_7(1);}).toThrowError();
                expect(function (zombify) {zombify.rule_7({});}).toThrowError();
            });
        });

        describe('Rule 8', function () {
            var sentence = 'The quick brown fox jumps over the lazy dog';
            it("should replace 'r' or 'R' with 'RR'", function () {
                expect(zombify.rule_8(sentence)).toBe('The quick bRRown fox jumps oveRR the lazy dog');
                expect(zombify.rule_8('a question? this is another sentence.')).toBe('a question? this is anotheRR sentence.');
                expect(zombify.rule_8('Already capitalized')).toBe('AlRReady capitalized');
            });
            it("should remove all r's", function () {
                expect(zombify.rule_8(sentence)).not.toMatch(/r/g);
                expect(zombify.rule_8('rrrrrrRRR')).not.toMatch(/r/g);
            });
            it("should throw an error if input is not a string", function () {
                expect(function (zombify) {zombify.rule_8();}).toThrowError();
                expect(function (zombify) {zombify.rule_8(1);}).toThrowError();
                expect(function (zombify) {zombify.rule_8({});}).toThrowError();
            });
        });

        describe('Rule 9', function () {
            var sentence = 'Hey there :). The quick brown fox jumps over the lazy dog.';
            it("should replace ':)' with '☠' (skull and crossbones)", function () {
                expect(zombify.rule_9(sentence)).toBe('Hey there ☠. The quick brown fox jumps over the lazy dog.');
                expect(zombify.rule_9(':( :) =] 8)')).toBe(':( ☠ =] 8)');
            });
            it("should remove all :)'s", function () {
                expect(zombify.rule_9(sentence)).not.toMatch(/:\)/g);
                expect(zombify.rule_9(':) :) :) :):):)')).not.toMatch(/r/g);
            });
            it("should throw an error if input is not a string", function () {
                expect(function (zombify) {zombify.rule_9();}).toThrowError();
                expect(function (zombify) {zombify.rule_9(1);}).toThrowError();
                expect(function (zombify) {zombify.rule_9({});}).toThrowError();
            });
        });

        describe('Rule 10', function () {
            var sentence = 'The quick brown fox jumps over the lazy dog. Ok?';
            it("should replace 'ok', 'Ok', or 'OK' with 'ECHHh'", function () {
                expect(zombify.rule_10(sentence)).toBe('The quick brown fox jumps over the lazy dog. ECHHh?');
                expect(zombify.rule_10('ok... OK? Ok!')).toBe('ECHHh... ECHHh? ECHHh!');
            });
            it("should remove all 'Ok's", function () {
                expect(zombify.rule_10(sentence)).not.toMatch(/Ok/g);
            });
            it("should throw an error if input is not a string", function () {
                expect(function (zombify) {zombify.rule_10();}).toThrowError();
                expect(function (zombify) {zombify.rule_10(1);}).toThrowError();
                expect(function (zombify) {zombify.rule_10({});}).toThrowError();
            });
        });

    });


});