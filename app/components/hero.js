export function Hero(){

  const $hero = document.createElement('section');
  $hero.setAttribute('id', 'home');
  $hero.classList.add('hero');
  $hero.innerHTML = '<canvas id="pattern" class="canvas"> </canvas><div class="herotittle"><h1>\{ <span class="tittleSpan">Jeremy Landa</span> \}</h1><h3 class="herosub">Desarrollador \/ Cybersecurity</h3></div>';


  //Matrix/////////////////////
/*
let c = document.getElementById("pattern");
let ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
let font_size = 30;
let columns = c.width / font_size;
let character = ".I";
character = character.split("");
let drops = [];

function init() {
	drops = [];
	for (let x = 0; x < columns; x++) drops[x] = 1;
}

function draw() {
	ctx.fillStyle = "#2256cb";
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = "#0F0";
	ctx.font = font_size + "px Varela Round";
	for (let i = 0; i < drops.length; i++) {
		let text = character[Math.floor(Math.random() * character.length)];
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
*/
  return $hero;
}
