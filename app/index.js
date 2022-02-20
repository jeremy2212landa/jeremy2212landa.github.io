import {App} from "./App.js";

console.log(App());

let mainevent = document.getElementById('logo');

document.addEventListener('click', (e) => {
  if (!e.target.matches("img")) return false;
  window.location.href = "./#home";
});

  let tt = document.getElementById('text');
  let hamburger = document.getElementById('hamburger');
  document.addEventListener('click', (e) => {
    if (!e.target.matches(".menutoggle")) {
      tt.classList.remove("active");
      tt.classList.add("menucontent");
      return false;
    }
    tt.classList.toggle("menucontent");
    tt.classList.toggle("active");
    console.log(tt);
    // if (!e.target.matches("hamburger")) return false;

  });


  //Matrix/////////////////////

  var c = document.getElementById("pattern");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var font_size = 30;
var columns = c.width / font_size;
var character = ".I";
character = character.split("");
var drops = [];

function init() {
	drops = [];
	for (var x = 0; x < columns; x++) drops[x] = 1;
}

function draw() {
	ctx.fillStyle = "#2256cb";
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = "#0F0";
	ctx.font = font_size + "px Varela Round";
	for (var i = 0; i < drops.length; i++) {
		var text = character[Math.floor(Math.random() * character.length)];
		ctx.fillText(text, i * font_size, drops[i] * font_size);
		if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;
		drops[i]++;
	}
}

init();
let raining = setInterval(draw, 33);

const handleResize = () => {
	clearInterval(raining);
	c.height = window.innerHeight;
	c.width = window.innerWidth;
	columns = c.width / font_size;
	c.setAttribute("width", c.width);
	c.setAttribute("height", c.height);
	init()
	raining = setInterval(draw, 33);
};

window.addEventListener("resize", handleResize);


///
