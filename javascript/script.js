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
            icons: "img/Jessie_Portrait.webp",
            skills: [
                { icon: "img/jessie_skill1.webp", title: "Sobrecarga", text: "Aumenta el daño de la torreta." },
                { icon: "img/jessie_skill2.webp", title: "Ralentización", text: "La torreta ralentiza enemigos." },
                { icon: "img/jessie_skill3.webp", title: "Reparación", text: "La torreta se repara sola." },
                { icon: "img/jessie_skill4.webp", title: "Rebote Extra", text: "Los ataques rebotan más veces." },
                { icon: "img/jessie_skill5.webp", title: "Carga Rápida", text: "Carga su súper más rápido." }
            ]
        },
        {
            name: "Spike",
            image: "img/Spike_Skin-Default.webp",
            basicN: "Putiaso",
            basicD: "Te cruza la cara.",
            superN: "Granada Pinchosa",
            superD: "Lanza una granada que pincha.",
            icons: "img/Spike_Portrait.webp",
            skills: [
                { icon: "img/spike_skill1.webp", title: "Explosión Mayor", text: "Aumenta el área de la granada." },
                { icon: "img/spike_skill2.webp", title: "Espinas Persistentes", text: "Los picos duran más tiempo." },
                { icon: "img/spike_skill3.webp", title: "Sprint Espinoso", text: "Gana velocidad dentro del súper." },
                { icon: "img/spike_skill4.webp", title: "Curación Espinosa", text: "Los ataques curan a Spike." },
                { icon: "img/spike_skill5.webp", title: "Carga Rápida", text: "Carga su súper más rápido." }
            ]
        },
        {
            name: "Dynamike",
            image: "img/Dynamike_Skin-Default.webp",
            basicN: "Dinamita",
            basicD: "BOOM.",
            superN: "Voladura",
            superD: "KABOOM",
            icons: "img/Dynamike_Portrait.webp",
            skills: [
                { icon: "img/dyna_skill1.webp", title: "Sobrecarga", text: "Aumenta el daño de la torreta." },
                { icon: "img/dyna_skill2.webp", title: "Ralentización", text: "La torreta ralentiza enemigos." },
                { icon: "img/dyna_skill3.webp", title: "Reparación", text: "La torreta se repara sola." },
                { icon: "img/dyna_skill4.webp", title: "Rebote Extra", text: "Los ataques rebotan más veces." },
                { icon: "img/dyna_skill5.webp", title: "Carga Rápida", text: "Carga su súper más rápido." }
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
            basicN: "Puñetisa",
            basicD: "BUENAS NOCHES",
            superN: "Salto épico",
            superD: "EEEEEEL PRIMOOOO",
            icons: "img/El_Primo_Portrait.webp",
            skills: [
                { icon: "img/primo_skill1.webp", title: "Explosión Mayor", text: "Aumenta el área de la granada." },
                { icon: "img/primo_skill2.webp", title: "Espinas Persistentes", text: "Los picos duran más tiempo." },
                { icon: "img/primo_skill3.webp", title: "Sprint Espinoso", text: "Gana velocidad dentro del súper." },
                { icon: "img/primo_skill4.webp", title: "Curación Espinosa", text: "Los ataques curan a Spike." },
                { icon: "img/primo_skill5.webp", title: "Carga Rápida", text: "Carga su súper más rápido." }
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
