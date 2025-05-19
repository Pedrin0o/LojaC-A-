// js/script.js

// MENU HAMBURGUER - CÓDIGO ADICIONADO
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Alterna o ícone entre ☰ e ✕
    menuIcon.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });
}

// LOGIN (código existente mantido)
function mostrarFormulario(tipo) {
  const titulo = document.getElementById("form-title");

  // Seleciona os formulários
  const loginForm = document.getElementById("login-form");
  const cadastroForm = document.getElementById("cadastro-form");
  const recuperarForm = document.getElementById("recuperar-form");

  // Seleciona os links para controlar visibilidade
  const linkLogin = document.getElementById("link-login");
  const linkCadastro = document.getElementById("link-cadastro");
  const linkRecuperar = document.getElementById("link-recuperar");

  // Remove classe 'active' de todos os formulários
  loginForm.classList.remove("active");
  cadastroForm.classList.remove("active");
  recuperarForm.classList.remove("active");

  // Controla qual formulário fica ativo e título
  if (tipo === "cadastro") {
    cadastroForm.classList.add("active");
    titulo.textContent = "Cadastro";

    // Mostrar só links que não são cadastro
    linkCadastro.style.display = "none"; // esconde link cadastro
    linkLogin.style.display = "inline"; // mostra login
    linkRecuperar.style.display = "inline"; // mostra recuperar

  } else if (tipo === "recuperar") {
    recuperarForm.classList.add("active");
    titulo.textContent = "Recuperar Senha";

    // Mostrar só links que não são recuperar
    linkRecuperar.style.display = "none";
    linkLogin.style.display = "inline";
    linkCadastro.style.display = "inline";

  } else {
    loginForm.classList.add("active");
    titulo.textContent = "Login";

    // Mostrar só links que não são login
    linkLogin.style.display = "none";
    linkCadastro.style.display = "inline";
    linkRecuperar.style.display = "inline";
  }
}

window.addEventListener('DOMContentLoaded', () => {
  mostrarFormulario('login');
});

// BANNER (código existente mantido)
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona elementos do carrossel
  const carouselImages = document.querySelectorAll('.carousel-image');
  const carouselButtons = document.querySelectorAll('.carousel-buttons .btn');
  let currentIndex = 0;
  let intervalId;
  const slideInterval = 5000; // 5 segundos
  
  // Função para mostrar um slide específico
  function showSlide(index) {
      // Esconde todos os slides
      carouselImages.forEach(image => {
          image.classList.remove('active');
      });
      
      // Remove a classe 'active-btn' de todos os botões
      carouselButtons.forEach(button => {
          button.classList.remove('active-btn');
      });
      
      // Mostra o slide selecionado
      carouselImages[index].classList.add('active');
      carouselButtons[index].classList.add('active-btn');
      currentIndex = index;
  }
  
  // Função para avançar para o próximo slide
  function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselImages.length;
      showSlide(currentIndex);
  }
  
  // Função para iniciar o carrossel automático
  function startCarousel() {
      intervalId = setInterval(nextSlide, slideInterval);
  }
  
  // Função para parar o carrossel automático
  function stopCarousel() {
      clearInterval(intervalId);
  }
  
  // Adiciona event listeners para os botões do carrossel
  carouselButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          stopCarousel();
          showSlide(index);
          startCarousel();
      });
  });
  
  // Pausa o carrossel quando o mouse está sobre ele
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', stopCarousel);
      carouselContainer.addEventListener('mouseleave', startCarousel);
  }
  
  // Inicia o carrossel
  showSlide(0);
  startCarousel();
});