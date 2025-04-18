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

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.politica-container');
    const items = document.querySelectorAll('.politica-item');

    // Função para posicionar os itens
    function positionItems() {
        const containerRect = container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;

        // Centro do container
        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;

        // Raio do círculo (proporcional ao container)
        const radius = Math.min(containerWidth, containerHeight) * 0.35; // 35% do menor lado

        items.forEach((item, index) => {
            const angle = (index * 72) * (Math.PI / 180); // 72° entre cada item (360° / 5)
            const x = centerX + radius * Math.cos(angle) - (item.offsetWidth / 2); // Posição X
            const y = centerY + radius * Math.sin(angle) - (item.offsetHeight / 2); // Posição Y

            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
        });
    }

    // Posiciona os itens inicialmente
    positionItems();

    // Reposiciona os itens ao redimensionar a janela
    window.addEventListener('resize', positionItems);
});


    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o cabeçalho:', error));
 //página de cadastro//

    document.querySelector('.distribuidor-btn').addEventListener('click', function() {
        window.location.href = 'cadastro.html';
    });
    document.querySelector('.distribuidor-btn').addEventListener('click', function() {
        window.location.href = 'cadastro.html';
    });


    //mapa para pesquisa //
    // Lista de distribuidores (exemplo fictício - substitua pelos reais)
const distribuidores = [
    { nome: "Distribuidor São Paulo", lat: -23.5505, lng: -46.6333, endereco: "Rua Exemplo, 123, São Paulo - SP" },
    { nome: "Distribuidor Campinas", lat: -22.9099, lng: -47.0626, endereco: "Av. Teste, 456, Campinas - SP" },
    { nome: "Distribuidor Ribeirão Preto", lat: -21.1704, lng: -47.8103, endereco: "Rua Modelo, 789, Ribeirão Preto - SP" }
];

// Função para inicializar o mapa
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: -23.5505, lng: -46.6333 } // Centro inicial: São Paulo
    });

    // Adicionar marcadores para cada distribuidor
    distribuidores.forEach(dist => {
        const marker = new google.maps.Marker({
            position: { lat: dist.lat, lng: dist.lng },
            map: map,
            title: dist.nome
        });

        // InfoWindow com detalhes
        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${dist.nome}</h3><p>${dist.endereco}</p>`
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });

    // Preencher a lista de distribuidores (opcional)
    const lista = document.getElementById("distribuidores-list");
    distribuidores.forEach(dist => {
        const item = document.createElement("p");
        item.innerHTML = `<strong>${dist.nome}</strong> - ${dist.endereco}`;
        lista.appendChild(item);
    });
}

// Função de pesquisa
document.getElementById("search-btn").addEventListener("click", function() {
    const input = document.getElementById("search-input").value;
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: input + ", São Paulo, Brasil" }, function(results, status) {
        if (status === "OK") {
            const location = results[0].geometry.location;
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: location
            });

            // Adicionar marcadores próximos
            distribuidores.forEach(dist => {
                const distLatLng = new google.maps.LatLng(dist.lat, dist.lng);
                const distance = google.maps.geometry.spherical.computeDistanceBetween(location, distLatLng) / 1000; // Distância em km

                if (distance < 50) { // Mostrar distribuidores em um raio de 50km
                    const marker = new google.maps.Marker({
                        position: { lat: dist.lat, lng: dist.lng },
                        map: map,
                        title: dist.nome
                    });

                    const infoWindow = new google.maps.InfoWindow({
                        content: `<h3>${dist.nome}</h3><p>${dist.endereco}</p>`
                    });

                    marker.addListener("click", () => {
                        infoWindow.open(map, marker);
                    });
                }
            });
        } else {
            alert("Localização não encontrada. Tente novamente!");
        }
    });
});


