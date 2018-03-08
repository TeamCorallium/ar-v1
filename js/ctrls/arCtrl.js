app.controller('ArCtrl', ["$scope", "$window",
    function($scope, $window) {

        $scope.patterDir = './patterns/patt.dirstuff';
        $scope.objectUrl = './objects/emojiKiss.obj';
        $scope.mtlUrl = './objects/emojiKiss.mtl';

        $scope.valueCheck = false;

        $scope.leftFunction = function() {
            var obj3D = document.querySelector('#object3d').object3D.position;
            obj3D.set(obj3D.x - 0.05, obj3D.y, obj3D.z);
        };

        $scope.topFunction = function() {
            var obj3D = document.querySelector('#object3d').object3D.position;
            obj3D.set(obj3D.x, obj3D.y, obj3D.z - 0.05);
        };

        $scope.rightFunction = function() {
            var obj3D = document.querySelector('#object3d').object3D.position;
            obj3D.set(obj3D.x + 0.05, obj3D.y, obj3D.z);
        };

        $scope.downFunction = function() {
            var obj3D = document.querySelector('#object3d').object3D.position;
            obj3D.set(obj3D.x, obj3D.y, obj3D.z + 0.05);
        };

        $scope.rotateFunction = function() {
            var obj3D = document.querySelector('#object3d').object3D.rotation;
            if ($scope.valueCheck) {
                obj3D.set(obj3D.x + 0.1, obj3D.y, obj3D.z);
            } else {
                obj3D.set(obj3D.x, obj3D.y + 0.1, obj3D.z);
            }
        };

        $scope.screenshotFunction = function() {
            var canvas = document.querySelector('a-scene').components.screenshot.getCanvas('perspective');

            var video = document.querySelector('video');
            var c = document.createElement("canvas");
            var ctx = c.getContext("2d");
            c.width = ($(window).width());
            c.height = ($(window).height());
            ctx.drawImage(video, 0, 0, ($(window).width()), ($(window).height()));

            var canvasFinal = document.createElement("canvas");
            var body = document.querySelector('body');
            canvasFinal.id = "myCanvas";
            var ctx2 = canvasFinal.getContext('2d');
            canvasFinal.width = ($(window).width());
            canvasFinal.height = ($(window).height());

            ctx2.drawImage(c, 0, 0, ($(window).width()), ($(window).height()));
            ctx2.drawImage(canvas, 0, 0, ($(window).width()), ($(window).height()));

            // Canvas2Image.saveAsJPEG(canvasFinal, ($(window).width()), ($(window).height()));

            body.appendChild(canvasFinal);

            canvasToImage('myCanvas', {
                name: 'dirstuffAR',
                type: 'jpg',
                quality: 1
            });
        };
    }
]);