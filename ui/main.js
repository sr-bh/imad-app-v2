console.log('Loaded!');

var button = document.getElementById('counter');
var counter=0;

button.onclick = function(){
    
    //
    
    //
    
    //Render variable in the correct span
    counter=counter+1;
    var span= getElementById('count');
    span.innerHTML=counter.toString();
};