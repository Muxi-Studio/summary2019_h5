function getHTTPObject()
{
    if (typeof  XMLHttpRequest == "undefined")
    XMLHttpRequest =  function()
    {
        try
        {// Firefox, Opera 8.0+, Safari, IE7
        xmlHttp=new XMLHttpRequest();
        }
        catch(e)
        {// Old IE
        try
        { 
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP"); 
        }
        catch(e)
        {
        alert ("Your browser does not support XMLHTTP!");
        return;  
        }
        }
    }
    return xmlHttp;
}