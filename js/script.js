
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function enviarPorWhatsApp(e) {
    e.preventDefault(); // Evita el envío normal del formulario
  
    const numeroWhatsApp = "5215510112861"; // Reemplaza con tu número de WhatsApp
    const texto = `Hola Salsa Sikiri!, quiero más información sobre sus productos `;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  
    window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña
  }

  document.addEventListener("DOMContentLoaded", () => {
    AOS.init({ duration: 1000 });
  
    new Swiper(".swiper", {
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 5000, // Aumenta el delay a 5 segundos
            disableOnInteraction: false,
          },
        initialSlide: 0,
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        on: {
            init: function () {
              this.autoplay.stop();
              setTimeout(() => {
                this.autoplay.start();
              }, 2000); // espera 2 segundos antes de empezar
            },
        },
      });
  });