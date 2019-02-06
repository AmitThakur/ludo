var boardCanvas = document.getElementById('board-canvas');
var boardContext = boardCanvas.getContext('2d');
boardContext.fillStyle = '#000000';

var diceCanvas = document.getElementById('dice-canvas');
var diceContext = diceCanvas.getContext('2d');
diceContext.fillStyle = '#000000';

document.onload = initGame();

document.body.onkeydown = function(e) {
    // If bar key is pressed
    if(e.keyCode == 32) {
        rollTheDice();
    }
}

function paintBoard() {
    var homeSize = 150;
    var pathSize = 25;
    var homeCircleSize = pathSize / 2;
    var starSize = 20;
    
    boardContext.lineWidth = 1;
    boardContext.strokeStyle = '#000000';
    var colors = ['blue', 'yellow', 'green', 'red'];
    var topLeftHomeCircleX =  2 * pathSize; 
    var topLeftHomeCircleY = 2 * pathSize;
    var starImage = new Image(pathSize, pathSize);
    starImage.src = 'images/star.svg';

    // top-left
    boardContext.fillStyle = colors[0];
    boardContext.fillRect(0, 0, homeSize, homeSize);
    
    boardContext.fillRect(pathSize, homeSize, pathSize, pathSize);
    boardContext.fillRect(pathSize, homeSize + pathSize, 5 * pathSize, pathSize);

    boardContext.beginPath();
    boardContext.moveTo(homeSize, homeSize);
    boardContext.lineTo(boardCanvas.width / 2, boardCanvas.height / 2);
    boardContext.lineTo(homeSize, homeSize + (3 * pathSize));
    boardContext.closePath();
    boardContext.fill();

    boardContext.fillStyle = '#FFFFFF';
    boardContext.fillRect(pathSize, pathSize, homeSize - (2 * pathSize), homeSize - (2 * pathSize));

    boardContext.fillStyle = colors[0];
    topLeftHomeCircleX =  2 * pathSize; 
    topLeftHomeCircleY = 2 * pathSize;
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            boardContext.beginPath();
            boardContext.arc(topLeftHomeCircleX + (i * 2 * pathSize), topLeftHomeCircleY + (j * 2 * pathSize), homeCircleSize, 0, 2 * Math.PI);
            boardContext.fill();
        }
    }

    boardContext.beginPath();
    boardContext.moveTo(0, homeSize);
    boardContext.lineTo(homeSize, homeSize);
    boardContext.stroke();

    boardContext.beginPath();
    boardContext.moveTo(homeSize, 0);
    boardContext.lineTo(homeSize, homeSize);
    boardContext.stroke();
    
    // top-right
    boardContext.fillStyle = colors[1];
    boardContext.fillRect(boardCanvas.width - homeSize, 0, homeSize, homeSize);

    boardContext.fillRect(boardCanvas.width - homeSize - pathSize, pathSize, pathSize, pathSize);
    boardContext.fillRect(homeSize + pathSize, pathSize, pathSize, 5 * pathSize);
    
    boardContext.beginPath();
    boardContext.moveTo(homeSize, homeSize);
    boardContext.lineTo(boardCanvas.width / 2, boardCanvas.height / 2);
    boardContext.lineTo(boardCanvas.width - homeSize, homeSize);
    boardContext.closePath();
    boardContext.fill();

    boardContext.fillStyle = '#FFFFFF';
    boardContext.fillRect(boardCanvas.width - homeSize + pathSize, pathSize, homeSize - (2 * pathSize), homeSize - (2 * pathSize));
    
    boardContext.fillStyle = colors[1];
    topLeftHomeCircleX = boardCanvas.width - homeSize + 2 * pathSize; 
    topLeftHomeCircleY = 2 * pathSize;
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            boardContext.beginPath();
            boardContext.arc(topLeftHomeCircleX + (i * 2 * pathSize), topLeftHomeCircleY + (j * 2 * pathSize), homeCircleSize, 0, 2 * Math.PI);
            boardContext.fill();
        }
    }

    boardContext.beginPath();
    boardContext.moveTo(boardCanvas.width - homeSize, 0);
    boardContext.lineTo(boardCanvas.width - homeSize, homeSize);
    boardContext.stroke();

    boardContext.beginPath();
    boardContext.moveTo(boardCanvas.width - homeSize, homeSize);
    boardContext.lineTo(boardCanvas.width, homeSize);
    boardContext.stroke();
    
    // bottom-left
    boardContext.fillStyle = colors[2];
    boardContext.fillRect(0, boardCanvas.height - homeSize, homeSize, homeSize);

    boardContext.fillRect(homeSize, boardCanvas.height - (2 * pathSize), pathSize, pathSize);
    boardContext.fillRect(homeSize + pathSize, homeSize + (3 * pathSize), pathSize, 5 * pathSize);
    
    boardContext.beginPath();
    boardContext.moveTo(homeSize,  homeSize + (3 * pathSize));
    boardContext.lineTo(boardCanvas.width / 2, boardCanvas.height / 2);
    boardContext.lineTo(boardCanvas.width - homeSize, boardCanvas.height - homeSize);
    boardContext.closePath();
    boardContext.fill();

    boardContext.fillStyle = '#FFFFFF';
    boardContext.fillRect(pathSize, boardCanvas.height - homeSize + pathSize, homeSize - (2 * pathSize), homeSize - (2 * pathSize));

    boardContext.fillStyle = colors[2];
    topLeftHomeCircleX = 2 * pathSize; 
    topLeftHomeCircleY = boardCanvas.height - homeSize + 2 * pathSize;
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            boardContext.beginPath();
            boardContext.arc(topLeftHomeCircleX + (i * 2 * pathSize), topLeftHomeCircleY + (j * 2 * pathSize), homeCircleSize, 0, 2 * Math.PI);
            boardContext.fill();
        }
    }
    
    boardContext.beginPath();
    boardContext.moveTo(0, boardCanvas.height - homeSize);
    boardContext.lineTo(homeSize, boardCanvas.height - homeSize);
    boardContext.stroke();

    boardContext.beginPath();
    boardContext.moveTo(homeSize, boardCanvas.height - homeSize);
    boardContext.lineTo(homeSize, boardCanvas.height);
    boardContext.stroke();
    
    // bottom-right
    boardContext.fillStyle = colors[3];
    boardContext.fillRect(boardCanvas.width-homeSize, boardCanvas.height - homeSize, homeSize, homeSize);

    boardContext.fillRect(boardCanvas.width - (2 * pathSize), homeSize + (2 * pathSize), pathSize, pathSize);
    boardContext.fillRect(boardCanvas.width - homeSize, homeSize + pathSize, 5 * pathSize, pathSize);
    
    boardContext.beginPath();
    boardContext.moveTo(homeSize + (3 * pathSize),  homeSize);
    boardContext.lineTo(boardCanvas.width / 2, boardCanvas.height / 2);
    boardContext.lineTo(homeSize + (3 * pathSize), homeSize + (3 * pathSize));
    boardContext.closePath();
    boardContext.fill();

    boardContext.fillStyle = '#FFFFFF';
    boardContext.fillRect(boardCanvas.width-homeSize + pathSize, boardCanvas.height - homeSize + pathSize, homeSize - (2 * pathSize), homeSize - (2 * pathSize));

    boardContext.fillStyle = colors[3];
    topLeftHomeCircleX = boardCanvas.width - homeSize + 2 * pathSize; 
    topLeftHomeCircleY = boardCanvas.height - homeSize + 2 * pathSize;
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            boardContext.beginPath();
            boardContext.arc(topLeftHomeCircleX + (i * 2 * pathSize), topLeftHomeCircleY + (j * 2 * pathSize), homeCircleSize, 0, 2 * Math.PI);
            boardContext.fill();
        }
    }

    boardContext.beginPath();
    boardContext.moveTo(boardCanvas.width-homeSize, boardCanvas.height - homeSize);
    boardContext.lineTo(boardCanvas.width, boardCanvas.height - homeSize);
    boardContext.stroke();

    boardContext.beginPath();
    boardContext.moveTo(boardCanvas.width-homeSize, boardCanvas.height - homeSize);
    boardContext.lineTo(boardCanvas.width-homeSize, boardCanvas.height);
    boardContext.stroke();

    // center
    boardContext.fillStyle = '#000000';
    boardContext.rect(homeSize, homeSize, 3 * pathSize, 3 * pathSize);
    boardContext.stroke();

    boardContext.beginPath();
    boardContext.moveTo(homeSize, homeSize);
    boardContext.lineTo(boardCanvas.width-homeSize, boardCanvas.height - homeSize);
    boardContext.stroke();

    boardContext.beginPath();
    boardContext.moveTo(boardCanvas.width-homeSize, homeSize);
    boardContext.lineTo(homeSize, boardCanvas.height - homeSize);
    boardContext.stroke();


    // paths top
    for (var i = 1; i <= 2; i++) {
        boardContext.beginPath();
        boardContext.moveTo(homeSize + (i * pathSize), 0);
        boardContext.lineTo(homeSize + (i * pathSize), homeSize);
        boardContext.stroke();
    }
    for (var i = 1; i <= 5; i++) {
        boardContext.beginPath();
        boardContext.moveTo(homeSize, i * pathSize);
        boardContext.lineTo(homeSize + (3 * pathSize), i * pathSize);
        boardContext.stroke();
    }

    // paths right
    for (var i = 1; i <= 2; i++) {
        boardContext.beginPath();
        boardContext.moveTo(boardCanvas.width - homeSize, homeSize + (i * pathSize));
        boardContext.lineTo(boardCanvas.width, homeSize + (i * pathSize));
        boardContext.stroke();
    }
    for (var i = 1; i <= 5; i++) {
        boardContext.beginPath();
        boardContext.moveTo(boardCanvas.width - (i * pathSize), homeSize);
        boardContext.lineTo(boardCanvas.width - (i * pathSize), homeSize + (3 * pathSize));
        boardContext.stroke();
    }

    // paths bottom
    for (var i = 0; i <= 2; i++) {
        boardContext.beginPath();
        boardContext.moveTo(homeSize + (i * pathSize), boardCanvas.height - homeSize);
        boardContext.lineTo(homeSize + (i * pathSize), boardCanvas.height);
        boardContext.stroke();
    }
    for (var i = 1; i <= 5; i++) {
        boardContext.beginPath();
        boardContext.moveTo(homeSize, boardCanvas.height - homeSize + (i * pathSize));
        boardContext.lineTo(homeSize + (3 * pathSize), boardCanvas.height - homeSize + (i * pathSize));
        boardContext.stroke();
    }

    // paths left
    for (var i = 0; i <= 2; i++) {
        boardContext.beginPath();
        boardContext.moveTo(0, homeSize + (i * pathSize));
        boardContext.lineTo(homeSize, homeSize + (i * pathSize));
        boardContext.stroke();
    }
    for (var i = 1; i <= 5; i++) {
        boardContext.beginPath();
        boardContext.moveTo(i * pathSize, homeSize);
        boardContext.lineTo(i * pathSize, homeSize + (3 * pathSize));
        boardContext.stroke();
    }

    // Stars
    starImage.onload = () => {
        // top
        boardContext.drawImage(starImage, homeSize + 3, 2 * pathSize + 2, starSize, starSize);
        // right
        boardContext.drawImage(starImage, (boardCanvas.width - 3 * pathSize) + 3, homeSize + 2, starSize, starSize);
        // bottom
        boardContext.drawImage(starImage, homeSize + (2 * pathSize) + 3, (boardCanvas.height - 3 * pathSize) + 2, starSize, starSize);
        // Left
        boardContext.drawImage(starImage, 2 * pathSize + 3, homeSize + (2 * pathSize) + 2, starSize, starSize);
    };

}

function initGame() {
    paintBoard();
}

function rollTheDice() {
    console.log('rollTheDice');
    var diceInterval = setInterval(() => {
        var nextNumber = 1 + Math.floor(Math.random() * 6);
        diceContext.clearRect(0, 0, diceCanvas.width, diceCanvas.height);
        var image = new Image();
        image.src = 'images/dice/Dice-' + nextNumber + '.svg';
        diceContext.drawImage(image, 1, 1, 48, 48);
    }, 50);

    setTimeout(() => {
        clearInterval(diceInterval);
    }, 1000);
    
}

