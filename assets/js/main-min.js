let tg=window.Telegram.WebApp;tg.MainButton.show(),tg.MainButton.disable();const heightOutput=document.querySelector("#height"),widthOutput=document.querySelector("#width");heightOutput.textContent=window.innerHeight,widthOutput.textContent=window.innerWidth;let item=document.querySelectorAll(".item"),margin=32;for(var i=0;i<item.length;i++)item[i].style.width=(window.innerWidth-3*margin)/2+"px",item[i].style.height=(window.innerWidth-3*margin)/2+"px";tg.MainButton.text="Select any package",tg.MainButton.textColor="#737373",tg.MainButton.color="#A8A8A8",document.querySelectorAll("label").forEach((t=>t.addEventListener("click",(function(t){t.stopPropagation(),tg.HapticFeedback.impactOccurred("heavy")}))));let del=document.getElementById("delete");function disable(t){t.color="#A8A8A8",t.disable()}btn_1.addEventListener("click",(function(){disable(this),tg.HapticFeedback.impactOccurred("heavy"),del.style.display="",tg.MainButton.isVisible&&!tg.MainButton.isActive?(tg.MainButton.textColor="#FFFFFF",tg.MainButton.color="#00A3FF",tg.MainButton.setText("Next"),tg.MainButton.enable()):tg.MainButton.show()})),del.addEventListener("click",(function(){tg.HapticFeedback.impactOccurred("heavy"),del.style.display="none",tg.MainButton.isVisible&&tg.MainButton.isActive?(tg.MainButton.text="Select any package",tg.MainButton.textColor="#737373",tg.MainButton.color="#A8A8A8",tg.MainButton.disable()):(tg.MainButton.textColor="#FFFFFF",tg.MainButton.color="#00A3FF",tg.MainButton.setText("Next"),tg.MainButton.enable())}));