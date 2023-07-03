let gameActive = true;
//Player
let player1 = [3,3,2,2,1,1];
let player2 = [3,3,2,2,1,1];
let isTurn = true;
//Tiles
let f1 = document.getElementById("f1");
let f2 = document.getElementById("f2");
let f3 = document.getElementById("f3");
let f4 = document.getElementById("f4");
let f5 = document.getElementById("f5");
let f6 = document.getElementById("f6");
let f7 = document.getElementById("f7");
let f8 = document.getElementById("f8");
let f9 = document.getElementById("f9");
//grids
let currentGridP1 = [0,0,0,
    	             0,0,0,
                     0,0,0];

let currentGridP2 = [0,0,0,
                     0,0,0,
                     0,0,0];

let grid1 = [1,1,1,
             0,0,0,
             0,0,0];

let grid2 = [0,0,0,
             1,1,1,
             0,0,0];

let grid3 = [0,0,0,
             0,0,0,
             1,1,1];

let grid4 = [1,0,0,
             1,0,0,
             1,0,0];
            
let grid5 = [0,1,0,
             0,1,0,
             0,1,0];
            
let grid6 = [0,0,1,
             0,0,1,
             0,0,1];

let grid7 = [0,0,1,
             0,1,0,
             1,0,0];

let grid8 = [1,0,0,
             0,1,0,
             0,0,1];

function colorTile(tile) {

     if (isTurn) {
        switch (tile) {
            case "f1":
                if (f1.classList != "tileClickedP1") {
                    f1.classList.add("tileClickedP1");
                }
                currentGridP1[0] = 1;
                break;
        
            case "f2":
                if (f2.classList != "tileClickedP1") {
                    f2.classList.add("tileClickedP1");
                }
                currentGridP1[1] = 1;
                break;
            case "f3":
                if (f3.classList != "tileClickedP1") {
                    f3.classList.add("tileClickedP1");
                }
                currentGridP1[2] = 1;
                break;
            case "f4":
                if (f4.classList != "tileClickedP1") {
                    f4.classList.add("tileClickedP1");
                }
                currentGridP1[3] = 1;
                break;
            case "f5":
                if (f5.classList != "tileClickedP1") {
                    f5.classList.add("tileClickedP1");
                }
                currentGridP1[4] = 1;
                break;
            case "f6":
                if (f6.classList != "tileClickedP1") {
                    f6.classList.add("tileClickedP1");
                }
                currentGridP1[5] = 1;
                break;
            case "f7":
                if (f7.classList != "tileClickedP1") {
                    f7.classList.add("tileClickedP1");
                }
                currentGridP1[6] = 1;
                break;
            case "f8":
                if (f8.classList != "tileClickedP1") {
                    f8.classList.add("tileClickedP1");
                }
                currentGridP1[7] = 1;
                break;
            case "f9":
                if (f9.classList != "tileClickedP1") {
                    f9.classList.add("tileClickedP1");
                }
                currentGridP1[8] = 1;
                break;
        }
        isTurn = false;
    } else {
        switch (tile) {
            case "f1":
                if (f1.classList != "tileClickedP2") {
                    f1.classList.add("tileClickedP2");
                }
                currentGridP2[0] = 1;
                break;
        
            case "f2":
                if (f2.classList != "tileClickedP2") {
                    f2.classList.add("tileClickedP2");
                }
                currentGridP2[1] = 1;
                break;
            case "f3":
                if (f3.classList != "tileClickedP2") {
                    f3.classList.add("tileClickedP2");
                }
                currentGridP2[2] = 1;
                break;
            case "f4":
                if (f4.classList != "tileClickedP2") {
                    f4.classList.add("tileClickedP2");
                }
                currentGridP2[3] = 1;
                break;
            case "f5":
                if (f5.classList != "tileClickedP2") {
                    f5.classList.add("tileClickedP2");
                }
                currentGridP2[4] = 1;
                break;
            case "f6":
                if (f6.classList != "tileClickedP2") {
                    f6.classList.add("tileClickedP2");
                }
                currentGridP2[5] = 1;
                break;
            case "f7":
                if (f7.classList != "tileClickedP2") {
                    f7.classList.add("tileClickedP2");
                }
                currentGridP2[6] = 1;
                break;
            case "f8":
                if (f8.classList != "tileClickedP2") {
                    f8.classList.add("tileClickedP2");
                }
                currentGridP2[7] = 1;
                break;
            case "f9":
                if (f9.classList != "tileClickedP2") {
                    f9.classList.add("tileClickedP2");
                }
                currentGridP2[8] = 1;
                break;
        }
        isTurn = true;
    }
    //check win of player 1
    if (checkWinNormalP1(grid1)) {
        alert("Player 1 won!");
        gameActive = false;}
    if (checkWinNormalP1(grid2)) {
        alert("Player 1 won!");
        gameActive = false;}
    if (checkWinNormalP1(grid3)) {
        alert("Player 1 won!");
        gameActive = false;}
    if (checkWinNormalP1(grid4)) {
        alert("Player 1 won!");
        gameActive = false; }
    if (checkWinNormalP1(grid5)) {
        alert("Player 1 won!");
        gameActive = false; }
    if (checkWinNormalP1(grid6)) {
        alert("Player 1 won!");
        gameActive = false;}
    if (checkWinNormalP1(grid7)) {
        alert("Player 1 won!");
        gameActive = false; }
    if (checkWinNormalP1(grid8)) {
        alert("Player 1 won!");
        gameActive = false; }
    //check win of player 2
    if (checkWinNormalP2(grid1)) {
        alert("Player 2 won!");
        gameActive = false;}
    if (checkWinNormalP2(grid2)) {
        alert("Player 2 won!");
        gameActive = false;}
    if (checkWinNormalP2(grid3)) {
        alert("Player 2 won!");
        gameActive = false;}
    if (checkWinNormalP2(grid4)) {
        alert("Player 2 won!");
        gameActive = false;}
    if (checkWinNormalP2(grid5)) {
        alert("Player 2 won!"); 
        gameActive = false;}
    if (checkWinNormalP2(grid6)) {
        alert("Player 2 won!");
        gameActive = false;}
    if (checkWinNormalP2(grid7)) {
        alert("Player 2 won!");
        gameActive = false;}
    if (checkWinNormalP2(grid8)) {
        alert("Player 2 won!");
        gameActive = false;}
}

