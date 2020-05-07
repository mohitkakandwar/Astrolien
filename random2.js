function generator() { 
    
    var useri=prompt("Choose a Number");
    console.log(useri);
    var randomNumber=Math.floor(Math.random()*10);
    console.log(randomNumber);


    // removing from screen 


    if(useri==randomNumber){
    document.getElementById("hed1").remove();
document.getElementById("hed2").remove();

//    displaying on screen 
var h1= document.createElement('h1');
var textanswer=document.createTextNode("  You won  " );
h1.appendChild(textanswer);
var div =document.getElementById("real").appendChild(h1);
    }

    else {
        document.getElementById("hed1").remove();
        document.getElementById("hed2").remove();
        var h1= document.createElement('h1');
var textanswer=document.createTextNode(" you lost  computer choose "+                randomNumber );
h1.appendChild(textanswer);
var div =document.getElementById("real").appendChild(h1);


        
    }
    document.getElementById('button').disabled = true;
    
}

function Again(){
    document. location. reload();
}

