let tg = window.Telegram.WebApp;

tg.expand();

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

let item = document.getElementsByClassName("item");

item.style.width = "100px";
item.style.height = "100px";

function updateSize() {
	heightOutput.textContent = window.innerHeight;
	widthOutput.textContent = window.innerWidth;
}

updateSize();
window.addEventListener("resize", updateSize);
