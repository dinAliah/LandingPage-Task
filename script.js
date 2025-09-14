// ====== NAVBAR SCROLL SHRINK ======
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// ====== SLIDESHOW FUNCTIONALITY ======
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  Array.from(slides).forEach(slide => slide.style.display = "none");
  Array.from(dots).forEach(dot => dot.classList.remove("active"));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Auto-play slideshow every 5 seconds
setInterval(() => plusSlides(1), 5000);

// ====== REGISTRATION FORM VALIDATION ======
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("aviationForm");
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const ic = document.getElementById("ic").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const address = document.getElementById("address").value.trim();
      const education = document.getElementById("education").value;
      const program = document.getElementById("program").value;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const icPattern = /^\d{6}-\d{2}-\d{4}$/;
      const phonePattern = /^\d{10,15}$/;

      if (!fullname || !email || !ic || !phone || !address || !education || !program) {
        showPopup("⚠️ Sila isi semua ruangan yang diperlukan.");
        return;
      }

      if (!emailPattern.test(email)) {
        showPopup(" Format emel tidak sah.");
        return;
      }

      if (!icPattern.test(ic)) {
        showPopup("Format nombor IC tidak sah. Contoh: 010203-10-1234");
        return;
      }

      if (!phonePattern.test(phone.replace(/-/g, ""))) {
        showPopup("Nombor telefon mesti antara 10 hingga 15 digit.");
        return;
      }

      showPopup("Pendaftaran berjaya! Kami akan hubungi anda tidak lama lagi.");
      form.reset();
    });
  }

  function showPopup(message) {
    popupMessage.textContent = message;
    popup.classList.remove("hidden");
  }

  window.closePopup = () => {
    popup.classList.add("hidden");
  };
});

// ====== SCROLLIFY SECTION ANIMATIONS ======
$(function () {
  const elements = {
    scrollify: $('.js--scrollify'),
    header: $('.js--header'),
    footer: $('.js--footer'),
    navigate: $('.js--navigate'),
    navigateItems: $('.js--navigate-items'),
    navigateLink: $('.js--navigate-link'),
    firstTitle: $('.js--first-title'),
    third: $('.js--third'),
    thirdTitle: $('.js--third-title'),
    thirdLeft: $('.js--third-left'),
    thirdRight: $('.js--third-right'),
    sectionCard: $('.js--section-card'),
    block: $('.js--block'),
    more: $('.js--more'),
  };

  // Navigation click behavior
  elements.navigateItems.on('click', '.js--navigate-link', (ev) => {
    ev.preventDefault();
    const hash = $(ev.currentTarget).attr('href');
    $.scrollify.move(hash);
  });

  // Toggle extra content
  elements.more.on('click', () => {
    elements.block.slideToggle();
  });

  // Initial animation
  setTimeout(() => {
    elements.firstTitle.addClass('bounceInDown');
  }, 100);

  // Scrollify setup
  document.getElementById("languageToggle").addEventListener("click", () => {
    alert("Language toggle clicked. You can implement multilingual support here.");
  });
});