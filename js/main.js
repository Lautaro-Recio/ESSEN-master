/* Se grafican las recetas */

function generar (array){
    let i=0;
    for(const receta of array){ 
        i=i+1
        $("#recetas").append(`
        <div class="col-md-3 col-xs-6 swiper-slide recetas_cards estliloImportante estiloImportanteCelu " id="sacarEstilo${i}">
            <img class="recetas_imgs" src="${receta.img}" alt="${receta.receta}"></img>
            <p class="recetas_p"> ${receta.receta} </p>
            <button class="recetas_cards_botones"></button>
        </div>
        `);
        if(navigator.userAgent.toLowerCase().match(/mobile/)){
            dispositivo.esMovil=true
            document.getElementById("sacarEstilo"+i).classList.remove("estliloImportante")
        }
    };
    
     

   
}

/* Corto el array de recetas para que queden los 6 primeros botones */
let botones;
botones = recetas.slice(0,5);
/* Se grafican los botones */
for(const boton of botones){  
    $("#botones").append(`
        <button class="recetas_botones swiper-slide" id=${JSON.stringify(boton.btns)}onclick=categorias(${JSON.stringify(boton.btns)})>${boton.categorias}</button>           
    `)
};

/* Funcion para que cambie de color la nav */
$(window).scroll(function(){

    if($(this).scrollTop() !== 0){ 
        document.getElementById("nav").classList.add("blanco")
    }else if($(this).scrollTop() === 0){
        document.getElementById("nav").classList.remove("blanco")
    }
})

    

function categorias (cat){
    switch(cat){
        case "juntada":{
            /* Borro los elementos de recetas */
            $("#recetas").html("")
            let felices = recetas.filter(function(cats) {
                return cats.categorias ==="Hoy nos juntamos"
            })
            generar(felices)
            document.getElementById("juntada").classList.add("botonEnRojo")
            document.getElementById("citas").classList.remove("botonEnRojo")
            document.getElementById("solo").classList.remove("botonEnRojo")
            document.getElementById("dulce").classList.remove("botonEnRojo")
            document.getElementById("saludable").classList.remove("botonEnRojo")
            $("#recetas_p").html("Para que sea fácil, rico y divertido juntarse con la banda")
            $("#botonMas").show(1000)
            $(".recetas_cards_botones").html("<a class=links href=https://drive.google.com/drive/folders/1D-mLnDkwp6jQU4HlZrIHVeyWbWo4nZT9?usp=sharing target='blanck' >Ver receta</a>")

            break
        }
        case "citas":{
            /* Borro los elementos de recetas */
            $("#recetas").html("")
            let citas= recetas.filter(function(cats) {
                return cats.categorias ==="Para citas"
            })
            generar(citas)
            document.getElementById("citas").classList.add("botonEnRojo")        
            document.getElementById("juntada").classList.remove("botonEnRojo")
            document.getElementById("solo").classList.remove("botonEnRojo")
            document.getElementById("dulce").classList.remove("botonEnRojo")
            document.getElementById("saludable").classList.remove("botonEnRojo")
            $("#recetas_p").html("Yo te propongo la comida y vos hacé el resto😉")
            $("#botonMas").show(1000)
            $(".recetas_cards_botones").html("<a class=links href=https://drive.google.com/drive/folders/1icWRWIpCQDY2rthreNeQiqjoyB6Xsggx?usp=sharing target='blanck' >Ver receta</a>")

            break
        }
        case "solo":{
            /* Borro los elementos de recetas */
            $("#recetas").html("")
            let solo= recetas.filter(function(cats) {
                return cats.categorias ==="Solo en casa"
            })
            generar(solo)
            document.getElementById("solo").classList.add("botonEnRojo")        
            document.getElementById("citas").classList.remove("botonEnRojo")
            document.getElementById("juntada").classList.remove("botonEnRojo")
            document.getElementById("dulce").classList.remove("botonEnRojo")
            document.getElementById("saludable").classList.remove("botonEnRojo")
            $("#recetas_p").html("Recetas para comer rápido y rico")
            $("#botonMas").show(1000)
            $(".recetas_cards_botones").html("<a class=links href=https://drive.google.com/drive/folders/1TAJ3NbPd2Mcuy976jHVltKbDmIV27pqD?usp=sharing target='blanck' >Ver receta</a>")

            break
        }
        case "dulce":{
            /* Borro los elementos de recetas */
            $("#recetas").html("")
            let dulce= recetas.filter(function(cats) {
                return cats.categorias ==="Estoy para algo dulce"
            })
            generar(dulce)
            document.getElementById("dulce").classList.add("botonEnRojo")        
            document.getElementById("citas").classList.remove("botonEnRojo")
            document.getElementById("solo").classList.remove("botonEnRojo")
            document.getElementById("juntada").classList.remove("botonEnRojo")
            document.getElementById("saludable").classList.remove("botonEnRojo")
            $("#recetas_p").html("Para esos momentos que tenés que improvisar algo dulce")
            $("#botonMas").show(1000)
            $(".recetas_cards_botones").html("<a class=links href=https://drive.google.com/drive/folders/1dc-u1WCe9KOwBIGvhKLpyA69XIFQOyCL?usp=sharing target='blanck' >Ver receta</a>")


            break
        }
        case "saludable":{
            /* Borro los elementos de recetas */
            $("#recetas").html("")
            let saludable= recetas.filter(function(cats) {
                return cats.categorias ==="Saludable"
            })
            generar(saludable)
            document.getElementById("saludable").classList.add("botonEnRojo")        
            document.getElementById("citas").classList.remove("botonEnRojo")
            document.getElementById("solo").classList.remove("botonEnRojo")
            document.getElementById("dulce").classList.remove("botonEnRojo")
            document.getElementById("juntada").classList.remove("botonEnRojo")
            $("#recetas_p").html("Esas recetas que combinan lo rico con lo sano")
            $("#botonMas").show(1000)
            $(".recetas_cards_botones").html("<a class=links href=https://drive.google.com/drive/folders/1Vi2cs7zlC21Xj37hrblkI_FFWAR9kE8m?usp=sharing target='blanck' >Ver receta</a>")

            break
        }
       
    }
}

