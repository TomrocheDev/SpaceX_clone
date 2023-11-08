// Section header scroll-in animation
const sectionHeaders = document.querySelectorAll(".fade-in-element");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate_fade-in-element");
            }
        });
    },
    { threshold: 0.2 }
);

for (let i = 0; i < sectionHeaders.length; i++) {
    const element = sectionHeaders[i];

    observer.observe(element);
}

// Hide header on scrolldown
const pageHeader = document.querySelector("header");

document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
        pageHeader.classList.add("hide");
    } else {
        pageHeader.classList.remove("hide");
    }
});

// Show header on upscroll
let previousScrollY = 0;

window.addEventListener("wheel", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < previousScrollY && document.documentElement.scrollTop > 100) {
        // Code comes here
        pageHeader.classList.add("show-bg-black");
    } else {
        pageHeader.classList.remove("show-bg-black");
    }

    previousScrollY = currentScrollY;
});
