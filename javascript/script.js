function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
       


/* SELECCION BRAWLER */



$(document).ready(function () {
    // Lista de personajes con sus datos
    const characters = [
        {
            name: "Jessie",
            image: "img/Jessie_Skin-Default.webp",
            basicN: "Rifle aturdidor",
            basicD: "Jessie dispara una esfera de energía. Tras alcanzar al primer objetivo, esta masa de energía puede llegar a alcanzar a hasta dos objetivos más. El daño que inflige se reduce un 25% con cada rebote.",
            superN: "Chatarreta",
            superD: "Jessie despliega una torreta capaz de disparar automáticamente. ¡100% hecha de materiales reciclados!",
            icons: "img/Jessie_Portrait.webp",
            skills: [
                { icon: "img/jessie_skill1.png", title: "Bujía", text: "La torreta de Jessie lanza una onda sísmica que ralentiza a todos los rivales que se encuentren dentro del área de efecto." },
                { icon: "img/jessie_skill2.webp", title: "Intensificador", text: "La velocidad de ataque de la chatarreta se duplica durante 5 segundos." },
                { icon: "img/jessie_skill3.webp", title: "Energizante", text: "Jessie puede recuperar 1060 puntos de salud de su torreta con solo dispararle." },
                { icon: "img/jessie_skill4.webp", title: "Rebote electrizante", text: "La chatarreta dispara esferas de energía que rebotan entre los enemigos. Tras cada rebote, el alcance de las esferas aumenta un 51% del normal. " },
                { icon: "img/jessie_skill5.webp", title: "Chatarreta 2.0", text: "La torreta de Jessie tiene un 50% más de vida e inflige un 20% más de daño." }
            ]
        },
        {
            name: "Spike",
            image: "img/Spike_Skin-Default.webp",
            basicN: "Corazón espinado",
            basicD: "Spike lanza una bola espinosa de cactus que se divide en cuatro espinas al alcanzar su punto maximo o al impactar con un enemigo",
            superN: "Granada punzante",
            superD: "Spike lanza una bola espinosa que crea un campo de espinas que ralentizan a los enemigos y los daña 400 de daño por segundo",
            icons: "img/Spike_Portrait.webp",
            skills: [
                { icon: "img/spike_skill1.webp", title: "Lluvia de espinas", text: "Spike dispara 3 oleadas de espinas en todas direcciones, lo que inflige 1120 de daño por impacto." },
                { icon: "img/spike_skill2.webp", title: "Vida vegetal", text: "Spike planta un enorme cactus con 2400 puntos de salud para proteger a sus aliados. Si lo destruyen, el cactus explota y los aliados que se encuentren cerca recuperan 1440 puntos de salud." },
                { icon: "img/spike_skill3.webp", title: "Fertilizante", text: "Tras usar su súper, Spike regenera 1200 puntos de salud por segundo mientras esté en su área de efecto." },
                { icon: "img/spike_skill4.webp", title: "Curvatura", text: "Las espinas de la granada vuelan de forma curva, por lo que es más fail alcanzar al enemigo." },
                { icon: "img/spike_skill5.webp", title: "Temporada de floración", text: "La granada punzante actúa sobre un área un 20% mayor." }
            ]
        },
        {
            name: "Dynamike",
            image: "img/Dynamike_Skin-Default.webp",
            basicN: "Mecha corta",
            basicD: "Mike tira dos cartuchos de dinamita que sobrevuelan obstáculos. ¡Sus cartuchos son casi tan explosivos como su temperamento!",
            superN: "Barril explosivo",
            superD: "Mike lanza un barril grande de dinamita. Cuando este explota, quien sobreviva recibe un impacto hacia atrás.",
            icons: "img/Dynamike_Portrait.webp",
            skills: [
                { icon: "img/dyna_skill1.webp", title: "Giros explosivos", text: "Dynamike gira furiosamente con una velocidad de movimiento aumentada y tira cartuchos de dinamita a su alrededor. Cada cartucho inflige 2400 puntos de daño a los rivales." },
                { icon: "img/dyna_skill2.webp", title: "Pólvora Aturdidora", text: "El siguiente ataque principal aturde a los enemigos durante 1,5 segundos." },
                { icon: "img/dyna_skill3.webp", title: "Dinasalto", text: "Dynamike aprovecha la onda expansiva de sus explosivos para saltar los obstáculos. " },
                { icon: "img/dyna_skill4.webp", title: "Demolición", text: "Dynamike inflige 1600 puntos más de daño al usar su súper." },
                { icon: "img/dyna_skill5.webp", title: "Explosivo", text: "Una superbomba genera bombas más pequeñas." }
            ]
        },
        {
            name: "Frank",
            image: "img/Frank_Skin-Default.png",
            basicN: "Martillazo",
            basicD: "Frank se toma su tiempo para dar su martillazo, pero el impacto es tan fuerte que genera una gran conmoción.",
            superN: "Terapia de choque",
            superD: "Este golpe de Frank genera tal conmoción que destruye todo lo que se encuentra a su alrededor y aturde a los enemigos.",
            icons: "img/Frank_Portrait.webp",
            skills: [
                { icon: "img/frank_skill1.webp", title: "Cancelación de Ruido", text: "Frank puede volverse inmune momentáneamente a todo aturdimiento, ralentización o impacto hacia atrás." },
                { icon: "img/frank_skill2.webp", title: "Atracción irresistible", text: "El siguiente ataque de Frank atraerá a los rivales hacia él y les hará el doble de daño." },
                { icon: "img/frank_skill3.webp", title: "Toma de Fuerza", text: "Frank roba el poder de un Brawler que derrota, aumentando su daño en un 25% durante 12 segundos." },
                { icon: "img/frank_skill4.webp", title: "Esponja", text: "Frank gana 1340 de vida." },
                { icon: "img/frank_skill5.webp", title: "Impacto Sísmico", text: "El súper de Frank ahora impacta a su alrededor." }
            ]
        },
        {
            name: "El Primo",
            image: "img/El_Primo_Skin-Default.webp",
            basicN: "Puños de furia",
            basicD: "El primo asesta cuatro puñetazos feroces que pican más que un buen frasco de jalapeños.",
            superN: "Codo intergaláctico",
            superD: "Este luchador salta por los aires y, al aterrizar, da un codazo intergaláctico que machaca a los enemigos y destroza refugios.",
            icons: "img/El_Primo_Portrait.webp",
            skills: [
                { icon: "img/primo_skill1.webp", title: "Vuelta de tuerca", text: "El Primo agarra al enemigo más cercano y lo lanza por el aire como si fuera una tortilla." },
                { icon: "img/primo_skill2.webp", title: "Cinturón de asteroides", text: "El Primo invoca un pequeño meteorito que aterriza sobre el enemigo más cercano. Este meteorito inflige 3040 puntos de daño y destruye los muros." },
                { icon: "img/primo_skill3.webp", title: "El fuego", text: "Cuando El Primo realiza su superataque, los enemigos que se encuentren dentro de su alcance arden durante 4 segundos y reciben 1784 puntos de daño." },
                { icon: "img/primo_skill4.webp", title: "Deprisa y corriendo", text: "Tras usar su súper, la velocidad de El Primo aumenta un 25% durante 4 segundos." },
                { icon: "img/primo_skill5.webp", title: "Salto gravitacional", text: "El Primo salta por los aires y al aterrizar da un codazo intergaláctico que atrae a los enemigos hacia el epicentro del impacto." }
            ]
        }
    ];

    let currentIndex = 0;
    let selectedSkill = 0;


    // Función para actualizar el personaje mostrado
    function updateCharacter() {
        let char = characters[currentIndex];
        $("#character-name").text(char.name);
        $("#character-image").attr("src", char.image);
        $("#basic-name").text(char.basicN);
        $("#basic-desc").text(char.basicD);
        $("#super-name").text(char.superN);
        $("#super-desc").text(char.superD);

        $(".passive-icon").each(function (index) {
            $(this).attr("src", char.skills[index].icon);
        });

        $("#passive-title").text(char.skills[selectedSkill].title);
        $("#passive-text").text(char.skills[selectedSkill].text);


        $(".character-icons img").removeClass("selected");
        $(`.character-icons img[data-index=${currentIndex}]`).addClass("selected");
        $(`.passive-icon img[data-index=${selectedSkill}]`).addClass("selected");

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


    $(".passive-icon").click(function () {
        selectedSkill = $(this).data("index");
        updateCharacter();
    });

    // Inicializar con el primer personaje
    updateCharacter();
});




/* OPCIONES */

$(document).ready(function() {
    $("#toggleMenu").click(function() {
        $("#menuContainer").css("right", "0");
    });

    $("#closeMenu").click(function() {
        $("#menuContainer").css("right", "-300px");
    });

    $(".menuButton").click(function() {
        var target = $(this).data("target");
        if (target) {
            $(".menuScreen").removeClass("active");
            $(target).addClass("active");
        }
    });

    $("#goToIndex").click(function() {
        window.location.href = "index.html";
    });

    $("#goToCharacters").click(function() {
        window.location.href = "brawlers.html";
    });

    $("#goToMaps").click(function() {
        window.location.href = "events.html";
    });

    $("#goToHUD").click(function() {
        window.location.href = "hud.html";
    });
});















    


