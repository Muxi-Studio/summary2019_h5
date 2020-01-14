window.onload=function()
{
    console.log('1')
    var request = new XMLHttpRequest()
    request.open('GET','/test1.json',true);
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
        document.getElementById("seven-inner6").innerHTML = data.famousRestaurant;
    })
}