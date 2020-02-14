(function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    let ht = window.screen.height;
    let wh = window.screen.width;
    canvas.width = wh * 0.8;
    canvas.height = ht * 0.25;
    var colorArr = [];
    var textArr = [
        "东一烤鱼饭",   "桂香园麻辣香锅",  "东二新疆炒饭",  "学子鲍汁炒饭",
        "桂香园石锅拌饭",  "东一港式风味",   "学子热干面",   "东一牛肉面",
    ]
    
    ctx.font = "5vw Microsoft YaHei";
    var numArrL = []; //初始的X
    var numArrnum = [0,1,2,3,0,1,2,3];
    var numArrnum1 = [3,2,1,0,0,1,2,3];
    var numArrT = []; //初始的Y
    var numspeed = [];
    for(let i = 0;i < textArr.length ;i++){
        numArrT.push(numArrnum[i] * canvas.height / 4 + canvas.height / 8);
        numArrL.push(numArrnum[i] * canvas.width / 4);
        colorArr.push("white");
        numspeed.push(numArrnum1[i] * 2 + 1);
    }
    setInterval(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        for (var j = 0; j < textArr.length; j++) {
            numArrL[j] -=  numspeed[j];
            ctx.fillStyle = colorArr[j]
            ctx.fillText(textArr[j], numArrL[j], numArrT[j]);
        }
        for (var i = 0; i < textArr.length; i++) {
            if (numArrL[i] <= -500) {
                numArrL[i] = canvas.width;
            }
        }
        ctx.restore();
    }, 17)
    })();