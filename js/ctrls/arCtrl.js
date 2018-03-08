app.controller('ArCtrl', ["$scope", "$window",
    function($scope, $window) {

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

        $scope.screenshotFunction = function(){            
            // var canvas = document.getElementsByClassName('a-canvas');
            var canvas = document.querySelector('a-scene').components.screenshot.getCanvas('perspective');

            var video = document.querySelector('video');
            var thumbs = document.querySelector('body');
            var c = document.createElement("canvas");
            var ctx = c.getContext("2d");
            c.width = ($(window).width());
            c.height = ($(window).height());
            ctx.drawImage(video, 0, 0, ($(window).width()), ($(window).height()));
            // window.open(c.toDataURL("image/png"));

            // html2canvas(document.querySelector('video'),{                
            //     width:($(window).width()),
            //     height:($(window).height())
            // }).then(canvas => {
            //     // console.log(canvas);
            //     window.open(canvas.toDataURL("image/png"));
            // });
        };
    }
]);