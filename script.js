window.alert("Welcome to Adi's Bubble Game");
var instructions = `Instructions: You have to press the bubble corresponding to the number being displayed beside 'Hit', note that pressing the wrong bubble will decrease your Score.`;
window.alert(instructions);
var timer = prompt("How long do you want to play this game (in seconds)");
timer++;

function MakeBubble(){
var drop="";
for (var i=1; i<=102; i++){
    drop += `<div class="bubble">${Math.round(Math.random()*10)}</div>`;
}
document.querySelector("#panelbtm").innerHTML=drop;
}
MakeBubble();

function Timeout(){
    var timeInt = setInterval(function(){
        timer-=1;
        if(timer>=0){
            document.querySelector("#time").textContent=timer;
        }
        else{
            clearInterval(timeInt);
            if(score>=300){
                document.querySelector("#panelbtm").innerHTML= `<center><h1>Well Played Champ!<br>Your Score was ${score} 🎉</center></h1>`;
            }
            else if(score>=200){
                document.querySelector("#panelbtm").innerHTML= `<center><h1>A Great Game!<br>Your Score was ${score} 🎉</center></h1>`;
            }
            else if(score>=130){
                document.querySelector("#panelbtm").innerHTML= `<center><h1>Decent Play!<br>Your Score was ${score} 🎉</center></h1>`;
            }
            else {
                document.querySelector("#panelbtm").innerHTML= `<center><h1>Can do better!<br>Your Score was ${score} 🎉</center></h1>`;
            }
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



