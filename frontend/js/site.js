//JQUERY makes our life easy
//1. how to make backend call
$.getJSON('/data',function(d){
alert(JSON.stringify(d));
$('#name').text(d.name);
$('#college').text(d.college);
$('#regno').text(d.regno);


})
