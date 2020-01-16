window.onload=function()
{
    console.log('1')
    var request = new XMLHttpRequest()
    request.open('GET','/test.json',true);
    request.send(null)
    /*request.onload =  function(){
        if(request.status  == 200){
            var data = JSON.parse(xhr.responseText)
            console.log(data)
            document.getElementById("third-inner1").innerHTML = data.minTimes;
            document.getElementById("third-inner2").innerHTML = data.minPlace;
            document.getElementById("six-inner1").innerHTML = data.mostPlace;
            document.getElementById("six-inner2").innerHTML = data.mostTimes;
            document.getElementById("six-inner3").innerHTML = data.mostCost;
            document.getElementById("seven-inner1").innerHTML = data.earliestTime;
            document.getElementById("seven-inner2").innerHTML = data.earliestPlace;
            document.getElementById("seven-inner3").innerHTML = data.latestTime;
            document.getElementById("seven-inner4").innerHTML = data.latestPlace;
            document.getElementById("seven-inner5").innerHTML = data.mostMoney;
            document.getElementById("seven-inner6").innerHTML = data.famousResturant;
        }
    }*/
    request.addEventListener('load',function(){
        var data = JSON.parse(request.responseText)
        console.log('2')
        console.log(data)

        var thi = data.minTimes;
        thi = thi.replace(/-/g,"/");
        var thiDate = new Date(thi);
        var thiMon = thiDate.getMonth()+1;
        var thiDay = thiDate.getDate();
        var thiHor = thiDate.getHours();
        var thiDate12 = thiMon+":"+thiDay;
        document.getElementById("third-inner11").innerHTML = thiMon+"月"+thiDay+"日";
        document.getElementById("third-inner12").innerHTML = thiDate12;
        if(thiHor < 10 && thiHor >= 7){
            var thiImg = document.getElementById("third-con-img");
            thiImg.src="/image/page3/早餐.png";
            thiImg.style.width="37.64vw";
            thiImg.style.height="18vh";
            document.getElementById("third-con-word").innerHTML="还记得你那天早餐吃得是什么吗？"
        }else if(thiHor >= 10){
            var thiImg = document.getElementById("third-con-img");
            thiImg.src="/image/page3/跑步.png";
            thiImg.style.width="43.36vw";
            thiImg.style.height="19.3vh";
            document.getElementById("third-con-word").innerHTML="同志仍需努力，争取早起！";          
        }
        document.getElementById("third-inner2").innerHTML = data.minPlace;

        document.getElementById("six-inner1").innerHTML = data.mostPlace;
        document.getElementById("six-inner2").innerHTML = data.mostTimes;
        document.getElementById("six-inner3").innerHTML = data.mostvarCost;
        var sixCon = data.mostplace;
        console.log("---1---")
        console.log(sixCon)
        var sixImg = document.getElementById("six-condition");
        if(sixCon.indexOf("东一") != -1)
            sixImg.src="/image/page6/东一.png";
        else if(sixCon.indexOf("学子餐厅") != -1 ||sixCon.indexOf("学子中西餐厅") != -1)
            sixImg.src="/image/page6/学子.png";
        else if(sixCon.indexOf("东二") != -1)
            sixImg.src="/image/page6/东二.png";
        else if(sixCon.indexOf("桂香园") != -1)
            sixImg.src="/image/page6/桂香园.png";
        else if(sixCon.indexOf("博雅园") != -1)
            sixImg.src="/image/page6/博雅园.png";
        else if(sixCon.indexOf("南湖校区餐厅") != -1)
            sixImg.src="/image/page6/南湖餐厅.png";
    
        var sev1 = data.earliestTime;
        sev1 = sev1.replace(/-/g,"/");
        var sevDate1 = new Date(sev1);
        var sevMon1 = sevDate1.getMonth()+1;
        var sevDay1 = sevDate1.getDate();
        var sev2 = data.latestTime;
        sev2 = sev2.replace(/-/g,"/");
        var sevDate2 = new Date(sev1);
        var sevMon2 = sevDate2.getMonth()+1;
        var sevDay2 = sevDate2.getDate();
        document.getElementById("seven-inner1").innerHTML = sevMon1+"月"+sevDay1+"日";
        document.getElementById("seven-inner3").innerHTML = sevMon2+"月"+sevDay2+"日";

        document.getElementById("seven-inner2").innerHTML = data.earliestRestaurant;
        document.getElementById("seven-inner21").innerHTML = data.earliestPlace;
        document.getElementById("seven-inner4").innerHTML = data.latestRestaurant;
        document.getElementById("seven-inner41").innerHTML = data.latestPlace;
        document.getElementById("seven-inner5").innerHTML = data.mostMoney;
        document.getElementById("seven-inner6").innerHTML = data.famousRestaurant;
    })
}