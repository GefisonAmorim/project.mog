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
    //destaques
function animateCounters() {
    const counters = document.querySelectorAll(".destaque-item h3 span");

    counters.forEach(counter => {
        const target = parseInt(counter.parentElement.getAttribute("data-counter"));
        let count = 0;
        const increment = Math.ceil(target / 100);
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                counter.textContent = target;
                clearInterval(interval);
            } else {
                counter.textContent = count;
            }
        }, 30);
    });
}
window.addEventListener("load", animateCounters);

//mapa//
function initMap() {
    // Coordenadas aproximadas das unidades
    const biritibaMirim = { lat: -23.5727, lng: -46.0386 }; // Biritiba-Mirim, SP
    const itapecericaDaSerra = { lat: -23.7118, lng: -46.8492 }; // Itapecerica da Serra, SP

    // Centro do mapa (média entre as duas localizações)
    const center = { lat: -23.64225, lng: -46.4439 };

    // Inicializar o mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9, // Zoom ajustado para mostrar as duas cidades
        center: center,
        mapTypeId: "roadmap",
    });

    // Marcador para Biritiba-Mirim
    const markerBiritiba = new google.maps.Marker({
        position: biritibaMirim,
        map: map,
        title: "Biritiba-Mirim",
    });

    // InfoWindow para Biritiba-Mirim
    const infoWindowBiritiba = new google.maps.InfoWindow({
        content: `
            <div class="info-window">
                <h3>Biritiba-Mirim</h3>
                <p>Localizada a 90 km de São Paulo, nossa nascente natural fornece água mineral fluoretada desde 1954, garantindo pureza e qualidade.</p>
            </div>
        `,
    });

    markerBiritiba.addListener("click", () => {
        infoWindowBiritiba.open(map, markerBiritiba);
        infoWindowItapecerica.close(); // Fecha o outro InfoWindow
    });

    // Marcador para Itapecerica da Serra
    const markerItapecerica = new google.maps.Marker({
        position: itapecericaDaSerra,
        map: map,
        title: "Itapecerica da Serra",
    });

    // InfoWindow para Itapecerica da Serra
    const infoWindowItapecerica = new google.maps.InfoWindow({
        content: `
            <div class="info-window">
                <h3>Itapecerica da Serra</h3>
                <p>Situada a 40 km de São Paulo, essa fonte está inserida em uma área de preservação ambiental, proporcionando uma água pura e de alto padrão desde 2002.</p>
            </div>
        `,
    });

    markerItapecerica.addListener("click", () => {
        infoWindowItapecerica.open(map, markerItapecerica);
        infoWindowBiritiba.close(); // Fecha o outro InfoWindow
    });
}
