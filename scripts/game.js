// canvas
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

//images
var brick_img = new Image();
brick_img.src = 'images/Brick-Wall-Small.png';
var server_img = new Image();
server_img.src = 'images/serverN.png';
var pc_wrong_img = new Image();
pc_wrong_img.src = 'images/wrongN.png';
var pc_ok_img = new Image();
pc_ok_img.src = 'images/okN.png';
var player_img = new Image();
player_img.src = 'images/player.png';
var public_img = new Image();
public_img.src = 'images/public.png';

var level_label = document.getElementById('level');

var interval = setInterval(run, 10);

var h1 = document.getElementById('timer'),
    seconds = 0, minutes = 0, t;

var currField = [];
var player = { row: 0, col: 0, moves: 0 };
var freePoints = 0;
var currentLevel = 0;
loadLevel(currentLevel);

function loadLevel(level) {
    currField = getField(levels[level].field);
    player.row = levels[level].playerY.valueOf();
    player.col = levels[level].playerX.valueOf();
    player.moves = 0;
    freePoints = levels[level].servers.valueOf();
    level_label.textContent = 'Level' + ' ' + (level + 1);
    resetTimer();
    isClicked = true;
}

function run() {
    drawField(currField);
    document.getElementById('moves').value = player.moves;

    if (freePoints == 0) {
        popupDialog('Level ' + (currentLevel + 1) + ' completed :)\n'
            + 'Moves: ' + player.moves + ' \nTime: ' + h1.textContent);

        if (currentLevel == levels.length - 1) {
            popupDialog('Congratulations! YOU WON!');
            currentLevel = -1;
        }
        wait();
    }
}

function getField(matrix) {
    var newMatrix = [];
    
    for (var i = 0; i < matrix.length; i++) {
        newMatrix[i] = matrix[i].slice();
    }
    return newMatrix;
}

function wait() {
    clearTimeout(t);
    window.clearInterval(interval);
}

function restart() {
    loadLevel(currentLevel);
}

timer();