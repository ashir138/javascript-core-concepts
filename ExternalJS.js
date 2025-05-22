function displayobject(){
    var top = Math.random() * 75.5;
    var left = Math.random() * 66.5;
    var size = Math.random() * 100 + 10;
    document.getElementById("object").style.top = top + "%";
    document.getElementById("object").style.left = left + "%";
    document.getElementById("object").style.width = size + "px"
    document.getElementById("object").style.height = size + "px"
    document.getElementById("object").style.display="block";
}
setTimeout(displayobject,1000);
var start = new Date().getTime();
var end;
document.getElementById("object").onclick = function(){
    end = new Date().getTime();
    document.getElementById("object").style.display = "none";
    var time = ((end - start)/1000)-1;
    var limitedtime = time.toFixed(3);
    document.getElementById("testtime").innerHTML = limitedtime + " s";
    setTimeout(displayobject, 1000);
    start = new Date().getTime();
}