$("#↓").click(function(e){
    e.preventDefault();
    console.log("hola")
    $('html, body').animate({
        scrollTop: $("#quiero").offset().top  
    });
})
     

const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 40
            },

            800: {
                slidesPerView: 4,
                spaceBetween: 40
            },

            960: {
                slidesPerView: 4,
                spaceBetween: 80
            },

            1120: {
                slidesPerView: 4,
                spaceBetween: 120
            },

            1440: {
                spaceBetween: 170,
                slidesPerView: 4,
            }
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        loop: false,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination2',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 40
            },

            800: {
                slidesPerView: 4,
                spaceBetween: 40
            },

            960: {
                slidesPerView: 4,
                spaceBetween: 80
            },

        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
    });

    const swiper3 = new Swiper('.swiper3', {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination3',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 40
            },

            800: {
                slidesPerView: 4,
                spaceBetween: 40
            },

            960: {
                slidesPerView: 4,
                spaceBetween: 80
            },

            1120: {
                slidesPerView: 4,
                spaceBetween: 120
            },

            1440: {
                spaceBetween: 170,
                slidesPerView: 4,
            }
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
        },
    });

class dispositivo{
    esMovil=false
    esTablet=false
    esOrdenador=false
    esIpad=false
}
const deteccion=()=>{
    dispositivo = new dispositivo()
    if(navigator.userAgent.toLowerCase().match(/mobile/)){
        console.log("soy celu")
        dispositivo.esMovil=true

    }
    else{
        if (navigator.userAgent.toLowerCase().match(/tablet/)){
            dispositivo.esTablet=true
            console.log("soy tablet")

        } else {
            dispositivo.esOrdenador=true
            window.onload=function(){
                document.getElementById("dulce").classList.remove("swiper-slide")
                document.getElementById("solo").classList.remove("swiper-slide")
                document.getElementById("juntada").classList.remove("swiper-slide")
                document.getElementById("citas").classList.remove("swiper-slide")
                document.getElementById("saludable").classList.remove("swiper-slide")

                document.getElementById("botones").classList.remove("swiper-wrapper")
                document.getElementById("vertical").classList.remove("swiper-horizontal")
                document.getElementById("vertical").classList.add("swiper-vertical")
                console.log("soy compu")
            }
            

        }
    }
    console.log(navigator.userAgent.toLowerCase())
}



window.addEventListener("load", deteccion())

