AFRAME.registerComponent('screenshotar', {
    schema: {},
    init: function() {
            var scene1 = document.querySelector('a-scene');
            scene1.addEventListener('touchmove', handleMove);
            scene1.addEventListener('touchend', handleEnd);
        }
        // update: function () {
        //     console.log("update");
        // },
        // tick: function () {
        //     console.log("tick");
        // },
        // remove: function () {
        //     console.log("remove");
        // },
        // pause: function () {
        //     console.log("pause");
        // },
        // play: function () {
        //     console.log("play");
        // }
});

var screenshotFlag = false;

function handleMove(evt) {
    evt.preventDefault();

    var touches = evt.changedTouches;

    // if (touches.length == 3) {
    //     if (touches[touches.length -1].pageY - touches[0].pageY > 10) {
    //         if (!screenshotFlag){
    //             document.querySelector('a-scene').components.screenshot.capture('perspective');
    //             screenshotFlag = true;
    //         }
    //     }
    // }
};

function handleEnd(evt) {
    evt.preventDefault();
    // screenshotFlag = false;
};