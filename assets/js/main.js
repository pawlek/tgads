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

tg.MainButton.text = "Select any package"; //изменяем текст кнопки
tg.MainButton.textColor = "#737373"; //изменяем цвет текста кнопки
tg.MainButton.color = "#A8A8A8";

btn_1.addEventListener("click", function () {
	tg.HapticFeedback.impactOccurred("heavy");

	if (tg.MainButton.isVisible && !tg.MainButton.isActive) {
		tg.MainButton.textColor = "#FFFFFF"; //изменяем цвет текста кнопки
		tg.MainButton.color = "#00A3FF";
		tg.MainButton.setText("Next");
		tg.MainButton.enable();
	} else {
		//иначе
		tg.MainButton.show(); //показываем
	}
});

document.querySelectorAll("label").forEach((eachLabelElem) =>
	eachLabelElem.addEventListener("click", function (event) {
		event.stopPropagation();
		tg.HapticFeedback.impactOccurred("heavy");
	})
);

let del = document.getElementById("delete");

btn_1.addEventListener("click", function () {
	tg.HapticFeedback.impactOccurred("heavy");

	del.style.display = "";

	if (tg.MainButton.isVisible && !tg.MainButton.isActive) {
		tg.MainButton.textColor = "#FFFFFF"; //изменяем цвет текста кнопки
		tg.MainButton.color = "#00A3FF";
		tg.MainButton.setText("Next");
		tg.MainButton.enable();
	} else {
		//иначе
		tg.MainButton.show(); //показываем
	}
});

del.addEventListener("click", function () {
	tg.HapticFeedback.impactOccurred("heavy");

	del.style.display = "none";

	if (tg.MainButton.isVisible && tg.MainButton.isActive) {
		tg.MainButton.hide();
	} else {
		tg.MainButton.textColor = "#FFFFFF"; //изменяем цвет текста кнопки
		tg.MainButton.color = "#00A3FF";
		tg.MainButton.setText("Next");
		tg.MainButton.enable();
	}
});
