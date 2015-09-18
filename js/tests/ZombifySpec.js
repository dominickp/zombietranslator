define(['Zombify'], function(Zombify){

    var zombify;

    describe('Zombify', function(){

        beforeEach(function(){

            zombify = new Zombify();

        });

        describe('Rule 1', function(){
            it("should replace 'i' or 'I' with 'rrRr'", function(){
                expect(zombify.rule_5('i')).toBe('rrRr');
                expect(zombify.rule_5('Correct me if I\'m wrong')).toBe('Correct me rrRrf rrRr\'m wrong');
                expect(zombify.rule_5('I can hold a tiki')).toBe('rrRr can hold a trrRrkrrRr');
            });

        });

    });


});