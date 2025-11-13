/* =========================
   🌐 Modern Navigation Menu
========================= */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-4-line");

  // Smooth fade animation for nav links
  if (isOpen) {
    navLinks.style.transition = "all 0.5s ease-in-out";
    navLinks.style.opacity = "1";
  } else {
    navLinks.style.opacity = "0";
  }
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});

/* =========================
   ✨ ScrollReveal Animations
========================= */
const scrollRevealOption = {
  distance: "60px",
  duration: 1500,
  delay: 200,
  opacity: 0,
  easing: "ease-in-out",
  reset: false, // Set true for repeat animations
};

// Header Section
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, origin: "top" });
ScrollReveal().reveal(".header__container form", { ...scrollRevealOption, origin: "bottom", delay: 400 });
ScrollReveal().reveal(".header__container img", { ...scrollRevealOption, origin: "right", delay: 600 });

// Range Cards
ScrollReveal().reveal(".range__card", { ...scrollRevealOption, interval: 200, origin: "bottom" });

// Location Section
ScrollReveal().reveal(".location__image img", { ...scrollRevealOption, origin: "right" });
ScrollReveal().reveal(".location__content .section__header", { ...scrollRevealOption, origin: "top", delay: 400 });
ScrollReveal().reveal(".location__content p", { ...scrollRevealOption, delay: 700 });
ScrollReveal().reveal(".location__content .location__btn", { ...scrollRevealOption, delay: 900 });

// Story Cards
ScrollReveal().reveal(".story__card", { ...scrollRevealOption, interval: 200, origin: "bottom" });

// Download Section
ScrollReveal().reveal(".download__image img", { ...scrollRevealOption, origin: "right" });
ScrollReveal().reveal(".download__content .section__header", { ...scrollRevealOption, delay: 400 });
ScrollReveal().reveal(".download__links", { ...scrollRevealOption, delay: 800 });

// News Section
ScrollReveal().reveal(".news__container .section__header", { ...scrollRevealOption, delay: 400, origin: "top" });

/* =========================
   🎠 Modern Swiper Carousel
========================= */
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 10,
    depth: 300,
    modifier: 1.2,
    scale: 0.85,
    slideShadows: false,
    stretch: -60,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  on: {
    slideChangeTransitionStart: function () {
      updateSwiperImage("slideChangeTransitionStart", [this]);
    },
  },
});

/* =========================
   🎞️ Banner Loop Animation
========================= */
const banner = document.querySelector(".banner__wrapper");
const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

/* =========================
   🚗 Car Image + Price Sync
========================= */
const selectCards = document.querySelectorAll(".select_card");
selectCards[0].classList.add("show__info");

const price = ["255", "455", "275", "625", "395"];
const priceEl = document.getElementById("select-price");

function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    const swiperInstance = args[0];
    const index = swiperInstance.realIndex;
    priceEl.innerText = price[index];

    selectCards.forEach((item) => item.classList.remove("show__info"));
    selectCards[index].classList.add("show__info");
  }
}
