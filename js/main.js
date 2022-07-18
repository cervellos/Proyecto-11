const btnSwitch = document.querySelector("#switch");
let btnMagic = document.getElementById("btnMagic");

let clicks = 0;
btnSwitch.addEventListener("click", function () {
  if (clicks === 0) {
    btnMagic.href = "css/estilos-retro.css";
    clicks = 1;
  } else if (clicks === 1) {
    btnMagic.href = "css/estilos-futuro.css";
    clicks = 2;
  } else if ((clicks = 2)) {
    btnMagic.href = "css/estilos.css";
    clicks = 0;
  }
});