function checkWinNormalP1(grid) {
    
    /*for (let i = 0; i < 9; i++) {
        if (currentGridP1[i] != grid[i]) {
            return false;
        }
    }
    return true;*/
    let array = new let[9];
    let counter = 0;
    for (let i = 0; i < 9; i++) {
        if (grid[i] == 1) {
            array[counter] = i;
            counter++;
        }
    }
    for (let index = 0; index < 9; index++) {
        if (currentGridP1[array[index]] != 1) {
            return false;
        } 
    }
    return true;
}
function checkWinNormalP2(grid) {
    
    for (let i = 0; i < 9; i++) {
        if (currentGridP2[i] != grid[i]) {
            return false;
        }
    }
    return true;
}

function reset() {
    isTurn = true;
    f1.classList.remove("tileClickedP1");
    f1.classList.remove("tileClickedP2");

    f2.classList.remove("tileClickedP1");
    f2.classList.remove("tileClickedP2");

    f3.classList.remove("tileClickedP1");
    f3.classList.remove("tileClickedP2");

    f4.classList.remove("tileClickedP1");
    f4.classList.remove("tileClickedP2");

    f5.classList.remove("tileClickedP1");
    f5.classList.remove("tileClickedP2");

    f6.classList.remove("tileClickedP1");
    f6.classList.remove("tileClickedP2");

    f7.classList.remove("tileClickedP1");
    f7.classList.remove("tileClickedP2");

    f8.classList.remove("tileClickedP1");
    f8.classList.remove("tileClickedP2");

    f9.classList.remove("tileClickedP1");
    f9.classList.remove("tileClickedP2");

    currentGridP1 = [0,0,0,
                     0,0,0,
                     0,0,0];

    currentGridP2 = [0,0,0,
                     0,0,0,
                     0,0,0];
}