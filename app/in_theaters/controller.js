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
        /*测试$http服务,在当前的目录下才可以做ajax请求，别的地方是跨域*/
        /*失败的回调和成功的回调*/
        $http.get('./data.json').then(function(res){
            /*此处代码是在异步请求完后才开始执行(需要等待一段时间)*/
            if(res.status == 200){
                $scope.subjects = res.data.subjects;
            }else {
                $scope.message = "获取数据错误,错误信息"+res.statusText;
            }
            console.log(11);
        },function(err){
            $scope.message = "获取数据错误,错误信息"+err.statusText;
        })
      }
  ]);
})(angular);
