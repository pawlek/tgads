let tg=window.Telegram.WebApp;tg.MainButton.show(),tg.MainButton.disable();const heightOutput=document.querySelector("#height"),widthOutput=document.querySelector("#width");heightOutput.textContent=window.innerHeight,widthOutput.textContent=window.innerWidth;let item=document.querySelectorAll(".item"),margin=32;for(var i=0;i<item.length;i++)item[i].style.width=(window.innerWidth-3*margin)/2+"px",item[i].style.height=(window.innerWidth-3*margin)/2+"px";tg.MainButton.text="Select any package",tg.MainButton.textColor="#737373",tg.MainButton.color="#A8A8A8",btn_1.addEventListener("click",(function(){tg.MainButton.isVisible&&!tg.MainButton.isActive?(tg.MainButton.textColor="#FFFFFF",tg.MainButton.color="#00A3FF",tg.MainButton.setText("Next"),tg.MainButton.enable()):tg.MainButton.show()}));