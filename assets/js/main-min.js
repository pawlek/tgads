let tg=window.Telegram.WebApp;const heightOutput=document.querySelector("#height"),widthOutput=document.querySelector("#width");heightOutput.textContent=window.innerHeight,widthOutput.textContent=window.innerWidth;let item=document.querySelectorAll(".item"),margin=32;for(var i=0;i<item.length;i++)item[i].style.width=(window.innerWidth-3*margin)/2+"px",item[i].style.height=(window.innerWidth-3*margin)/2+"px";