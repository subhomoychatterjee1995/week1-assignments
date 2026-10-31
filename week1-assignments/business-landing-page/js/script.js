document.addEventListener("DOMContentLoaded", () => {

    const heroText = document.querySelector("main section:first-of-type p");
    const searchInput = document.querySelector("main section:first-of-type input");

    [heroText, searchInput].forEach(el => {
        if (el) {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        }
    });

    setTimeout(() => {
        if (heroText) {
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";
        }
    }, 200);

    setTimeout(() => {
        if (searchInput) {
            searchInput.style.opacity = "1";
            searchInput.style.transform = "translateY(0)";
        }
    }, 500);


    if (searchInput) {
        searchInput.addEventListener("focus", () => {
            searchInput.placeholder = "Search dishes like Biryani, Pizza, Momos...";
        });

        searchInput.addEventListener("blur", () => {
            searchInput.placeholder = "Search for restaurants, cuisine or a dish";
        });

        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                const query = searchInput.value.trim();
                if (query !== "") {
                    searchInput.style.backgroundColor = "#fff0f1";
                    setTimeout(() => {
                        searchInput.style.backgroundColor = "#ffffff";
                    }, 400);
                    console.log(`Searching for: ${query}`);
                }
            }
        });
    }


    const cards = document.querySelectorAll(".delivery-cards .card");

    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s, box-shadow 0.3s ease, border-color 0.3s ease`;
        observer.observe(card);
    });


    const footer = document.querySelector("footer");
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `Copyright &copy; ${currentYear} | All rights reserved <sup>&reg;</sup>`;
    }
});