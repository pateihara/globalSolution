// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

// Função para detectar a seção visível na tela
function highlightLink() {
  let scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href")); // Pega a seção correspondente ao link
    const sectionTop = section.offsetTop - 100; // Posição do topo da seção
    const sectionBottom = sectionTop + section.offsetHeight; // Posição do fundo da seção

    // Verifica se o usuário rolou até a seção
    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
      link.classList.add("active"); // Adiciona a classe 'active'
    } else {
      link.classList.remove("active"); // Remove a classe 'active' se não estiver na seção
    }
  });
}

// Chama a função quando o usuário rola a página
window.addEventListener("scroll", highlightLink);
