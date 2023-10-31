var wavesurfer = WaveSurfer.create({
	container: ".waveform",
	waveColor: "#D9D9D9",
	progressColor: "#A1A0A0",
	height: 48,
	responsive: true,
	hideScrollbar: true,
	cursorColor: "#444444",
	cursorWidth: 2,
	barWidth: 4,
	barHeight: 0.7,
	barGap: 3,
	skipLength: 5,
	barRadius: 100,
	autoplay: true,
	dragToSeek: true,
});

wavesurfer.load("../../music.mp3");

wavesurfer.on("interaction", () => {
	wavesurfer.play();
});

const playPauseButton = document.getElementById("play-pause-button");
let isPlaying = false;

playPauseButton.addEventListener("click", () => {
	if (isPlaying) {
		wavesurfer.pause();
		playPauseButton.innerHTML = '<div class="play"></div>';
	} else {
		wavesurfer.play();
		playPauseButton.innerHTML = '<div class="pause"> </div>';
	}
	isPlaying = !isPlaying;
});

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
