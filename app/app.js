var app=angular.module('myApp', []);
            app.controller('myCtrl', function($scope, $http){
//                $http.get("https://chinaproduct.herokuapp.com/api/china/gets/cat/type/P")
//                    .then(function(response){
//                    $scope.myUrl=response.data;
//                });
                $scope.save = function() {
                    console.log("Username = " + $scope.userName + "\n" +  "Password = " + $scope.passWord);
                    $scope.name=$scope.userName + " " + $scope.passWord;
                };
                
                $scope.myUrl={"message":"Categories Fetch With Type P.","returnCode":"OK","entity":[
                    {"id":1,"name":"nabeel","detail":"dfldsjfkldsjf;ladsjfiods fdsfdsif s","type":"P","status":"AVAILABLE","code":"16479","subCategories":null}, {"id":2,"name":"haris","detail":"tester","type":"P","status":"Active","code":"2889","subCategories":null}, {"id":3,"name":"azeem","detail":"internee","type":"P","status":"AVAILABLE","code":"00000","subCategories":null}, {"id":4,"name":"haseeb","detail":"csr","type":"S","status":"Active","code":"3456","subCategories":null}    
                ]};
            });
//            console.log($scope.myUrl);