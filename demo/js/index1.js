var app=angular.module('myapp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'view/home.html',
        })
        .state('concont',{
            url:'/concont',
            templateUrl:'view/content.html',
        })
        .state('third',{
            url:'/third',
            templateUrl:'view/third.html'
        })
        .state('final',{
            url:'/final',
            templateUrl:'view/final.html'
        })

    $urlRouterProvider.when('','/home')
})