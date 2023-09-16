let gameActive = true;
let gameMode = "nor"; //either normal (nor) or advanced (adv)
let counter = 0; //counting all made clicked fields
//Player
let player = {
	name: "",
	id: "",
	inventory: {
		i1: [1, 1],
		i2: [2, 2],
		i3: [3, 3],
	},
};
let player1 = player;
let player2 = player;
//let player1 = [3, 3, 2, 2, 1, 1]; //inventory of player 1 for advanced game mode
//let player2 = [3, 3, 2, 2, 1, 1]; //inventory of player 2 for advanced game mode
let currentMoveP1 = 1; //current selected item from the moves inventory
let currentMoveP2 = 1;
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
let currentGridP1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let currentGridP2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//status bar
let statusBarP1 = document.querySelector(".statusBarP1");
let statusBarP2 = document.querySelector(".statusBarP2");
statusBarP2.classList.add("hide");

//items
let p1Item3_1 = document.querySelector(".p1Item3_1");
let p1Item3_2 = document.querySelector(".p1Item3_2");
let p1Item2_1 = document.querySelector(".p1Item2_1");
let p1Item2_2 = document.querySelector(".p1Item2_2");
let p1Item1_1 = document.querySelector(".p1Item1_1");
let p1Item1_2 = document.querySelector(".p1Item1_2");
let p2Item3_1 = document.querySelector(".p2Item3_1");
let p2Item3_2 = document.querySelector(".p2Item3_2");
let p2Item2_1 = document.querySelector(".p2Item2_1");
let p2Item2_2 = document.querySelector(".p2Item2_2");
let p2Item1_1 = document.querySelector(".p2Item1_1");
let p2Item1_2 = document.querySelector(".p2Item1_2");
//These itembuttons shall be disabled after clicking a field
let itemToDisableP1 = p1Item1_1;
let itemToDisableP2 = p2Item1_1;

let allItems = document.querySelectorAll(".item");
setMode("nor");

//set the game mod
function setMode(mode) {
	reset();
	if (mode == "nor") {
		document.title = "TicTacToe";
		document.getElementById("header1").textContent = "TicTacToe";
		allItems.forEach((item) => {
			if (item.classList != "hide") item.classList.add("hide");
		});
	}
	if (mode == "adv") {
		document.title = "TicTacToe Advanced";
		document.getElementById("header1").textContent = "TicTacToe Advanced";
		allItems.forEach((item) => {
			item.classList.remove("hide");
		});
		p1Item1_1.classList.add("setP1move");
		p2Item1_1.classList.add("setP2move");
	}
	gameMode = mode;
}

function setMove(p, n) {
	//p for player and n for the item selected
	if (p === "p1") {
		removeClassFromAllElements("setP1move");
		switch (n) {
			case 3.1:
				p1Item3_1.classList.add("setP1move");
				currentMoveP1 = 3;
				itemToDisableP1 = p1Item3_1;
				break;
			case 3.2:
				p1Item3_2.classList.add("setP1move");
				currentMoveP1 = 3;
				itemToDisableP1 = p1Item3_2;
				break;
			case 2.1:
				p1Item2_1.classList.add("setP1move");
				currentMoveP1 = 2;
				itemToDisableP1 = p1Item2_1;
				break;
			case 2.2:
				p1Item2_2.classList.add("setP1move");
				currentMoveP1 = 2;
				itemToDisableP1 = p1Item2_2;
				break;
			case 1.1:
				p1Item1_1.classList.add("setP1move");
				currentMoveP1 = 1;
				itemToDisableP1 = p1Item1_1;
				break;
			case 1.2:
				p1Item1_2.classList.add("setP1move");
				currentMoveP1 = 1;
				itemToDisableP1 = p1Item1_2;
				break;
			default:
				break;
		}
	} else {
		removeClassFromAllElements("setP2move");
		switch (n) {
			case 3.1:
				p2Item3_1.classList.add("setP2move");
				currentMoveP2 = 3;
				itemToDisableP2 = p2Item3_1;
				break;
			case 3.2:
				p2Item3_2.classList.add("setP2move");
				currentMoveP2 = 3;
				itemToDisableP2 = p2Item3_2;
				break;
			case 2.1:
				p2Item2_1.classList.add("setP2move");
				currentMoveP2 = 2;
				itemToDisableP2 = p1Item2_1;
				break;
			case 2.2:
				p2Item2_2.classList.add("setP2move");
				currentMoveP2 = 2;
				itemToDisableP2 = p2Item2_2;
				break;
			case 1.1:
				p2Item1_1.classList.add("setP2move");
				currentMoveP2 = 1;
				itemToDisableP2 = p2Item1_1;
				break;
			case 1.2:
				p2Item1_2.classList.add("setP2move");
				currentMoveP2 = 1;
				itemToDisableP2 = p2Item1_2;
				break;
			default:
				break;
		}
	}
}
//function takes item from player
/*function takeItem(p, item) {
	if (p === "p1") {
		//for player 1
		for (let index = 0; index < player1.length; index++) {
			if (player1[index] != null && player1[index] == item) {
				player1[index] == null;
				return true;
			}
		}
		return false;
	} else {
		//for player 2
		for (let index = 0; index < player2.length; index++) {
			if (player2[index] != null && player2[index] == item) {
				player2[index] == null;
				return true;
			}
		}
		return false;
	}
}*/

