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
