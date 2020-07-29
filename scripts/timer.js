function add() {
    h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) :
        "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    seconds++;
    
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    timer();

}

function resetTimer() {
    seconds = 0;
    minutes = 0;
}

function timer() {
    t = setTimeout(add, 1000);
}