define(['Zombify'], function(Zombify){

    var zombify;

    describe('Zombify', function(){

        beforeEach(function(){

            zombify = new Zombify();

        });

        describe('zombify', function(){
            it("should replace 'i' or 'I' with 'rrRr'", function(){
                expect(zombify.zombify('i')).toBe('rrRr');
            });

        });

    });


});