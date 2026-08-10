const tamaño = document.getElementById("tamaño");
const formato = document.getElementById("formato");
const paleta = document.getElementById("paleta");
const generar = document.getElementById("generar");
const copiar = document.getElementById("copiar");

function generarRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function generarHex() {
  const r = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
  const g = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
  const b = Math.floor(Math.random() * 256).toString(16).padStart(2, "0");

  return `#${r}${g}${b}`;
}

function generarHSL() {
  const h = Math.floor(Math.random() * 361);
  const s = Math.floor(Math.random() * 101);
  const l = Math.floor(Math.random() * 101);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

function generarColor() {
  const formatoSeleccionado = formato.value;

  switch (formatoSeleccionado) {
    case "RGB":
      return generarRGB();
    case "HEX":
      return generarHex();
    case "HSL":
      return generarHSL();
    default:
      return generarHex();
  }
}

function generarPaleta() {
  paleta.innerHTML = "";
  const cantidad = Number(tamaño.value) || 6;

  for (let i = 0; i < cantidad; i++) {
    const color = generarColor();

    const contenedorColor = document.createElement("div");
    contenedorColor.classList.add("item-color");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("color");
    tarjeta.style.backgroundColor = color;

    const texto = document.createElement("p");
    texto.classList.add("valor-color");
    texto.textContent = color;

    contenedorColor.appendChild(tarjeta);
    contenedorColor.appendChild(texto);
    paleta.appendChild(contenedorColor);
  }
}

generar.addEventListener("click", generarPaleta);

copiar.addEventListener("click", function () {
  const colores = Array.from(document.querySelectorAll(".valor-color"))
    .map((elemento) => elemento.textContent)
    .join("\n");

  navigator.clipboard.writeText(colores).then(() => {
    alert("Paleta copiada al portapapeles");
  });
});

generarPaleta();

