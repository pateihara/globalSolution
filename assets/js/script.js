// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

// Função para detectar a seção visível na tela
function highlightLink() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop; // Posição atual do scroll
  const navbarHeight = document.querySelector(".navbar").offsetHeight; // Altura da navbar fixa

  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href")); // Seção correspondente ao link
    if (!section) return; // Evita erro caso o link não tenha uma seção correspondente

    const sectionTop = section.offsetTop - navbarHeight; // Topo da seção ajustado pela altura da navbar
    const sectionBottom = sectionTop + section.offsetHeight; // Fundo da seção

    // Verifica se o usuário está dentro da seção visível
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      link.classList.add("active"); // Adiciona a classe 'active' ao link
    } else {
      link.classList.remove("active"); // Remove a classe 'active' caso contrário
    }
  });
}

// Adiciona o evento de rolagem para atualizar os links
document.addEventListener("scroll", highlightLink);

// Atualiza a navbar ao carregar a página
document.addEventListener("DOMContentLoaded", highlightLink);

document.addEventListener("DOMContentLoaded", function () {
  const flipButtons = document.querySelectorAll(".flip-btn");

  flipButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Evita comportamento padrão do link
      const cardContainer = btn.closest(".card-container");
      cardContainer.classList.toggle("active"); // Alterna o estado ativo
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const breakpoint = 992; // Ponto de colapso para lg no Bootstrap

  // Função para verificar o estado da janela
  function checkNavbarState() {
    if (window.innerWidth < breakpoint) {
      navbar.classList.add("blackBG");
    } else {
      navbar.classList.remove("blackBG");
      navbarCollapse.classList.remove("show"); // Garante que o menu colapsado feche
    }
  }

  // Monitora o estado de abertura do menu hamburguer
  navbarCollapse.addEventListener("show.bs.collapse", function () {
    navbar.classList.add("blackBG");
  });

  navbarCollapse.addEventListener("hide.bs.collapse", function () {
    if (window.innerWidth < breakpoint) {
      navbar.classList.remove("blackBG");
    }
  });

  // Verifica o estado inicial
  checkNavbarState();

  // Verifica sempre que a janela for redimensionada
  window.addEventListener("resize", checkNavbarState);
});
