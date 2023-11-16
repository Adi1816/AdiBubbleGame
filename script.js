function MakeBubble(){
var drop="";
for (var i=1; i<=102; i++){
    drop += `<div class="bubble">${Math.round(Math.random()*10)}</div>`;
}
document.querySelector("#panelbtm").innerHTML=drop;
}
MakeBubble();

var timer=60;
function Timeout(){
    var timeInt = setInterval(function(){
        timer-=1;
        if(timer>=0){
            document.querySelector("#time").textContent=timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#panelbtm").innerHTML= `<center><h1>Well Played Champ!<br>Your Score was ${score} 🎉</center></h1>`;
            // document.querySelector("#panelbtm").innerHTML= `<h1>Your Score was: ${score}</h1>`;
            // document.querySelector("#panelbtm").innerHTML= `<h1>Well Played Champ!</h1>`;

        }
    }, 1000);
}
Timeout();

var hitnum=0;
function NewHit(){
    hitnum=Math.round(Math.random()*10);
    document.querySelector("#hitval").textContent=hitnum;
}
NewHit();

var score=0;
function IncreaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

function DecreaseScore(){
    score-=10;
    document.querySelector("#scoreval").textContent=score;
}


document.querySelector("#panelbtm").
addEventListener('click', function(dets){
    var clickednum = (Number(dets.target.textContent));
    // alert(clickednum);
    if(hitnum==clickednum){
        IncreaseScore();
        NewHit();
        MakeBubble();
    }
    else if(clickednum!=hitnum && clickednum<=10){
        DecreaseScore();
        NewHit();
        MakeBubble();
    }
})



