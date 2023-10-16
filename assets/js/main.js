let tg = window.Telegram.WebApp;

// tg.expand();

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
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({ color: "#143F6B" }); //так изменяются все параметры

btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isVisible){ //если кнопка показана 
		tg.MainButton.hide() //скрываем кнопку 
	}
  else{ //иначе
  	tg.MainButton.show() //показываем 
  }
});