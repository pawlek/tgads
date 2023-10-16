let tg = window.Telegram.WebApp;

tg.expand();

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

heightOutput.textContent = window.innerHeight;
widthOutput.textContent = window.innerWidth / 2;

let item = document.querySelectorAll(".item");

for (var i = 0; i < item.length; i++) {
	item[i].style.width = "200px";
	item[i].style.height = "200px";
}
