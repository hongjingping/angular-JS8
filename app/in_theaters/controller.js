(function(angular){
    'use strict';
    /*API请求的数据*/
    var data = [
            {
                "rating": {
                    "max": 10,
                    "average": 7.7,
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "动作",
                    "科幻",
                    "冒险"
                ],
                "title": "星际迷航3：超越星辰",
                "casts": [
                    {
                        "alt": "https://movie.douban.com/celebrity/1053621/",
                        "avatars": {
                            "small": "http://img3.douban.com/img/celebrity/small/545.jpg",
                            "large": "http://img3.douban.com/img/celebrity/large/545.jpg",
                            "medium": "http://img3.douban.com/img/celebrity/medium/545.jpg"
                        },
                        "name": "克里斯·派恩",
                        "id": "1053621"
                    },
                    {
                        "alt": "https://movie.douban.com/celebrity/1041010/",
                        "avatars": {
                            "small": "http://img3.douban.com/img/celebrity/small/1364569064.71.jpg",
                            "large": "http://img3.douban.com/img/celebrity/large/1364569064.71.jpg",
                            "medium": "http://img3.douban.com/img/celebrity/medium/1364569064.71.jpg"
                        },
                        "name": "扎克瑞·昆图",
                        "id": "1041010"
                    },
                    {
                        "alt": "https://movie.douban.com/celebrity/1047985/",
                        "avatars": {
                            "small": "http://img3.douban.com/img/celebrity/small/1361267503.33.jpg",
                            "large": "http://img3.douban.com/img/celebrity/large/1361267503.33.jpg",
                            "medium": "http://img3.douban.com/img/celebrity/medium/1361267503.33.jpg"
                        },
                        "name": "佐伊·索尔达娜",
                        "id": "1047985"
                    }
                ],
                "collect_count": 11717,
                "original_title": "Star Trek Beyond",
                "subtype": "movie",
                "directors": [
                    {
                        "alt": "https://movie.douban.com/celebrity/1290066/",
                        "avatars": {
                            "small": "http://img3.douban.com/img/celebrity/small/20902.jpg",
                            "large": "http://img3.douban.com/img/celebrity/large/20902.jpg",
                            "medium": "http://img3.douban.com/img/celebrity/medium/20902.jpg"
                        },
                        "name": "林诣彬",
                        "id": "1290066"
                    }
                ],
                "year": "2016",
                "images": {
                    "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2377455123.jpg",
                    "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2377455123.jpg",
                    "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2377455123.jpg"
                },
                "alt": "https://movie.douban.com/subject/22939161/",
                "id": "22939161"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 7.4,
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "动作",
                    "悬疑",
                    "惊悚"
                ],
                "title": "谍影重重5",
                "casts": [
                    {
                        "alt": "https://movie.douban.com/celebrity/1054443/",
                        "avatars": {
                            "small": "http://img3.douban.com/img/celebrity/small/620.jpg",
                            "large": "http://img3.douban.com/img/celebrity/large/620.jpg",
                            "medium": "http://img3.douban.com/img/celebrity/medium/620.jpg"
                        },
                        "name": "马特·达蒙",
                        "id": "1054443"
                    },
                    {
                        "alt": "https://movie.douban.com/celebrity/1047994/",
                        "avatars": {
                            "small": "http://img3.doubanio.com/img/celebrity/small/259.jpg",
                            "large": "http://img3.doubanio.com/img/celebrity/large/259.jpg",
                            "medium": "http://img3.doubanio.com/img/celebrity/medium/259.jpg"
                        },
                        "name": "汤米·李·琼斯",
                        "id": "1047994"
                    },
                    {
                        "alt": "https://movie.douban.com/celebrity/1233154/",
                        "avatars": {
                            "small": "http://img3.doubanio.com/img/celebrity/small/1427204716.36.jpg",
                            "large": "http://img3.doubanio.com/img/celebrity/large/1427204716.36.jpg",
                            "medium": "http://img3.doubanio.com/img/celebrity/medium/1427204716.36.jpg"
                        },
                        "name": "艾丽西亚·维坎德",
                        "id": "1233154"
                    }
                ],
                "collect_count": 62675,
                "original_title": "Jason Bourne",
                "subtype": "movie",
                "directors": [
                    {
                        "alt": "https://movie.douban.com/celebrity/1025193/",
                        "avatars": {
                            "small": "http://img3.douban.com/img/celebrity/small/9714.jpg",
                            "large": "http://img3.douban.com/img/celebrity/large/9714.jpg",
                            "medium": "http://img3.douban.com/img/celebrity/medium/9714.jpg"
                        },
                        "name": "保罗·格林格拉斯",
                        "id": "1025193"
                    }
                ],
                "year": "2016",
                "images": {
                    "small": "http://img3.douban.com/view/movie_poster_cover/ipst/public/p2375019545.jpg",
                    "large": "http://img3.douban.com/view/movie_poster_cover/lpst/public/p2375019545.jpg",
                    "medium": "http://img3.douban.com/view/movie_poster_cover/spst/public/p2375019545.jpg"
                },
                "alt": "https://movie.douban.com/subject/26266072/",
                "id": "26266072"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 6.7,
                    "stars": "35",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "动画",
                    "冒险"
                ],
                "title": "冰川时代5：星际碰撞",
                "casts": [
                    {
                        "alt": "https://movie.douban.com/celebrity/1035648/",
                        "avatars": {
                            "small": "http://img3.doubanio.com/img/celebrity/small/8176.jpg",
                            "large": "http://img3.doubanio.com/img/celebrity/large/8176.jpg",
                            "medium": "http://img3.doubanio.com/img/celebrity/medium/8176.jpg"
                        },
                        "name": "西蒙·佩吉",
                        "id": "1035648"
                    },
                    {
                        "alt": "https://movie.douban.com/celebrity/1326968/",
                        "avatars": {
                            "small": "http://img3.doubanio.com/img/celebrity/small/1361845924.56.jpg",
                            "large": "http://img3.doubanio.com/img/celebrity/large/1361845924.56.jpg",
                            "medium": "http://img3.doubanio.com/img/celebrity/medium/1361845924.56.jpg"
                        },
                        "name": "洁茜J ",
                        "id": "1326968"
                    },
                    {
                        "alt": "https://movie.douban.com/celebrity/1027262/",
                        "avatars": {
                            "small": "http://img3.douban.com/img/celebrity/small/5082.jpg",
                            "large": "http://img3.douban.com/img/celebrity/large/5082.jpg",
                            "medium": "http://img3.douban.com/img/celebrity/medium/5082.jpg"
                        },
                        "name": "杰西·泰勒·弗格森",
                        "id": "1027262"
                    }
                ],
                "collect_count": 20184,
                "original_title": "Ice Age: Collision Course",
                "subtype": "movie",
                "directors": [
                    {
                        "alt": "https://movie.douban.com/celebrity/1299248/",
                        "avatars": {
                            "small": "http://img3.doubanio.com/img/celebrity/small/47476.jpg",
                            "large": "http://img3.doubanio.com/img/celebrity/large/47476.jpg",
                            "medium": "http://img3.doubanio.com/img/celebrity/medium/47476.jpg"
                        },
                        "name": "麦克·特米尔",
                        "id": "1299248"
                    },
                    {
                        "alt": "https://movie.douban.com/celebrity/1304031/",
                        "avatars": {
                            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                            "large": "http://img3.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                        },
                        "name": "加仑·T·楚",
                        "id": "1304031"
                    }
                ],
                "year": "2016",
                "images": {
                    "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2365823697.jpg",
                    "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2365823697.jpg",
                    "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2365823697.jpg"
                },
                "alt": "https://movie.douban.com/subject/25797778/",
                "id": "25797778"
            }
        ];


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
    function($scope) {
        /*控制器 分为两步:1.设计暴露数据，2.设计暴露行为*/
        $scope.subjects = data;
      }
  ]);
})(angular);
