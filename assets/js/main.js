// import { createClient } from "@supabase/supabase-js";

// // Create a single supabase client for interacting with your database
// const supabase = createClient(
// 	"https://egdnihszitodycuzhomd.supabase.co",
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnZG5paHN6aXRvZHljdXpob21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0OTU0ODAsImV4cCI6MjAxNDA3MTQ4MH0.aLWDlUQFM6IGqa1CTPcmV1EHD_C0xbA15OTkrX7v_Nk"
// );

// const useData = async () => {
// 	const { data, error } = await supabase.from("users").select(); // gets the data from supabase

// 	let html = "";

// 	data.forEach((blog) => {
// 		html += `
// 	  <div data-id="${blog.id}">
// 		<h1 class="text-2xl">${blog.title}</h1>
// 		<p>${blog.content}</p>
// 	  </div>
// 	  `;
// 	});

// 	blogsContainer.innerHTML = html;
// };

let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.show();
tg.MainButton.disable();

tg.themeParams.bg_color = "#444";



const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

heightOutput.textContent = window.innerHeight;
widthOutput.textContent = window.innerWidth;

let item = document.querySelectorAll(".item h2");
let margin = 32;
for (var i = 0; i < item.length; i++) {
	item[i].style.width = (window.innerWidth - margin * 3) / 2 + "px";
	item[i].style.height = (window.innerWidth - margin * 3) / 2 + "px";
}

tg.onEvent('mainButtonClicked',  function () {
	
	tg.showAlert(item, function(){
		tg.MainButton.setText(item);
	})
});

let usercard = document.getElementById("user"); //Используем getElementById, чтобы получить карточку пользователя

let profileName = document.createElement("p"); //При помощи document.createElement делаем абзац – <p> </p>
profileName.textContent = `${tg.initDataUnsafe.user.first_name}
   ${tg.initDataUnsafe.user.last_name}
   ${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code}) ${JSON.stringify(window.Telegram.WebApp.initDataUnsafe.receiver, null, 2)}`;
//В созданном параграфе будет Имя пользователя, его Фамилия, username, а также код языка

usercard.appendChild(profileName); //Используем appendChild, чтобы добавить узел в конец списка дочерних элементов
let userid = document.createElement("p"); // Используем document.createElement для создания еще одного абзаца
userid.textContent = `${tg.initDataUnsafe.user.id}`; // Отображаем id пользователя
usercard.appendChild(userid);


// let db = document.createElement("div");
// userid.textContent = `${data}`;
// usercard.appendChild(db);

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
	tg.MainButton.setText("ololo");

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
