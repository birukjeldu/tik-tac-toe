let box = document.querySelector('.box')
let z = document.querySelectorAll('.box div')
let xScore = document.getElementById("xScore")
let oScore = document.getElementById("oScore")
let draw = document.getElementById("draw")
let restart = document.querySelector(".restart")
let win = document.querySelector(".win")
let winPos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

var turn = 'X';
box.addEventListener('mouseover', (e) => {
    let x = e.target
    if (x.innerHTML == '') {
        x.setAttribute('val', turn)
    } else {
        
        x.style.cursor = "not-allowed"
    }
})


let count = 0;
let xWin=0,oWin=0,dr =0;
box.addEventListener('click', (e) => {
    let x = e.target
    if (x.innerHTML == '') {
        x.innerHTML = turn
        x.setAttribute("rV", turn);
        winner(x)
        turn = turn == 'X' ? 'O' : 'X';
    }
    if(count >8){
        dr++
        draw.innerText = dr
        restart.style.visibility = 'visible'
        win.innerHTML = "Draw"
    }
    
    
        //onsole.log(x.getAttribute('rV'))
    
})
let r = ''
let wonBoxes = [];
function winner(u){
    wonBoxes = [];
    for(let i=0;i<winPos.length;i++){
        for(let j=0;j<winPos[i].length;j++){
            if(z[winPos[i][j]].getAttribute('rV') != ''){
                r += z[winPos[i][j]].getAttribute('rV');
            }
        }
        
        if(r=='OOO'){
            wonBoxes.push(winPos[i])
            winnerAnimation(wonBoxes)
            oWin++
            oScore.innerText = oWin
            restart.style.visibility = 'visible'
            win.innerHTML = "'O' Won!"
            count--
            break
        }else if(r=='XXX'){
            wonBoxes.push(winPos[i])
            winnerAnimation(wonBoxes)
            xWin++
            xScore.innerText = xWin
            restart.style.visibility = 'visible'
            win.innerHTML = "'X' Won!"
            count--
            break
        }
        r = ''
    }
        
    // console.log(count)
        count++;
   

    
}
restart.addEventListener('click',()=>{
    // restart.classList.toggle(".")
    restart.style.visibility = 'hidden'
    reset();
})

function reset(){
    for(let i=0;i<z.length;i++){
        z[i].setAttribute('rV','')
        z[i].innerHTML = ''
        z[i].style.cursor = "pointer"
        if(z[i].classList.contains('anim')){
            z[i].classList.remove("anim")
        }
    }
    count = 0;
    r = ''
}
function newGame(){
    reset()
    oScore.innerText = '0'
    xScore.innerText = '0'
    draw.innerText = '0'
}

function winnerAnimation(arr){
    arr[0].forEach(i => {
        z[i].classList.add("anim");
        console.log(z[i])
    });
}
//  console.log(wonBoxes)
