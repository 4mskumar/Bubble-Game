let time = 60;
let score = 0;
let hitVal = 0;

const increaseScore =() => {
    score += 10;
    document.querySelector("#score").textContent = score 
}

function makeBubble(){
    let clutter = "";
for(let i=1; i<221; i++)
    clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;

document.querySelector("#pnlbtm").innerHTML = clutter;
}

function timer() {
    let Interval = setInterval(() => {
        if(time > 0)
        {
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else {
            clearInterval(Interval);
            document.querySelector("#pnlbtm").textContent = "Game over"
                }
    }, 1000)
}

const RandomHit = () => {
     hitVal = document.querySelector("#hits").textContent = Math.floor(Math.random()*10);
    // console.log(hitVal);
}

const click = () => {
    document.querySelector("#pnlbtm").addEventListener("click", (dts) =>{
        var value = Number(dts.target.textContent);
        // console.log(value)
        if(hitVal === value){
        //    let scoreVal = document.querySelector("#score").textContent;
           increaseScore();
            makeBubble();
            RandomHit();
            // timer();
        }
        
    })
}

// const updateScore = () => {
//     if()
// }
click();
RandomHit();
timer();
makeBubble();