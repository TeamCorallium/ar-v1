AFRAME.registerComponent('moveLeft', {
    schema: {},
    init: function() {
        console.log("init");
            var scene1 = document.querySelector('a-scene');
            // scene1.addEventListener('touchmove', handleMove);
            scene1.addEventListener('touchend', handleEnd);
            scene1.addEventListener('touchpress', handlePress);
            scene1.addEventListener('mousepress', clickPress);
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


// function handleMove(evt) {
//     evt.preventDefault();

//     var touches = evt.changedTouches;

    // if (touches.length == 3) {
    //     if (touches[touches.length -1].pageY - touches[0].pageY > 10) {
    //         if (!screenshotFlag){
    //             document.querySelector('a-scene').components.screenshot.capture('perspective');
    //             screenshotFlag = true;
    //         }
    //     }
    // }
// };

function handleEnd(evt) {
    evt.preventDefault();
    // screenshotFlag = false;
};

function handlePress(evt){
    console.log("handlePress");
};

function clickPress(evt){
    console.log("clickPress");
};