//javascript vs jquery
//var title=document.getElementById('title');
//title.style.display="none";

jQuery("#title").hide();
jQuery("#title").show();
jQuery(".menu").hide();
$("a").show();


var h2=document.createElement("h2");
var text=document.createTextNode("Title 2");
h2.appendChild(text);
document.body.appendChild(h2);
$("h3").text("<h3></h3>");
$("h3:first").html("<h5>Title 2</h5>");
