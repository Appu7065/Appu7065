// ----------------------------
// 1. Back to Top Button
// ----------------------------

// Create button
const backToTop = document.createElement("button");
backToTop.textContent = "↑ Top";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

// Scroll to top when clicked
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show/hide button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// ----------------------------
// 2. Article Card Click Animation
// ----------------------------
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(1.05)";
        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 200);
    });
});

// ----------------------------
// 3. Smooth News Ticker Loop
// ----------------------------
const ticker = document.querySelector(".ticker");
let tickerWidth = ticker.offsetWidth;
let parentWidth = ticker.parentElement.offsetWidth;

let pos = parentWidth;
function scrollTicker() {
    pos -= 1; // Adjust speed here
    if (pos < -tickerWidth) pos = parentWidth;
    ticker.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(scrollTicker);
}
scrollTicker();
