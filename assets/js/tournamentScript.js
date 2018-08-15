socket.on("setWinner", (classname) => {
	console.log(classname)
	switch(classname) {
		case "first-left":
			firstLeft(true);
			break;
		case "first-right":
			firstRight(true);
			break;
		case "second-left":
			secondLeft(true);
			break;
		case "second-right":
			secondRight(true);
			break;
		case "third-left":
			thirdLeft(true);
			break;
		case "third-right":
			thirdRight(true);
			break;
		case "fourth-left":
			fourthLeft(true);
			break;
		case "fourth-right":
			fourthRight(true);
			break;
		case "fifth-left":
			fifthLeft(true);
			break;
		case "fifth-right":
			fifthRight(true);
			break;
	}
});

firstLeft = function(bool) {
	if(bool) {
		$('div.first-left').css({
			'borderColor':'red'
		});
		$('div.third-right').css({
			'borderRight':'solid 5px red'
		});
	} else {
		$('div.first-left').css({
			'borderColor':'black'
		});
		$('div.third-right').css({
			'borderRight':'solid 5px black'
		});
	}
};

firstRight = function(bool) {
	if(bool) {
		$('div.first-right').css({
			'borderColor':'red'
		});
		$('div.third-right').css({
			'borderRight':'solid 5px red'
		});
	} else {
		$('div.first-right').css({
			'borderColor':'black'
		});
		$('div.third-right').css({
			'borderRight':'solid 5px black'
		});
	}
};


secondLeft = function(bool) {
	if(bool) {
		$('div.second-left').css({
			'borderColor':'red'
		});
		$('div.fourth-left').css({
			'borderLeft':'solid 5px red'
		});
	} else {
		$('div.second-left').css({
			'borderColor':'black'
		});
		$('div.fourth-left').css({
			'borderLeft':'solid 5px black'
		});
	}
};

secondRight = function(bool) {
	if(bool) {
		$('div.second-right').css({
			'borderColor':'red'
		});
		$('div.fourth-left').css({
			'borderLeft':'solid 5px red'
		});
	} else {
		$('div.second-right').css({
			'borderColor':'black'
		});
		$('div.fourth-left').css({
			'borderLeft':'solid 5px black'
		});
	}
};

thirdLeft = function(bool) {
	if(bool) {
		$('div.third-left').css({
			'borderColor':'red'
		});
		$('div.fifth-left').css({
			'borderLeft':'solid 5px red'
		});
	} else {
		$('div.third-left').css({
			'borderColor':'black'
		});
		$('div.fifth-left').css({
			'borderLeft':'solid 5px black'
		});
	}
};

thirdRight = function(bool) {
	if(bool) {
		$('div.third-right').css({
			'borderColor':'red'
		});
		$('div.fifth-left').css({
			'borderLeft':'solid 5px red'
		});
	} else {
		$('div.third-right').css({
			'borderColor':'black'
		});
		$('div.fifth-left').css({
			'borderLeft':'solid 5px black'
		});
	}
};

fourthLeft = function(bool) {
	if(bool) {
		$('div.fourth-left').css({
			'borderColor':'red'
		});
		$('div.fifth-right').css({
			'borderRight':'solid 5px red'
		});
	} else {
		$('div.fourth-left').css({
			'borderColor':'black'
		});
		$('div.fifth-right').css({
			'borderRight':'solid 5px black'
		});
	}
};

fourthRight = function(bool) {
	if(bool) {
		$('div.fourth-right').css({
			'borderColor':'red'
		});
		$('div.fifth-right').css({
			'borderRight':'solid 5px red'
		});
	} else {
		$('div.fourth-right').css({
			'borderColor':'black'
		});
		$('div.fifth-right').css({
			'borderRight':'solid 5px black'
		});
	}
};

fifthLeft = function(bool) {
	if(bool) {
		$('div.fifth-left').css({
			'borderColor':'red'
		});
		$('div.winner').css({
			'borderLeft':'solid 5px red'
		});
	} else {
		$('div.fifth-left').css({
			'borderColor':'black'
		});
		$('div.winner').css({
			'borderLeft':'solid 5px black'
		});
	}
};

fifthRight = function(bool) {
	if(bool) {
		$('div.fifth-right').css({
			'borderColor':'red'
		});
		$('div.winner').css({
			'borderLeft':'solid 5px red'
		});
	} else {
		$('div.fifth-right').css({
			'borderColor':'black'
		});
		$('div.winner').css({
			'borderLeft':'solid 5px black'
		});
	}
};

