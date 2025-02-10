function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}





$(document).ready(function () {
    // Lista de personajes con sus datos
    const characters = [
        {
            name: "Jessie",
            image: "img/Jessie_Skin-Default.webp",
            basicN: "Bola Eléctrica",
            basicD: "Una bola que es eléctrica.",
            superN: "Torreta",
            superD: "Una torreta automática.",
            passive: "La bola rebota.",
            icons: "img/Jessie_Portrait.webp"
        },
        {
            name: "Spike",
            image: "img/Spike_Skin-Default.webp",
            basicN: "Putiaso",
            basicD: "Te cruza la cara.",
            superN: "Granada Pinchosa",
            superD: "Lanza una granada que pincha.",
            passive: "La granada explota en pinchitos.",
            icons: "img/Spike_Portrait.webp"
        },
        {
            name: "Dynamike",
            image: "img/Dynamike_Skin-Default.webp",
            basicN: "Dinamita",
            basicD: "BOOM.",
            superN: "Voladura",
            superD: "KABOOM",
            passive: "Todo explota.",
            icons: "img/Dynamike_Portrait.webp"
        },
        {
            name: "Frank",
            image: "img/Frank_Skin-Default.png",
            basicN: "Martillazo",
            basicD: "Te parte la cabesa.",
            superN: "Megamartillazo",
            superD: "Te revienta.",
            passive: "Si le pegas se cabrea.",
            icons: "img/Frank_Portrait.webp"
        },
        {
            name: "El Primo",
            image: "img/El_Primo_Skin-Default.webp",
            basicN: "Puñetisa",
            basicD: "BUENAS NOCHES",
            superN: "Salto épico",
            superD: "EEEEEEL PRIMOOOO",
            passive: "Es EL PRIMO.",
            icons: "img/El_Primo_Portrait.webp"
        }
    ];

    let currentIndex = 0;

    // Función para actualizar el personaje mostrado
    function updateCharacter() {
        let char = characters[currentIndex];
        $("#character-name").text(char.name);
        $("#character-image").attr("src", char.image);
        $("#basic-name").text(char.basicN);
        $("#basic-desc").text(char.basicD);
        $("#super-name").text(char.superN);
        $("#super-desc").text(char.superD);
        $("#passive-text").text(char.passive);

        $(".character-icons img").removeClass("selected");
        $(`.character-icons img[data-index=${currentIndex}]`).addClass("selected");
    }


    /*$("#prev").click(function () {
        console.log("Botón Anterior presionado");
        currentIndex = (currentIndex === 0) ? characters.length - 1 : currentIndex - 1;
        updateCharacter();
    });
    
    $("#next").click(function () {
        console.log("Botón Siguiente presionado");
        currentIndex = (currentIndex === characters.length - 1) ? 0 : currentIndex + 1;
        updateCharacter();
    });
    */

    // Eventos de las flechas de navegación
    $("#prev").click(function () {
        currentIndex = (currentIndex === 0) ? characters.length - 1 : currentIndex - 1;
        updateCharacter();
    });

    $("#next").click(function () {
        currentIndex = (currentIndex === characters.length - 1) ? 0 : currentIndex + 1;
        updateCharacter();
    });

    $(".character-icons img").click(function () {
        currentIndex = $(this).data("index");
        updateCharacter();
    });

    // Inicializar con el primer personaje
    updateCharacter();
});
