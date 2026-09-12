const posts = [

  {
    category: "Motor",
    title: "Turbo: potência sem destruir o projeto",
    image: "imagens do projeto/civic si prata.JFIF",
    text: "Como pressão, combustível, temperatura e acerto eletrônico trabalham juntos em uma preparação turbo. Mais pressão nem sempre significa um projeto melhor."
  },


  {
    category: "Chassi",
    title: "Suspensão: o equilíbrio entre rua e pista",
    image: "imagens do projeto/subaru rally version.jpg",
    text: "Molas, amortecedores, altura e alinhamento mudam completamente o comportamento do carro. O objetivo é ganhar controle sem transformar o projeto em algo impraticável."
  },


  {
    category: "Motor",
    title: "Escape e admissão: onde realmente estão os ganhos?",
    image: "imagens do projeto/evo 10 escape.jpg",
    text: "Entenda por que um sistema de admissão e escape bem dimensionado pode ajudar o motor, enquanto peças escolhidas apenas pelo barulho podem não entregar o resultado esperado."
  },


  {
    category: "Chassi",
    title: "Freios: potência exige controle",
    image: "imagens do projeto/bmw brake sistem.jpg",
    text: "Antes de buscar números maiores no dinamômetro, é importante garantir que o carro consiga parar. Discos, pastilhas, fluido e refrigeração fazem parte do pacote."
  },


  {
    category: "Projeto",
    title: "Montando um projeto de rua coerente",
    image: "imagens do projeto/Whitebmw.jpg",
    text: "Um bom projeto não é uma coleção de peças caras. É a combinação entre motor, transmissão, pneus, suspensão, freios e objetivo de uso."
  }

];


const grid = document.getElementById("postGrid");
const filters = document.querySelectorAll(".filter");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

function renderPosts(category = "Todos") {

  const filtered =
    category === "Todos"
      ? posts
      : posts.filter(post => post.category === category);


  grid.innerHTML = filtered.map((post, index) => `

    <article class="post">

        <img
            src="${post.image}"
            alt="${post.title}"
            class="post-image"
        >

        <div class="post-number">
            ${String(index + 1).padStart(2, "0")}
        </div>

        <div class="tag">
            ${post.category}
        </div>

        <h3 class="post-title">
            ${post.title}
        </h3>

        <p>
            ${post.text}
        </p>

        <a href="#" class="read-more" onclick="return false;">
            LER ARTIGO
            <span>→</span>
        </a>

    </article>

`).join("");
}

filters.forEach(button => {

  button.addEventListener("click", () => {

    filters.forEach(item => {

      item.classList.remove("active");

    });


    button.classList.add("active");


    renderPosts(button.dataset.category);

  });

});

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});

navLinks.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

  });

});




renderPosts();


