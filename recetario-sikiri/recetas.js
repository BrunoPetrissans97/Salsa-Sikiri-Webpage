
const recetas = [
  {
    titulo: "Frijoles con Salsa Sikiri",
    categoria: "Comida",
    imagen: "img/receta_frijoles.jpg",
    tiempo: "25 min",
    dificultad: "Fácil"
  },
  {
    titulo: "Tostadas de Sikiri con Aguacate",
    categoria: "Desayuno",
    imagen: "img/receta_tostadas.jpg",
    tiempo: "15 min",
    dificultad: "Fácil"
  },
  {
    titulo: "Sushi de Pepino con Arándano Sikiri",
    categoria: "Cena",
    imagen: "img/receta_sushi.jpg",
    tiempo: "30 min",
    dificultad: "Media"
  },
];

const container = document.getElementById("recetas-container");
const busqueda = document.getElementById("busqueda");
const botones = document.querySelectorAll(".filtro");

function renderRecetas(filtradas) {
  container.innerHTML = "";
  filtradas.forEach(r => {
    container.innerHTML += `
      <div class="receta-card">
        <img src="\${r.imagen}" alt="\${r.titulo}">
        <div class="contenido">
          <h3>\${r.titulo}</h3>
          <div class="meta">
            <span>⏱️ \${r.tiempo}</span>
            <span>📈 \${r.dificultad}</span>
          </div>
        </div>
      </div>`;
  });
}

busqueda.addEventListener("input", () => {
  const texto = busqueda.value.toLowerCase();
  const filtradas = recetas.filter(r => r.titulo.toLowerCase().includes(texto));
  renderRecetas(filtradas);
});

botones.forEach(b => {
  b.addEventListener("click", () => {
    botones.forEach(btn => btn.classList.remove("active"));
    b.classList.add("active");
    const cat = b.dataset.categoria;
    const filtradas = recetas.filter(r => r.categoria === cat);
    renderRecetas(filtradas);
  });
});

// Cargar todas al inicio
renderRecetas(recetas);
