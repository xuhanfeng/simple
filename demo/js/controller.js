angular.module('myapp').value('init',99);

app.controller('listCtrl',function(staticValue){
    staticValue.logInfo = function(){
        console.log('www');
    };
    staticValue.number = 3;


});

app.controller('detailCtrl',function(staticValue,test){

    console.log(test);
    console.log(staticValue.number);

});

app.controller('homeCtrl',function($scope,$state){
    $scope.changePage = function(){
        $state.go('contact')
    }
});
