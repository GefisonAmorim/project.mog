document.addEventListener("DOMContentLoaded", function () {
    // Animação de contador nos destaques numéricos
    const counters = document.querySelectorAll(".destaque-item h3 span");
    counters.forEach(counter => {
        let target = parseInt(counter.parentElement.getAttribute("data-counter"));
        let count = 0;
        let speed = target / 100;

        function updateCount() {
            count += speed;
            if (count < target) {
                counter.textContent = Math.floor(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        }
        updateCount();
    });

    // Modal dos pilares interativos
    const pilarButtons = document.querySelectorAll(".pilar-modal-btn");
    pilarButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Mais informações sobre " + this.previousElementSibling.textContent);
        });
    });

    // Quick View nos produtos em destaque
    const quickViewButtons = document.querySelectorAll(".quick-view");
    quickViewButtons.forEach(button => {
        button.addEventListener("click", function () {
            let productName = this.parentElement.nextElementSibling.textContent;
            alert("Visualizando: " + productName);
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item summary");
    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            this.parentElement.classList.toggle("open");
        });
    });
});
