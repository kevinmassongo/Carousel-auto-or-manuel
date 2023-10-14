const imgs = document.getElementById('imgs');
const imgLength = document.querySelectorAll('#imgs img');
const next = document.getElementById('next')
const prev = document.getElementById('prev')
let index = 0;

prev.addEventListener('click', prevFunction)

function prevFunction(){
    index++
    if(index > imgLength.length -1){
        index = 0
    }
    run()
}

next.addEventListener('click', nextFunction)

function nextFunction(){
    if(index > imgLength.length -1){
        index = 0
    }
    run()
}

function run(){
    index++;
    if(index > imgLength.length -1){
        index = 0
    }
    imgs.style.transform = `translateX(${-index * 100}%)`
}

setInterval(run, 3000)