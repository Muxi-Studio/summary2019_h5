function getNewContent(){
    var request = getHTTPObject();
    if(request){
        request.open("GET","example.txt", true);
        request.onreadystateonchange = function() {
            if(request.readyState = 4){
                alert("responce received");
                var para = document.createElementNS("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        };
        request.send(null);
    }else  {
        alert('Sorry~~~');
    }
    alert("function done");
}
addLoadEvent(getNewContent);