/*LEVEL 01 E 02*/
function init(robot) {
	console.log("ROBÔ INICIALIZANDO...");
}

function loop(robot) {
	console.log("ROBÔ EM LOOPING...");
	robot.action = {type: 'move', amount: 40};
}

/*LEVEL 03*/
function init(robot) {
	robot.jumpNext = true;
}

function loop(robot) {
	if (robot.jumpNext) {
		robot.action = {type: 'jump', amount: 10};
		robot.jumpNext = false;
	} else {
		robot.action = {type: 'move', amount: 40};
		robot.jumpNext = true;
	}
}

/*LEVEL 04*/
function loop(robot) {
	if (400 < robot.info().x  && robot.info().x < 500) {
		robot.action = {type: 'jump', amount: 10};
	} else {
		robot.action = {type: 'move', amount: 40};
	}
}

/*LEVEL 05*/
function loop(robot) {
	let robotX = robot.info().x;
	let landmarks = [360, 500, 560, 760];
  
  	robot.action = {type: 'move', amount: 40};
 	if (landmarks[0] < robotX && robotX < landmarks[1] ||
		 landmarks[2] < robotX && robotX < landmarks[3]) {
      	robot.action = {type: 'jump', amount: 10};
	}
}

/*LEVEL 06*/
function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins % 2 == 1) {
		robot.action.amount = -40;
	}
}

/*LEVEL 07*/
function init(robot) {
	robot.oldCoins = 0;
	robot.oldEnergy = 100;
}

function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins > robot.oldCoins ||
		 robot.info().energy > robot.oldEnergy) {
		robot.action = {type: 'jump', amount: 10};
	}
	robot.oldCoins = robot.info().coins;
	robot.oldEnergy = robot.info().energy;
} 

/*LEVEL 08*/
function init(robot) {
	robot.iterationsAfterCoin = 0;
}

function loop(robot) {
	if (robot.iterationsAfterCoin > 4) {
		robot.action = {type: 'jump', amount: 10};
	}
	if (robot.info().coins > 0) {
		robot.iterationsAfterCoin++;
	}
}