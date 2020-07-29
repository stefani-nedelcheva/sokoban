window.addEventListener('keydown', move, true);

function move(evt) {
    switch (evt.keyCode) {
        //left
        case 37:
            moveThePlayer(-1, 0);
            break;
        //up
        case 38:
            moveThePlayer(0, -1);
            break;
        //right
        case 39:
            moveThePlayer(1, 0);
            break;
        //down
        case 40:
            moveThePlayer(0, 1);
            break;
    }
}

function moveThePlayer(x, y) {
    var targetPos = currField[player.row + y][player.col + x];
    var afterTargetPos = currField[player.row + 2 * y][player.col + 2 * x];
    switch (targetPos) {
        case 0:
            setPositions(x, y, 5);
            player.moves++;
            break;
        case 2:
            if (afterTargetPos == 0) {
                setPositionsO(x, y, 5, 2);
            } else if (afterTargetPos == 3) {
                setPositionsO(x, y, 5, 4);
                freePoints--;
            }
            player.moves++;
            break;
        case 3:
            setPositions(x, y, 6);
            player.moves++;
            break;
        case 4:
            if (afterTargetPos == 0) {
                setPositionsO(x, y, 6, 2);
                freePoints++;
            } else if (afterTargetPos == 3) {
                setPositionsO(x, y, 6, 4);
            }
            player.moves++;
            break;
        default:
            break;
    }
}

// used to set the next cell's new status after movement
function setPositions(directionX, directionY, nextElementID) {
    currField[player.row][player.col] = getOldPosition();
    currField[player.row + directionY][player.col + directionX] = nextElementID;
    player.row += directionY;
    player.col += directionX;
}

// similar function, called when the cell after the next cell needs changing too
function setPositionsO(directionX, directionY, nextElementID, nextNextElementID) {
    currField[player.row + 2 * directionY][player.col + 2 * directionX] = nextNextElementID;
    setPositions(directionX, directionY, nextElementID);
}

function getOldPosition() {
    if (currField[player.row][player.col] == 6) {
        return 3;
    } else {
        return 0;
    }
}