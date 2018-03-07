app.controller('ArCtrl', ["$scope",
    function($scope) {

        $scope.patterDir = './patterns/patt.dirstuff';
        $scope.objectUrl = './objects/monkey.obj';
        $scope.mtlUrl = './objects/monkey.mtl';

        $scope.valueCheck = false;

        $scope.leftFunction = function(){
            var obj3D = document.querySelector('#monkey').object3D.position;
            obj3D.set(obj3D.x - 0.05, obj3D.y, obj3D.z);
        };

        $scope.topFunction = function(){
            var obj3D = document.querySelector('#monkey').object3D.position;
            obj3D.set(obj3D.x, obj3D.y, obj3D.z - 0.05);
        };

        $scope.rightFunction = function(){
            var obj3D = document.querySelector('#monkey').object3D.position;
            obj3D.set(obj3D.x + 0.05, obj3D.y, obj3D.z);
        };

        $scope.downFunction = function(){
            var obj3D = document.querySelector('#monkey').object3D.position;
            obj3D.set(obj3D.x, obj3D.y, obj3D.z + 0.05);        
        };

        $scope.rotateFunction = function(){
            var obj3D = document.querySelector('#monkey').object3D.rotation;
            if ($scope.valueCheck){
                obj3D.set(obj3D.x + 0.1, obj3D.y, obj3D.z);
            } else {
                obj3D.set(obj3D.x, obj3D.y + 0.1, obj3D.z);
            }
        };
    }
]);