define(['Zombify'], function (Zombify) {

    var zombify;

    describe('Zombify', function () {

        beforeEach(function () {

            zombify = new Zombify();

        });

        describe('Rule 1', function () {
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
                expect(function (zombify) {zombify.rule_5();}).toThrow();
                expect(function (zombify) {zombify.rule_5(1);}).toThrow();
                expect(function (zombify) {zombify.rule_5({});}).toThrow();
            });
        });

    });


});