//function takes item from player and returns it
function getItem(p) {
	if (p != null) {
		if (p === "p1") {
			//player 1
			switch (currentMoveP1) {
				case 1:
					if (player1.inventory.i1[0] == 1) {
						//Checks for items in array
						player1.inventory.i1[0] = 0;
						return 1;
					} else if (player1.inventory.i1[1] == 1) {
						player1.inventory.i1[1] = 0;
						return 1;
					}
					break;
				case 2:
					if (player1.inventory.i2[0] == 2) {
						//Checks for items in array
						player1.inventory.i2[0] = 0;
						return 2;
					} else if (player1.inventory.i1[1] == 2) {
						player1.inventory.i2[1] = 0;
						return 2;
					}
					break;
				case 3:
					if (player1.inventory.i3[0] == 3) {
						//Checks for items in array
						player1.inventory.i3[0] = 0;
						return 3;
					} else if (player1.inventory.i3[1] == 3) {
						player1.inventory.i3[1] = 0;
						return 3;
					}
					break;
			}
			return 0;
		} else {
			//player 2
			switch (currentMoveP2) {
				case 1:
					if (player2.inventory.i1[0] == 1) {
						//Checks for items in array
						player2.inventory.i1[0] = 0;
						return 1;
					} else if (player1.inventory.i1[1] == 1) {
						player2.inventory.i1[1] = 0;
						return 1;
					}
					break;
				case 2:
					if (player2.inventory.i2[0] == 2) {
						//Checks for items in array
						player2.inventory.i2[0] = 0;
						return 2;
					} else if (player2.inventory.i2[1] == 2) {
						player2.inventory.i2[1] = 0;
						return 2;
					}
					break;
				case 3:
					if (player2.inventory.i3[0] == 3) {
						//Checks for items in array
						player2.inventory.i3[0] = 0;
						return 3;
					} else if (player2.inventory.i3[1] == 3) {
						player2.inventory.i3[1] = 0;
						return 3;
					}
					break;
			}
			return 0;
		}
	}
}

