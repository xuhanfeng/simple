angular.module('myapp')
.service('staticValue',function(init){

    this.getValue = function(num){
        return init || num || 1;
    };
    this.logInfo = function(){
        console.log('abc')
    };

    this.number = 1;
});

angular.module('myapp')
.provider('test',function(){
    this.name = 'bbb';

    this.$get = function(){
        var that = this;
        var obj = {
            name:that.name
        };
        return obj
    }

});