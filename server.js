var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var NodeWebcam = require('node-webcam');


var ip = "192.168.11.3";
var port = "3000"

var local_socket_id;

var player1 = "";
var player2 = "";

var nextDollyTime = "";
var nextCC2018time = "";

var first_prize = "";
var second_prize = "";
var design_prize = "";

var participants = [
	"山口一郎", "山口二郎", "山口三郎", "山口四郎", "山口五郎", "山口六郎"
]

var tournament = [
	[false, false],
	[false, false],
	[false, false],
	[false, false],
	[false, false]
]

app.use(express.static("assets"));

io.on('connection', (socket) => {

	if(socket.handshake.address == ("::ffff:" + ip)) {
		local_socket_id = socket.id;
		console.log(local_socket_id);
	}

	socket.on('transition', (fileName) => {
		var url = "http://" + ip + ":" + port + "/" + fileName + ".html";
		var url_local = "http://" + ip + ":" + port + "/" + fileName + "_local.html";

		console.log(url);

		if(fileName == "streaming") {
			io.emit('changeURL', url);
			io.to(local_socket_id).emit('changeURL', url_local);
			io.emit('getPlayer1', player1);
		} else {
			io.emit('changeURL', url);
		}
	});

	socket.on('nextSlide', () => {
		io.emit('nextSlide', "");
	});

	socket.on('prevSlide', () => {
		io.emit('prevSlide', "");
	});

	socket.on('setPlayer1', (name) => {
		player1 = name;
		console.log(player1);
		io.emit('getPlayer1', player1);
	});

	socket.on('getPlayer1', () => {
		io.emit('getPlayer1', player1);
	});

	socket.on('setPlayer2', (name) => {
		player2 = name;
		console.log(player2);
		io.emit('getPlayer2', player2);
	});

	socket.on('getPlayer2', () => {
		io.emit('getPlayer2', player2);
	});

	socket.on('battleStart', () => {
		io.emit('battleStart');
	});

	socket.on('battleExtend', () => {
		io.emit('battleExtend');
	});

	socket.on('setNextTime', (time) => {
		nextDollyTime = time.dolly;
		nextCC2018time = time.cc2018;

		console.log("dolly", nextDollyTime);
		console.log("cc2018", nextCC2018time);

		io.emit('getNextTime', {dolly : nextDollyTime, cc2018 : nextCC2018time});
	});

	socket.on('getNextTime', () => {
		io.emit('getNextTime', {dolly : nextDollyTime, cc2018 : nextCC2018time});
	});

	socket.on('setFirstPrizeName', (name) => {
		first_prize = name;
		io.emit('getFirstPrizeName', first_prize);
	});

	socket.on('getFirstPrizeName', () => {
		io.emit('getFirstPrizeName', first_prize);
	});

	socket.on('setSecondPrizeName', (name) => {
		second_prize = name;
		io.emit('getSecondPrizeName', second_prize);
	});

	socket.on('getSecondPrizeName', () => {
		io.emit('getSecondPrizeName', second_prize);
	});

	socket.on('setDesignPrizeName', (name) => {
		design_prize = name;
		io.emit('getDesignPrizeName', design_prize);
	});

	socket.on('getDesignPrizeName', () => {
		io.emit('getDesignPrizeName', design_prize);
	});

	socket.on('setParticipants', (p) => {
		participants = p;

		io.emit('getParticipants', participants);
	})

	socket.on('getParticipants', () => {
		io.emit('getParticipants', participants);
	})

	socket.on('setWinner', (classname) => {
		console.log(classname);
		io.emit('setWinner', classname);
	});

	socket.on('setWinlog', (log) => {
		console.log(log);
		tournament[log.battleNum][log.LR] = !tournament[log.battleNum][log.LR]
		console.log(tournament);

		io.emit('getWinlog', tournament);
	});

	socket.on('getWinlog', () => {
		console.log(tournament);
		io.emit('getWinlog', tournament);
	})

	socket.on('clearTournament', () => {
		tournament = [
			[false, false],
			[false, false],
			[false, false],
			[false, false],
			[false, false]
		];
		console.log(tournament)

		io.emit('getWinlog', tournament);
		// io.emit('getWinlog', tournament);
	})
});

server.on('listening', () => {
	console.log('listening on 3000');
	console.log('IP Address : ', ip);
});

server.listen(3000);