//firstly animate the clicked tile and then log it into the system
function clickTile(tile) {
	console.log(currentGridP1);
	if (gameActive) {
		counter++;

		if (isTurn) {
			statusBarP1.classList.add("hide"); //animating statusbars
			statusBarP2.classList.remove("hide");

			switch (tile) {
				case "f1":
					if (gameMode == "nor") {
						//checking the gamemode
						currentGridP1[0] = 1; //normally reserving the field
						if (f1.classList != "tileClickedP1") {
							f1.classList.add("tileClickedP1"); //coloring tile
						}
					} else {
						//advanced mode
						if (getItem("p1") != 0 && currentGridP2[0] < currentMoveP1) {
							//check for item availability
							currentGridP1[0] = currentMoveP1;
							itemToDisableP1.classList.add("setDisabled");
							//coloring tile
							if (f1.classList != "tileClickedP1") {
								f1.classList.add("tileClickedP1"); //
							}
						} else {
							//item could not be used --> decision which error happened
							if (currentGridP2[0] >= currentMoveP1) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f2":
					if (gameMode == "nor") {
						currentGridP1[1] = 1;
						if (f2.classList != "tileClickedP1") {
							f2.classList.add("tileClickedP1");
						}
					} else {
						if (getItem("p1") != 0 && currentGridP2[1] < currentMoveP1) {
							//if (takeItem("p1", currentMoveP1) && currentGridP2[1] < currentMoveP1) {
							currentGridP1[1] = currentMoveP1;
							itemToDisableP1.classList.add("setDisabled");
							if (f2.classList != "tileClickedP1") {
								f2.classList.add("tileClickedP1");
							}
						} else {
							if (currentGridP2[1] >= currentMoveP1) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f3":
					if (gameMode == "nor") {
						currentGridP1[2] = 1;
						if (f3.classList != "tileClickedP1") {
							f3.classList.add("tileClickedP1");
						}
					} else {
						if (getItem("p1") != 0 && currentGridP2[2] < currentMoveP1) {
							//if (takeItem("p1", currentMoveP1) && currentGridP2[2] < currentMoveP1) {
							currentGridP1[2] = currentMoveP1;
							itemToDisableP1.classList.add("setDisabled");
							if (f3.classList != "tileClickedP1") {
								f3.classList.add("tileClickedP1");
							}
						} else {
							if (currentGridP2[2] >= currentMoveP1) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f4":
					if (gameMode == "nor") {
						currentGridP1[3] = 1;
						if (f4.classList != "tileClickedP1") {
							f4.classList.add("tileClickedP1");
						}
					} else {
						if (getItem("p1") != 0 && currentGridP2[3] < currentMoveP1) {
							//if (takeItem("p1", currentMoveP1) && currentGridP2[3] < currentMoveP1) {
							currentGridP1[3] = currentMoveP1;
							itemToDisableP1.classList.add("setDisabled");
							if (f4.classList != "tileClickedP1") {
								f4.classList.add("tileClickedP1");
							}
						} else {
							if (currentGridP2[3] >= currentMoveP1) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f5":
					if (gameMode == "nor") {
						currentGridP1[4] = 1;
						if (f5.classList != "tileClickedP1") {
							f5.classList.add("tileClickedP1");
						}
					} else {
						if (getItem("p1") != 0 && currentGridP2[4] < currentMoveP1) {
							//if (takeItem("p1", currentMoveP1) && currentGridP2[4] < currentMoveP1) {
							currentGridP1[4] = currentMoveP1;
							itemToDisableP1.classList.add("setDisabled");
							if (f5.classList != "tileClickedP1") {
								f5.classList.add("tileClickedP1");
							}
						} else {
							if (currentGridP2[4] >= currentMoveP1) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f6":
					if (gameMode == "nor") {
						currentGridP1[5] = 1;
						if (f6.classList != "tileClickedP1") {
							f6.classList.add("tileClickedP1");
						}
					} else {
						if (getItem("p1") != 0 && currentGridP2[5] < currentMoveP1) {
							//if (takeItem("p1", currentMoveP1) && currentGridP2[5] < currentMoveP1) {
							currentGridP1[5] = currentMoveP1;
							itemToDisableP1.classList.add("setDisabled");
							if (f6.classList != "tileClickedP1") {
								f6.classList.add("tileClickedP1");
							}
						} else {
							if (currentGridP2[5] >= currentMoveP1) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f7":
					if (gameMode == "nor") {
						currentGridP1[6] = 1;
						if (f7.classList != "tileClickedP1") {
							f7.classList.add("tileClickedP1");
						}
					} else {
						if (getItem("p1") != 0 && currentGridP2[6] < currentMoveP1) {
							//if (takeItem("p1", currentMoveP1) && currentGridP2[6] < currentMoveP1) {
							currentGridP1[6] = currentMoveP1;
							itemToDisableP1.classList.add("setDisabled");
							if (f7.classList != "tileClickedP1") {
								f7.classList.add("tileClickedP1");
							}
						} else {
							if (currentGridP2[6] >= currentMoveP1) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f8":
					if (gameMode == "nor") {
						currentGridP1[7] = 1;
						if (f8.classList != "tileClickedP1") {
							f8.classList.add("tileClickedP1");
						}
					} else {
						if (getItem("p1") != 0 && currentGridP2[7] < currentMoveP1) {
							//if (takeItem("p1", currentMoveP1) && currentGridP2[7] < currentMoveP1) {
							currentGridP1[7] = currentMoveP1;
							itemToDisableP1.classList.add("setDisabled");
							if (f8.classList != "tileClickedP1") {
								f8.classList.add("tileClickedP1");
							}
						} else {
							if (currentGridP2[7] >= currentMoveP1) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f9":
					if (gameMode == "nor") {
						currentGridP1[8] = 1;
						if (f9.classList != "tileClickedP1") {
							f9.classList.add("tileClickedP1");
						}
					} else {
						if (getItem("p1") != 0 && currentGridP2[8] < currentMoveP1) {
							//if (takeItem("p1", currentMoveP1) && currentGridP2[8] < currentMoveP1) {
							currentGridP1[8] = currentMoveP1;
							itemToDisableP1.classList.add("setDisabled");
							if (f9.classList != "tileClickedP1") {
								f9.classList.add("tileClickedP1");
							}
						} else {
							if (currentGridP2[8] >= currentMoveP1) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
			}
			isTurn = false;
		} else {
			//Turn for player 2
			statusBarP2.classList.add("hide"); //animating statusbars
			statusBarP1.classList.remove("hide");

			switch (tile) {
				case "f1":
					if (gameMode == "nor") {
						currentGridP2[0] = 1;
						if (f1.classList != "tileClickedP2") {
							f1.classList.add("tileClickedP2");
						}
					} else {
						if (getItem("p2") != 0 && currentGridP1[0] < currentMoveP2) {
							//takeItem("p2", currentMoveP2);
							currentGridP2[0] = currentMoveP2;
							itemToDisableP2.classList.add("setDisabled");
							if (f1.classList != "tileClickedP2") {
								f1.classList.add("tileClickedP2");
							}
						} else {
							if (currentGridP1[0] >= currentMoveP2) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;

				case "f2":
					if (gameMode == "nor") {
						currentGridP2[1] = 1;
						if (f2.classList != "tileClickedP2") {
							f2.classList.add("tileClickedP2");
						}
					} else {
						if (getItem("p2") != 0 && currentGridP1[1] < currentMoveP2) {
							currentGridP2[1] = currentMoveP2;
							itemToDisableP2.classList.add("setDisabled");
							//takeItem("p2", currentMoveP2);
							if (f2.classList != "tileClickedP2") {
								f2.classList.add("tileClickedP2");
							}
						} else {
							if (currentGridP1[1] >= currentMoveP2) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f3":
					if (gameMode == "nor") {
						currentGridP2[2] = 1;
						if (f3.classList != "tileClickedP2") {
							f3.classList.add("tileClickedP2");
						}
					} else {
						if (getItem("p2") != 0 && currentGridP1[2] < currentMoveP2) {
							currentGridP2[2] = currentMoveP2;
							itemToDisableP2.classList.add("setDisabled");
							//takeItem("p2", currentMoveP2);
							if (f3.classList != "tileClickedP2") {
								f3.classList.add("tileClickedP2");
							}
						} else {
							if (currentGridP1[2] >= currentMoveP2) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f4":
					if (gameMode == "nor") {
						currentGridP2[3] = 1;
						if (f4.classList != "tileClickedP2") {
							f4.classList.add("tileClickedP2");
						}
					} else {
						if (getItem("p2") != 0 && currentGridP1[3] < currentMoveP2) {
							currentGridP2[3] = currentMoveP2;
							itemToDisableP2.classList.add("setDisabled");
							//takeItem("p2", currentMoveP2);
							if (f4.classList != "tileClickedP2") {
								f4.classList.add("tileClickedP2");
							}
						} else {
							if (currentGridP1[3] >= currentMoveP2) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f5":
					if (gameMode == "nor") {
						currentGridP2[4] = 1;
						if (f5.classList != "tileClickedP2") {
							f5.classList.add("tileClickedP2");
						}
					} else {
						if (getItem("p2") != 0 && currentGridP1[4] < currentMoveP2) {
							currentGridP2[4] = currentMoveP2;
							itemToDisableP2.classList.add("setDisabled");
							//takeItem("p2", currentMoveP2);
							if (f5.classList != "tileClickedP2") {
								f5.classList.add("tileClickedP2");
							}
						} else {
							if (currentGridP1[4] >= currentMoveP2) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f6":
					if (gameMode == "nor") {
						currentGridP2[5] = 1;
						if (f6.classList != "tileClickedP2") {
							f6.classList.add("tileClickedP2");
						}
					} else {
						if (getItem("p2") != 0 && currentGridP1[5] < currentMoveP2) {
							currentGridP2[5] = currentMoveP2;
							itemToDisableP2.classList.add("setDisabled");
							//takeItem("p2", currentMoveP2);
							if (f6.classList != "tileClickedP2") {
								f6.classList.add("tileClickedP2");
							}
						} else {
							if (currentGridP1[5] >= currentMoveP2) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f7":
					if (gameMode == "nor") {
						currentGridP2[6] = 1;
						if (f7.classList != "tileClickedP2") {
							f7.classList.add("tileClickedP2");
						}
					} else {
						if (getItem("p2") != 0 && currentGridP1[6] < currentMoveP2) {
							currentGridP2[6] = currentMoveP2;
							itemToDisableP2.classList.add("setDisabled");
							//takeItem("p2", currentMoveP2);
							if (f7.classList != "tileClickedP2") {
								f7.classList.add("tileClickedP2");
							}
						} else {
							if (currentGridP1[6] >= currentMoveP2) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f8":
					if (gameMode == "nor") {
						currentGridP2[7] = 1;
						if (f8.classList != "tileClickedP2") {
							f8.classList.add("tileClickedP2");
						}
					} else {
						if (getItem("p2") != 0 && currentGridP1[7] < currentMoveP2) {
							currentGridP2[7] = currentMoveP2;
							itemToDisableP2.classList.add("setDisabled");
							//takeItem("p2", currentMoveP2);
							if (f8.classList != "tileClickedP2") {
								f8.classList.add("tileClickedP2");
							}
						} else {
							if (currentGridP1[7] >= currentMoveP2) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
				case "f9":
					if (gameMode == "nor") {
						currentGridP2[8] = 1;
						if (f9.classList != "tileClickedP2") {
							f9.classList.add("tileClickedP2");
						}
					} else {
						if (getItem("p2") != 0 && currentGridP1[8] < currentMoveP2) {
							currentGridP2[0] = currentMoveP2;
							itemToDisableP2.classList.add("setDisabled");
							//takeItem("p2", currentMoveP2);
							if (f9.classList != "tileClickedP2") {
								f9.classList.add("tileClickedP2");
							}
						} else {
							if (currentGridP1[8] >= currentMoveP2) {
								alert("Can not take this field!");
							} else {
								alert("Item has already been used!");
							}
							return;
						}
					}
					break;
			}
			isTurn = true;
		}

		//check win functions
		if (gameMode == "nor") {
			if (checkWinNormalP1()) {
				alert("Player 1 won!");
				gameActive = false;
			} else if (checkWinNormalP2()) {
				alert("Player 2 won!");
				gameActive = false;
			}
			if (counter == 9 && gameActive) {
				itsTied();
			}
		} else {
			if (checkWinAdvP1()) {
				alert("Player 1 won!");
				gameActive = false;
			} else if (checkWinAdvP2()) {
				alert("Player 2 won!");
				gameActive = false;
			}
			if (counter == 9 && gameActive) {
				itsTied();
			}
		}
	}
}

//Tied alarm
function itsTied() {
	gameActive = false;
	alert("Tied!");
}
//win check algorithms for normal mode
function checkWinNormalP1() {
	let check1, check2, check3;

	for (let i = 0; i <= 8; i++) {
		if (currentGridP1[check1] && currentGridP1[check2] && currentGridP1[check3]) {
			return true;
		} else if (i == 0) {
			check1 = 0;
			check2 = 1;
			check3 = 2;
		} else if (i == 1) {
			check1 = 3;
			check2 = 4;
			check3 = 5;
		} else if (i == 2) {
			check1 = 6;
			check2 = 7;
			check3 = 8;
		} else if (i == 3) {
			check1 = 0;
			check2 = 3;
			check3 = 6;
		} else if (i == 4) {
			check1 = 1;
			check2 = 4;
			check3 = 7;
		} else if (i == 5) {
			check1 = 2;
			check2 = 5;
			check3 = 8;
		} else if (i == 6) {
			check1 = 0;
			check2 = 4;
			check3 = 8;
		} else if (i == 7) {
			check1 = 2;
			check2 = 4;
			check3 = 6;
		}
	}
}
function checkWinNormalP2() {
	let check1, check2, check3;

	for (let i = 0; i <= 8; i++) {
		if (currentGridP2[check1] && currentGridP2[check2] && currentGridP2[check3]) {
			return true;
		} else if (i == 0) {
			check1 = 0;
			check2 = 1;
			check3 = 2;
		} else if (i == 1) {
			check1 = 3;
			check2 = 4;
			check3 = 5;
		} else if (i == 2) {
			check1 = 6;
			check2 = 7;
			check3 = 8;
		} else if (i == 3) {
			check1 = 0;
			check2 = 3;
			check3 = 6;
		} else if (i == 4) {
			check1 = 1;
			check2 = 4;
			check3 = 7;
		} else if (i == 5) {
			check1 = 2;
			check2 = 5;
			check3 = 8;
		} else if (i == 6) {
			check1 = 0;
			check2 = 4;
			check3 = 8;
		} else if (i == 7) {
			check1 = 2;
			check2 = 4;
			check3 = 6;
		}
	}
}

//win check algorithms for advanced mode
function checkWinAdvP1() {
	//row 1
	let check1 = 1;
	let check2 = 1;
	let check3 = 1;

	for (let i = 0; i <= 8; i++) {
		//i stands for the varieties to win
		if (currentGridP1[check1] > 0 && currentGridP1[check2] > 0 && currentGridP1[check3] > 0) {
			return true;
		} else if (i == 0) {
			check1 = 0;
			check2 = 1;
			check3 = 2;
		} else if (i == 1) {
			check1 = 3;
			check2 = 4;
			check3 = 5;
		} else if (i == 2) {
			check1 = 6;
			check2 = 7;
			check3 = 8;
		} else if (i == 3) {
			check1 = 0;
			check2 = 3;
			check3 = 6;
		} else if (i == 4) {
			check1 = 1;
			check2 = 4;
			check3 = 7;
		} else if (i == 5) {
			check1 = 2;
			check2 = 5;
			check3 = 8;
		} else if (i == 6) {
			check1 = 0;
			check2 = 4;
			check3 = 8;
		} else if (i == 7) {
			check1 = 2;
			check2 = 4;
			check3 = 6;
		}
	}
}

function checkWinAdvP2() {
	//rows
	let check1 = 1;
	let check2 = 1;
	let check3 = 1;

	for (let i = 0; i <= 8; i++) {
		if (currentGridP2[check1] > 0 && currentGridP2[check2] > 0 && currentGridP2[check3] > 0) {
			return true;
		} else if (i == 0) {
			check1 = 0;
			check2 = 1;
			check3 = 2;
		} else if (i == 1) {
			check1 = 3;
			check2 = 4;
			check3 = 5;
		} else if (i == 2) {
			check1 = 6;
			check2 = 7;
			check3 = 8;
		} else if (i == 3) {
			check1 = 0;
			check2 = 3;
			check3 = 6;
		} else if (i == 4) {
			check1 = 1;
			check2 = 4;
			check3 = 7;
		} else if (i == 5) {
			check1 = 2;
			check2 = 5;
			check3 = 8;
		} else if (i == 6) {
			check1 = 0;
			check2 = 4;
			check3 = 8;
		} else if (i == 7) {
			check1 = 2;
			check2 = 4;
			check3 = 6;
		}
	}
}

function reset() {
	gameActive = true;
	isTurn = true;
	counter = 0;
	
	if (statusBarP2.classList != "hide") statusBarP2.classList.add("hide");
	statusBarP1.classList.remove("hide");

	currentGridP1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	currentGridP2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	player1 = player;
	player2 = player;

	removeClassFromAllElements("setP1move");
	removeClassFromAllElements("setP2move");
	removeClassFromAllElements("setDisabled");
	removeClassFromAllElements("tileClickedP1");
	removeClassFromAllElements("tileClickedP2");
}
// Remove a class from all elements
function removeClassFromAllElements(className) {
	const elements = document.querySelectorAll("." + className);
	elements.forEach(function (element) {
		element.classList.remove(className);
	});
}
