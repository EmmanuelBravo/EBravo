var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

canvas.width = 1366;
canvas.height = 768;

function Box() {
	this.x = 10,
	this.y = 10,
	this.width = 100,
	this.height = 100
};

var box = new Box();
var boxes= [];
var totalBoxes= 100;


function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	
		boxes.forEach (function(box, i) {
 			context.fillStyle = box.color ;	
 			context.fillRect(box.x, box.y, box.width, box.height);

 });
}
 	
function update() {
 	
 	boxes.forEach (function (box, i) {
 
 		box.x += randomNumero( -20 , 25);
 		box.y += randomNumero(-20 ,25);
 		}
 	);
 };



for (var i=0; i<totalBoxes ; i++) {
	
	boxes[i]= new Box();
	boxes[i].color= randomColor(0 , 255 , 0 , 255 ,0 , 255 , .5);
}

function randomNumero(min,max) {
	return Math.round(Math.random() * (max - min + 1) + min
		);

}

function randomColor(rmin, rmax, gmin, gmax, bmin, bmax, alpha) {
	var r = randomNumero(rmin , rmax);
	var g = randomNumero(gmin , gmax);
	var b = randomNumero(bmin , bmax);
	return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';

}

function loop() {
	update();
	draw ();
	window.requestAnimationFrame(loop);
};

loop();

