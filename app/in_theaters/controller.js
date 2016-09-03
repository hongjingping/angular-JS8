(function(angular){
    'use strict';
  /*正在热映模块*/
  var module = angular.module('moviecat.in_theaters', ['ngRoute']);
/*配置模块的路由*/
  module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters', {
          templateUrl: 'in_theaters/view.html',
          controller: 'InTheatersController'
        });
      }]);

  module.controller('InTheatersController', [
    "$scope",
      '$http',
    function($scope,$http) {
        /*控制器 分为两步:1.设计暴露数据，2.设计暴露行为*/
        $scope.subjects = [];
        $scope.message = '';
        /*======豆瓣不支持HSONP跨域，只能自己写========*/
      //  var doubanApiAddress = 'http://api.douban.com/v2/movie/in_theaters';
      //  /*测试$http服务,在当前的目录下才可以做ajax请求，别的地方是跨域*/
      //  /*在angular中使用jsonP的方式跨域请求，就必须给当前地址加上一个参数callback=JSONP_CALLBACK，千万不能写错*/
      //  $http.jsonp(doubanApiAddress+"?callback = JSON_CALLBACK").then(function(res){
      //      /*此处代码是在异步请求完后才开始执行(需要等待一段时间)*/
      //      if(res.status == 200){
      //          $scope.subjects = res.data.subjects;
      //      }else {
      //          $scope.message = "获取数据错误,错误信息"+res.statusText;
      //      }
      //      console.log(11);
      //  },function(err){
      //      $scope.message = "获取数据错误,错误信息"+err.statusText;
      //  })
      }
  ])
})(angular);
