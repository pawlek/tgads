let tg = window.Telegram.WebApp;

// tg.expand();

tg.MainButton.show();
tg.MainButton.disable();

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

heightOutput.textContent = window.innerHeight;
widthOutput.textContent = window.innerWidth;

let item = document.querySelectorAll(".item");
let margin = 32;
for (var i = 0; i < item.length; i++) {
	item[i].style.width = (window.innerWidth - margin * 3) / 2 + "px";
	item[i].style.height = (window.innerWidth - margin * 3) / 2 + "px";
}

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки

btn.addEventListener("click", function () {
	//вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isVisible && !tg.MainButton.isActive) {
		tg.MainButton.enable();
		tg.MainButton.setText("Next");
	} else {
		//иначе
		tg.MainButton.show(); //показываем
	}
});
