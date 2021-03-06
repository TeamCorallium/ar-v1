app.controller('ArCtrl', ["$scope", "$window", "$rootScope",
    function($scope, $window, $rootScope) {

        $scope.patterDir = './patterns/patt.dirstuff';
        $scope.objectUrl = './objects/cubo.obj';
        $scope.mtlUrl = './objects/cubo.mtl';

        $scope.valueCheck = false;

        $scope.type = '';
        $scope.portrait = true;
        $scope.landscape = false;
        $scope.widthScreen = 1366;
        $scope.heightScreen = 860;

        function getOrientation() {
            $scope.type = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";

            if ($scope.type == 'Landscape') {
                $scope.portrait = false;
                $scope.landscape = true;
            } else {
                $scope.landscape = false;
                $scope.portrait = true;
            }

            $scope.widthScreen = $(window).width();
            $scope.heightScreen = $(window).height();
        };

        getOrientation();

        $(window).on("resize.doResize", function() {
            getOrientation();
        });

        $scope.$on("$destroy", function() {
            $(window).off("resize.doResize"); //remove the handler added earlier
        });

        $scope.leftFunction = function() {
            if ($scope.type == 'Portrait') {
                var obj3D = document.querySelector('#object3dPortrait').object3D.position;
                document.querySelector('#object3dLandscape').style.visibility = "none";
            } else {
                var obj3D = document.querySelector('#object3dLandscape').object3D.position;
                document.querySelector('#object3dPortrait').style.visibility = "none";
            }
            obj3D.set(obj3D.x - 0.05, obj3D.y, obj3D.z);
        };

        $scope.topFunction = function() {
            if ($scope.type == 'Portrait') {
                var obj3D = document.querySelector('#object3dPortrait').object3D.position;
                document.querySelector('#object3dLandscape').style.visibility = "none";
            } else {
                var obj3D = document.querySelector('#object3dLandscape').object3D.position;
                document.querySelector('#object3dPortrait').style.visibility = "none";
            }
            obj3D.set(obj3D.x, obj3D.y, obj3D.z - 0.05);
        };

        $scope.rightFunction = function() {
            if ($scope.type == 'Portrait') {
                var obj3D = document.querySelector('#object3dPortrait').object3D.position;
                document.querySelector('#object3dLandscape').style.visibility = "none";
            } else {
                var obj3D = document.querySelector('#object3dLandscape').object3D.position;
                document.querySelector('#object3dPortrait').style.visibility = "none";
            }
            obj3D.set(obj3D.x + 0.05, obj3D.y, obj3D.z);
        };

        $scope.downFunction = function() {
            if ($scope.type == 'Portrait') {
                var obj3D = document.querySelector('#object3dPortrait').object3D.position;
                document.querySelector('#object3dLandscape').style.visibility = "none";
            } else {
                var obj3D = document.querySelector('#object3dLandscape').object3D.position;
                document.querySelector('#object3dPortrait').style.visibility = "none";
            }
            obj3D.set(obj3D.x, obj3D.y, obj3D.z + 0.05);
        };

        // $scope.rotateFunction = function() {
        // if ($scope.type == 'Portrait'){
        //     var obj3D = document.querySelector('#object3dPortrait').object3D.position;
        //     document.querySelector('#object3dLandscape').style.visibility = "none";
        // } else {
        //     var obj3D = document.querySelector('#object3dLandscape').object3D.position;
        //     document.querySelector('#object3dPortrait').style.visibility = "none";
        // }
        //     if ($scope.valueCheck) {
        //         obj3D.set(obj3D.x + 0.1, obj3D.y, obj3D.z);
        //     } else {
        //         obj3D.set(obj3D.x, obj3D.y + 0.1, obj3D.z);
        //     }
        // };

        $scope.screenshotFunction = function() {
            var body = document.querySelector('body');
            var video = document.querySelector('video');

            var c = document.createElement("canvas");
            c.id = "myCanvas";
            var ctx = c.getContext("2d");
            c.width = $scope.widthScreen;
            c.height = $scope.heightScreen;
            ctx.drawImage(video, 0, 0, $scope.widthScreen, $scope.heightScreen);

            var canvas = document.querySelector('a-scene').components.screenshot.getCanvas('perspective');

            ctx.drawImage(canvas, 0, 0, $scope.widthScreen, $scope.heightScreen);

            body.appendChild(c);

            canvasToImage('myCanvas', {
                name: 'dirstuffAR',
                type: 'jpg',
                quality: 0.7
            });

            body.removeChild(c);
        };
    }
]);