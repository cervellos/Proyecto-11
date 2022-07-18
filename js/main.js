const btnSwitch = document.querySelector("#switch");
let btnMagic = document.getElementById("btnMagic");

btnSwitch.addEventListener("click", function () {
  if (btnMagic.href == "http://127.0.0.1:5503/css/estilos.css") {
    btnMagic.href = "css/estilos-retro.css";
  } else if (btnMagic.href == "http://127.0.0.1:5503/css/estilos-retro.css") {
    btnMagic.href = "css/estilos-futuro.css";
  } else {
    btnMagic.href = "css/estilos.css";
  }
});
