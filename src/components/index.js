document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".featureCard");
  const container = document.querySelector(".companyVisionSection");

  if (!cards.length || !container) {
    console.error("Elements not found! Check class names or HTML structure.");
    return;
  }

  function rotateCards() {
    let angle = 0;
    cards.forEach((card, index) => {
      if (card.classList.contains("away")) {
        card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        card.style.opacity = "0";
        card.style.pointerEvents = "none";
      } else {
        card.style.transform = `rotate(${angle}deg)`;
        angle -= 10;
        card.style.zIndex = cards.length - index;
        card.style.opacity = "1";
      }
    });
  }

  function isInViewport(element) {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
  }

  window.addEventListener("scroll", () => {
    if (!isInViewport(container)) return;

    let distance = window.innerHeight / 2;
    let topValue = container.getBoundingClientRect().top;
    let index = -1 * (topValue / distance + 1);
    index = Math.floor(index);

    console.log("Current Index:", index);

    cards.forEach((card, i) => {
      if (i <= index) {
        card.classList.add("away");
      } else {
        card.classList.remove("away");
      }
    });

    rotateCards();
  });
});
