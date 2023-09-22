let interrupt = document.querySelector("#interrupt img");
let lamp = document.querySelector("#lamp img");
let body = document.querySelector("body");
interrupt.addEventListener("click", () => {
	if(interrupt.getAttribute("src")=="./img/lig.png") {
		interrupt.setAttribute("src","./img/deslig.png");
		lamp.setAttribute("src","./img/lampada-off.png");
		body.style.backgroundColor ="#000";
	}else{
		interrupt.setAttribute("src","./img/lig.png");
		lamp.setAttribute("src","./img/lampada-on.png");
		body.style.backgroundColor ="#fff";
	}
});