define(['jquery', 'Zombify', 'UnZombify'], function($, Zombify, UnZombify) {

    var ZombifyView = function() {
        this.zombify = new Zombify();
        this.unzombify = new UnZombify();
        this.zombifyView;
        this.unzombifyView;
        this.listenTypeEnglish();
        this.listenTypeZombie();

    };

    ZombifyView.prototype.listenTypeEnglish = function() {
        var that = this;
        $('#english').on("keyup", function(event){
            that.zombifyView();
        });
    };

    ZombifyView.prototype.listenTypeZombie = function() {
        var that = this;
        $('#zombie').on("keyup", function(event){
            that.unzombifyView();
        });
    };

    ZombifyView.prototype.unzombifyView = function() {
        $('#english').val(this.unzombify.unzombify($('#zombie').val()));
        console.log('unzombifyView');
    };

    ZombifyView.prototype.zombifyView = function() {
        $('#zombie').val(this.zombify.zombify($('#english').val()));
        console.log('zombifyView');
    };

    return ZombifyView;

});