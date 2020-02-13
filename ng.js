angular.module("myApp", ["ngMaterial"])
.controller("myCtrl", formFeed);

function formFeed($scope){
   $scope.profileData = [];

   $scope.info = {
         "name" : "",
         "contact" : {
            "phone" : "",
            "email" : "",
         },
         "address" : {
            "parmanent" : {
               "house" : "",
               "road" : "",
               "district" : "",
            },
            "present" : {
               "block" : "",
               "avenue" : "",
            },
         }
      };


   $scope.submit = submit;



   function submit() {
      // $scope.list.push(this.text);
      //     $scope.text = '';
      $scope.profileData.push($scope.info);
          $scope.info = {
         "name" : "",
          "contact" : {
             "phone" : "",
             "email" : "",
          },
          "address" : {
             "parmanent" : {
                "house" : "",
                "road" : "",
                "district" : "",
             },
             "present" : {
                "block" : "",
                "avenue" : "",
             },
          }
       };
   }
};
