document.write('<link rel="stylesheet" href="css/index.css"/>');
document.write('<link rel="stylesheet" href="css/box1.css"/>');
document.write('<link rel="stylesheet" href="css/box2.css"/>');
document.write('<link rel="stylesheet" href="css/box3.css"/>');
document.write('<link rel="stylesheet" href="css/box4.css"/>');
document.write('<link rel="stylesheet" href="css/box5.css"/>');
document.write('<link rel="stylesheet" href="css/box6.css"/>');
document.write('<link rel="stylesheet" href="css/box7.css"/>');
document.write('<link rel="stylesheet" href="css/box8.css"/>');
document.write('<link rel="stylesheet" href="css/box9.css"/>');
document.write('<link rel="stylesheet" href="css/iSlider.css"/>');
function AutoPlay() {
    var audio = document.getElementById("bgMusic"),
    play = function () {
        audio.play();
        document.removeEventListener("touchstart", play, false);
    };
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function () {
        play();
    }, false);
    document.addEventListener("touchstart", play, false);
}

