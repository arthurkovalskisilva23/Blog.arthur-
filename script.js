
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let clicado = false;
    const contador = botao.querySelector("span");

    botao.addEventListener("click", function () {
        
        let valorAtual = parseInt(contador.textContent);

        
        const isLike = botao.classList.contains("btn-like");

        if (!clicado) {
            contador.textContent = valorAtual + 1;
            botao.classList.add(isLike ? "like-ativo" : "dislike-ativo");
            clicado = true;
        } else {
            contador.textContent = valorAtual - 1;
            botao.classList.remove(isLike ? "like-ativo" : "dislike-ativo");
            clicado = false;
        }
    });
});
