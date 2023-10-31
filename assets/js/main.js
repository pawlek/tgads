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

let usercard = document.getElementById("user"); //Используем getElementById, чтобы получить карточку пользователя

let profileName = document.createElement("p"); //При помощи document.createElement делаем абзац – <p> </p>
profileName.innerText = `${telegramAppChatLabs.initDataUnsafe.user.first_name}
   ${telegramAppChatLabs.initDataUnsafe.user.last_name}
   ${telegramAppChatLabs.initDataUnsafe.user.username} (${telegramAppChatLabs.initDataUnsafe.user.language_code})`;
//В созданном параграфе будет Имя пользователя, его Фамилия, username, а также код языка
usercard.appendChild(profileName); //Используем appendChild, чтобы добавить узел в конец списка дочерних элементов
let userid = document.createElement("p"); // Используем document.createElement для создания еще одного абзаца
userid.innerText = `${telegramAppChatLabs.initDataUnsafe.user.id}`; // Отображаем id пользователя
usercard.appendChild(userid);

tg.MainButton.text = "Select any package"; //изменяем текст кнопки
tg.MainButton.textColor = "#737373"; //изменяем цвет текста кнопки
tg.MainButton.color = "#A8A8A8";

document.querySelectorAll("label").forEach((eachLabelElem) =>
	eachLabelElem.addEventListener("click", function (event) {
		event.stopPropagation();
		tg.HapticFeedback.impactOccurred("heavy");
	})
);

let del = document.getElementById("delete");

btn_1.addEventListener("click", function () {
	btn_1.style = "background: #A8A8A8;";

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
	btn_1.style = tg.ThemeParams.button_color;

	if (tg.MainButton.isVisible && tg.MainButton.isActive) {
		tg.MainButton.text = "Select any package"; //изменяем текст кнопки
		tg.MainButton.textColor = "#737373"; //изменяем цвет текста кнопки
		tg.MainButton.color = "#A8A8A8";
		tg.MainButton.disable();
	} else {
		tg.MainButton.textColor = "#FFFFFF"; //изменяем цвет текста кнопки
		tg.MainButton.color = "#00A3FF";
		tg.MainButton.setText("Next");
		tg.MainButton.enable();
	}
});
