
/**AJAX POST*/ 
const URLGET = "https://jsonplaceholder.typicode.com/posts"
$("#btnformularioConsulta").click(() => { 
    const nombreC =  $("#nombre2").val();
    const apellidoC =  $("#apellido1").val();
    const mailC =  $("#mail1").val();
    const motivoC = $("#motivosC").val();
    const datosConsulta = [nombreC, apellidoC, mailC, motivoC];
    if (nombreC != "" && apellidoC != "" && mailC != ""){

        $.post(URLGET, datosConsulta, (respuesta, estado) => {
        if(estado === "success"&& respuesta != ""){   
            alert ("Tu consulta por "+ motivoC +" fue enviada "+ nombreC);
        }  
        });
    }
    else {
        alert ("Por favor, completa todos los datos antes de enviar tu consulta");
    }

});


//**CALCULAR SIGNO */

let formulario = $("#btnformularioSigno");
let padre = document.getElementById("here");
let botonVer1 = $("#versigno1"); 
let botonVer2 = document.getElementById("versigno2");

function calcularsigno(){
    let nombreIngresado = $("#nombreI").val();
  
    if (nombreIngresado == ""){
    alert("Porfavor ingrese su nombre");
    }

    else {   
        let mes = $("#seleccionmes").val();
        let dia = $("#diaseleccion").val();
        let signoCalculado = $("#resultadoCalcularSigno");
        switch (mes) {
            case "1": 
                signoCalculado.empty();
                if (dia >= 32 || dia <= 0){
                    alert("Esa fecha no corresponde a Enero");
                }
                else if (dia <= 20 ){   
                    signoCalculado.append(`<div class="card justify-content-center card_tierra">
                    <img src="img/zsimbol/capricornio.jpg" width="80px" class="rounded-circle sombra" alt="capricornio simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres CAPRICORNIO </p>
                    <p>El décimo signo del zodiaco</p></div>`).hide().show("slow");                        
                }
                else {   
                    signoCalculado.append(`<div class="card justify-content-center card_aire">
                    <img src="img/zsimbol/acuario.jpg" width="80px" class="rounded-circle sombra" alt="acuario simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres ACUARIO </p>
                    <p>El undécimo signo del zodiaco</p></div>`).hide().show("slow");  
                } 
                break;
            case "2":
                signoCalculado.empty();
                if (dia > 29 || dia <= 0){
                    alert("Esa fecha no corresponde a Febrero");
                }
                else if (dia <= 18){   
                    signoCalculado.append(`<div class="card justify-content-center card_aire">
                    <img src="img/zsimbol/acuario.jpg" width="80px" class="rounded-circle sombra" alt="acuario simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres ACUARIO </p>
                    <p>El undécimo signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                else {   
                    signoCalculado.append(`<div class="card justify-content-center card_agua">
                    <img src="img/zsimbol/piscis.jpg" width="80px" class="rounded-circle sombra" alt="piscis simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres PISCIS </p>
                    <p>El duodécimo signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                break;
            case "3":
                signoCalculado.empty();
                if (dia >= 32 || dia <= 0){
                    alert("Esa fecha no corresponde a Marzo");
                }
                else if (dia <= 19){   
                    signoCalculado.append(`<div class="card justify-content-center card_agua">
                    <img src="img/zsimbol/piscis.jpg" width="80px" class="rounded-circle sombra" alt="piscis simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres PISCIS </p>
                    <p>El duodécimo signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                else if (dia > 19 && dia <=31) {   
                    signoCalculado.append(`<div class="card justify-content-center card_fuego">
                    <img src="img/zsimbol/aries.jpg" width="80px" class="rounded-circle sombra" alt="aries simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres ARIES </p>
                    <p>El primer signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                break;
            case "4":
                signoCalculado.empty();
                if (dia >= 31 || dia <= 0){
                    alert("Esa fecha no corresponde a Abril");
                }
                else if (dia <= 19){   
                    signoCalculado.append(`<div class="card justify-content-center card_fuego">
                    <img src="img/zsimbol/aries.jpg" width="80px" class="rounded-circle sombra" alt="aries simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres ARIES </p>
                    <p>El primer signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                else {   
                    signoCalculado.append(`<div class="card justify-content-center card_tierra">
                    <img src="img/zsimbol/tauro.jpg" width="80px" class="rounded-circle sombra" alt="tauro simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres TAURO </p>
                    <p>El segundo signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                break;
            case "5":
                signoCalculado.empty();
                if (dia >= 32 || dia <= 0){
                    alert("Esa fecha no corresponde a Mayo");
                }
                else if (dia <= 20){
                signoCalculado.append(`<div class="card justify-content-center card_tierra">
                <img src="img/zsimbol/tauro.jpg" width="80px" class="rounded-circle sombra" alt="tauro simbolo"><br>
                <p>Te damos la bienvenida
                <strong>${nombreIngresado}</strong></p>
                <p>\nEres TAURO </p>
                <p>El segundo signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                else {
                    signoCalculado.append(`<div class="card justify-content-center card_aire">
                    <img src="img/zsimbol/geminis.jpg" width="80px" class="rounded-circle sombra" alt="geminis simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres GEMINIS </p>
                    <p>El tercer signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                break;
            case "6":
                signoCalculado.empty();
                if (dia >= 31 || dia <= 0){
                    alert("Esa fecha no corresponde a Junio");
                }
                else if (dia <= 20){
                    signoCalculado.append(`<div class="card justify-content-center card_aire">
                    <img src="img/zsimbol/geminis.jpg" width="80px" class="rounded-circle sombra" alt="geminis simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres GEMINIS </p>
                    <p>El tercer signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                else {
                    signoCalculado.append(`<div class="card justify-content-center card_agua">
                    <img src="img/zsimbol/cancer.jpg" width="80px" class="rounded-circle sombra" alt="cancer simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres CANCER </p>
                    <p>El cuarto signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                break;
            case "7":
                signoCalculado.empty();
                if (dia >= 32 || dia <= 0){
                    alert("Esa fecha no corresponde a Julio");
                }
                else if (dia <= 22){
                    signoCalculado.append(`<div class="card justify-content-center card_agua">
                    <img src="img/zsimbol/cancer.jpg" width="80px" class="rounded-circle sombra" alt="cancer simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres CANCER </p>
                    <p>El cuarto signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                else {
                    signoCalculado.append(`<div class="card justify-content-center card_fuego">
                    <img src="img/zsimbol/leo.jpg" width="80px" class="rounded-circle sombra" alt="leo simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres LEO </p>
                    <p>El quinto signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                break;
            case "8":
                signoCalculado.empty();
                if (dia >= 32 || dia <= 0){
                    alert("Esa fecha no corresponde a Agosto");
                }
                else if (dia <= 22){
                    signoCalculado.append(`<div class="card justify-content-center card_fuego">
                    <img src="img/zsimbol/leo.jpg" width="80px" class="rounded-circle sombra" alt="leo simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres LEO </p>
                    <p>El quinto signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                else {
                    signoCalculado.append(`<div class="card justify-content-center card_tierra">
                    <img src="img/zsimbol/virgo.jpg" width="80px" class="rounded-circle sombra" alt="virgo simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres VIRGO </p>
                    <p>El sexto signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                break;
            case "9":
                signoCalculado.empty();
                if (dia >= 31 || dia <= 0){
                    alert("Esa fecha no corresponde a Septiembre");
                }
                else if (dia <= 22){
                    signoCalculado.append(`<div class="card justify-content-center card_tierra">
                    <img src="img/zsimbol/virgo.jpg" width="80px" class="rounded-circle sombra" alt="virgo simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres VIRGO </p>
                    <p>El sexto signo del zodiaco</p></div>`).hide().show("slow");

                } 
                else {
                    signoCalculado.append(`<div class="card justify-content-center card_aire">
                    <img src="img/zsimbol/libra.jpg" width="80px" class="rounded-circle sombra" alt="libra simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres LIBRA </p>
                    <p>El séptimo signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                break;
            case "10":
                signoCalculado.empty();
                if (dia >= 32 || dia <= 0){
                    alert("Esa fecha no corresponde a Octubre");
                }
                else if (dia <= 22){
                    signoCalculado.append(`<div class="card justify-content-center card_aire">
                    <img src="img/zsimbol/libra.jpg" width="80px" class="rounded-circle sombra" alt="libra simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres LIBRA </p>
                    <p>El séptimo signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                else {
                    signoCalculado.append(`<div class="card justify-content-center card_agua">
                    <img src="img/zsimbol/escorpio.jpg" width="80px" class="rounded-circle sombra" alt="escorpio simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres ESCORPIO </p>
                    <p>El octavo signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                break;
            case "11":
                signoCalculado.empty();
                if (dia >= 3 || dia <= 0){
                    alert("Esa fecha no corresponde aNoviembre");
                }
                else if (dia <= 21){
                    signoCalculado.append(`<div class="card justify-content-center card_agua">
                    <img src="img/zsimbol/escorpio.jpg" width="80px" class="rounded-circle sombra" alt="escorpio simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres ESCORPIO </p>
                    <p>El octavo signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                else {
                    signoCalculado.append(`<div class="card justify-content-center card_fuego">
                    <img src="img/zsimbol/sagitario.jpg" width="80px" class="rounded-circle sombra" alt="sagitario simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres SAGITARIO </p>
                    <p>El noveno signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                break;
            case "12":
                signoCalculado.empty();
                if (dia >= 32 || dia <= 0){
                    alert("Esa fecha no corresponde a Diciembre");
                }
                else if (dia <= 21){
                    signoCalculado.append(`<div class="card justify-content-center card_fuego">
                    <img src="img/zsimbol/sagitario.jpg" width="80px" class="rounded-circle sombra" alt="sagitario simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres SAGITARIO </p>
                    <p>El noveno signo del zodiaco</p></div>`).hide().show("slow");   
                } 
                else {   
                    signoCalculado.append(`<div class="card justify-content-center card_tierra ">
                    <img src="img/zsimbol/capricornio.jpg" width="80px" class="rounded-circle sombra" alt="capricornio simbolo"><br>
                    <p>Te damos la bienvenida
                    <strong>${nombreIngresado}</strong></p>
                    <p>\nEres CAPRICORNIO </p>
                    <p>El décimo signo del zodiaco</p></div>`).hide().show("slow");   
                }
                break; 
        } 
    }
}

//**ANIMACIONES SCROLL */

$("#irASigno").click( function(e) { 
    e.preventDefault();
    //Animamos sus propiedades CSS con animate
    $('html, body').animate({
        scrollTop: $("#seccionSigno").offset().top  
    }, 2000);
} );

$("#irAParejas").click( function(e) { 
    e.preventDefault();
    //Animamos sus propiedades CSS con animate
    $('html, body').animate({
        scrollTop: $("#seccionParejas").offset().top  
    }, 2000);
} );

$("#irAContacto").click( function(e) { 
    e.preventDefault();
    //Animamos sus propiedades CSS con animate
    $('html, body').animate({
        scrollTop: $("#seccionContacto").offset().top  
    }, 2000);
} );





//**FUNCIONES VER INFORMACION DE SIGNOS */


function mostrarSigno(){
    let signoVer= document.getElementById("seleccionSigno").value;
    document.getElementById("here").innerHTML = "";
    $(padre).hide();
    for (let i = 0; i < signos.length ; i++){ 
        if (signoVer == signos[i].signo.toLowerCase()){
           padre.innerHTML+=`<div class="card">
            <img src="${signos[i].fondo}" class="card-img-top img_zodiac"><br>
            <p class="text-center"><strong> ${signos[i].signo}</strong></p>
            <img src="${signos[i].imagen}" width="80px" class="rounded-circle sombra"><br>
            <p><strong>Elemento:</strong> ${signos[i].elemento}</p>
            <p><strong>Cualidad:</strong> ${signos[i].cualidad}</p>
            <p><strong>Polaridad:</strong> ${signos[i].polaridad}</p>
            <p><strong>Descripción:</strong> ${signos[i].descripcion}</p></div>`;
            $(padre).toggle("slow");
           break;
        }
    }
}


function mostrarSignosElemento(){
    $(padre).show();
    document.getElementById("here").innerHTML = "";
    padre.innerHTML+=`<br>
    <button id="btnFuego"class="btn btn-primary">Ver signos de Fuego</button>
    <button id="btnAire" class="btn btn-primary">Ver signos de Aire</button>
    <button id="btnTierra"class="btn btn-primary">Ver signos de Tierra</button>
    <button id="btnAgua"class="btn btn-primary">Ver signos de Agua</button>`;
    $("#btnFuego").click(mostrarSignosFuego); 
    $("#btnAire").click(mostrarSignosAire); 
    $("#btnTierra").click(mostrarSignosTierra); 
    $("#btnAgua").click(mostrarSignosAgua);        
}

function mostrarSignosFuego(){
    document.getElementById("here").innerHTML = "";
    for (const cadaSigno of signos)
        if(cadaSigno.elemento == "Fuego"){
        padre.innerHTML+=`<div class="card justify-content-center">
        <p class="text-center"><strong>Signo: </strong> ${cadaSigno.signo}</p>
        <br>
        <img src="${cadaSigno.imagen}" width="80px" class="rounded-circle sombra"><br>
        <p><strong>Cualidad:</strong> ${cadaSigno.cualidad}</p>
        <p><strong>Descripción:</strong> ${cadaSigno.descripcion}</p></div>`;
        $(padre).hide().show("slow"); 
    }  
}

function mostrarSignosAire(){
    document.getElementById("here").innerHTML = "";
    for (const cadaSigno of signos)
        if(cadaSigno.elemento == "Aire"){
        padre.innerHTML+=`<div class="card justify-content-center">
        <p class="text-center"><strong>Signo: </strong> ${cadaSigno.signo}</p>
        <br>
        <img src="${cadaSigno.imagen}" width="80px" class="rounded-circle sombra"><br>
        <p><strong>Cualidad:</strong> ${cadaSigno.cualidad}</p>
        <p><strong>Descripción:</strong> ${cadaSigno.descripcion}</p></div>`;
        $(padre).hide().show("slow"); 
    }    
}

function mostrarSignosTierra(){
    document.getElementById("here").innerHTML = "";
    for (const cadaSigno of signos)
        if(cadaSigno.elemento == "Tierra"){
        padre.innerHTML+=`<div class="card justify-content-center">
        <p class="text-center"><strong>Signo: </strong> ${cadaSigno.signo}</p>
        <br>
        <img src="${cadaSigno.imagen}" width="80px" class="rounded-circle sombra"><br>
        <p><strong>Cualidad:</strong> ${cadaSigno.cualidad}</p>
        <p><strong>Descripción:</strong> ${cadaSigno.descripcion}</p></div>`;
        $(padre).hide().show("slow"); 
    }   
}

function mostrarSignosAgua(){
    document.getElementById("here").innerHTML = "";
    for (const cadaSigno of signos)
        if(cadaSigno.elemento == "Agua"){
        padre.innerHTML+=`<div class="card justify-content-center">
        <p class="text-center"><strong>Signo: </strong> ${cadaSigno.signo}</p>
        <br>
        <img src="${cadaSigno.imagen}" width="80px" class="rounded-circle sombra"><br>
        <p><strong>Cualidad:</strong> ${cadaSigno.cualidad}</p>
        <p><strong>Descripción:</strong> ${cadaSigno.descripcion}</p></div>`;
        $(padre).hide().show("slow"); 
    }   
}



function mostrarTodosSignos(){
    document.getElementById("here").innerHTML = "";
    $(padre).hide();
    for (const cadaSigno of signos)
        padre.innerHTML+=`     
        <div class="card justify-content-center">
        <br>
        <img src="${cadaSigno.imagen}" width="80px" class="rounded-circle sombra"><br>
        <p class="text-center"><strong>Signo: </strong> ${cadaSigno.signo}</p>
        <p class="text-center"><strong>Elemento:</strong> ${cadaSigno.elemento}</p>
        <p class="text-center"><strong>Cualidad:</strong> ${cadaSigno.cualidad}</p>
        <p class="text-center"><strong>Polaridad:</strong> ${cadaSigno.polaridad}</p>
        <p class="text-center"><strong>Descripción:</strong> ${cadaSigno.descripcion}</p></div>`;
        $(padre).toggle("slow");
}




//**objetos */
class signoAspectos {
    constructor(pSigno, pElemento, pCualidad, pPolaridad, pDescripcion, pImagen, pFondo){
    this.signo = pSigno; 
    this.elemento = pElemento;
    this.cualidad = pCualidad;
    this.polaridad = pPolaridad;
    this.descripcion = pDescripcion;
    this.imagen = pImagen;
    this.fondo = pFondo;
    }
}


//**arrays*/
let signosZodicales = ["ARIES", "TAURO", "GEMINIS", "CANCER", "LEO", "VIRGO", "LIBRA", "ESCORPIO", "SAGITARIO", "CAPRICORNIO", "ACUARIO", "PISCIS"];
let elementos = ["Fuego", "Tierra", "Aire", "Agua"];
let cualidades = ["Cardinal", "Fijo", "Mutable"];
let polaridad = ["Positiva", "Negativa"];
let descripcion = ["Un Aries es una persona llena de energía y entusiasmo. Pionero y aventurero, le encantan los retos, la libertad y las nuevas ideas. A los Aries les gusta liderar y prefieren dar instrucciones a recibirlas. Son independientes y preocupados por su propia ambición y objetivos.", 
                   "Un Tauro suele ser práctico, decidido y tener una gran fuerza de voluntad. Los Tauro son personas estables y conservadores, seguirán de forma leal un líder en el que tienen confianza. Les encanta la paz y tranquilidad y son muy respetuosos con las leyes y las reglas",
                   "Los Géminis empiezan nuevas actividades y retos con entusiasmo, pero muchas veces les falta la constancia para realizarlos. Consideran que la vida es como un juego y buscan la diversión y nuevas situaciones. Un Géminis suele ser cortés, cariñoso, amable y generoso. ",
                   "El carácter de un Cáncer es el menos claro de todos los signos del zodiaco. Un Cáncer puede ser desde tímido y aburrido hasta brillante y famoso. Los Cáncer son conservadores y les encanta la seguridad y el calor de su hogar. De hecho, para los nativos de este signo, su hogar es como un nido, un refugio donde ir cuando el estrés de su trabajo es demasiado.",
                   "Un Leo es el signo más dominante del zodiaco. También es creativo y extrovertido. Son los reyes entre los humanos, de la misma forma que los leones son los reyes en el reino animal. Tienen ambición, fuerza, valentía, independencia y total seguridad en sus capacidades.",
                   "Virgo, el único signo representado por una mujer, es un signo caracterizado por su precisión, su convencionalidad, su actitud reservada y su afán, a veces hasta obsesión, con la limpieza. Los Virgo suelen ser observadores y pacientes.",
                   "Los Libra se encuentran entre los signos más civilizados del zodiaco. Tienen encanto, elegancia y buen gusto, son amables y pacíficos. Les gusta la belleza y la armonía y son capaces de ser imparciales ante conflictos.",
                   "El Escorpio es un signo intenso con una energía emocional única en todo el zodiaco. Aunque puedan aparecer tranquilos, los Escorpio tienen una agresión y magnetismo interno escondidos dentro. Son afables, buenos tertulianos, reservados y cortés, pero aunque parezcan estar algo retirados del centro de actividad, en realidad están observando todo con su ojo crítico.",
                   "El Sagitario es uno de los signos más positivos del zodiaco. Son versátiles y les encanta la aventura y lo desconocido. Tienen la mente abierta a nuevas ideas y experiencias y mantienen una actitud optimista incluso cuando las cosas se les ponen difíciles.",
                   "Un Capricornio es un de los signos del zodiaco más estables, seguros y tranquilos. Son trabajadores, responsables, prácticos y dispuestos a persistir hasta sea necesario para conseguir su objetivo.",
                   "Los Acuario tienen una personalidad fuerte y atractiva. Hay dos tipos de Acuario: uno es tímido, sensible, y paciente. El otro tipo es exuberante, vivo y puede llegar a esconder las profundidades de su personalidad debajo de un aire frívolo.",
                   "Un Piscis tiene una personalidad tranquila, paciente y amable. Son sensibles a los sentimientos de los demás y responden con simpatía y tacto al sufrimiento de los demás. Son muy queridos por los demás porque tienen un carácter afable, cariñoso y amable, y no suponen una amenaza para los que quieren tener puestos de autoridad o mayor popularidad"
                ];
let imagenSigno = ["img/zsimbol/aries.jpg", "img/zsimbol/tauro.jpg", "img/zsimbol/geminis.jpg", "img/zsimbol/cancer.jpg", "img/zsimbol/leo.jpg", "img/zsimbol/virgo.jpg", "img/zsimbol/libra.jpg", "img/zsimbol/escorpio.jpg", "img/zsimbol/sagitario.jpg", "img/zsimbol/capricornio.jpg", "img/zsimbol/acuario.jpg", "img/zsimbol/piscis.jpg"];
let imagenSignoF = ["img/zodiaco/carnero.jpg", "img/zodiaco/bull.jpg", "img/zodiaco/gemelos.jpg", "img/zodiaco/cangrejo.jpg", "img/zodiaco/leon.jpg", "img/zodiaco/mujer.jpg", "img/zodiaco/balanza.jpg", "img/zodiaco/escorpion.jpg", "img/zodiaco/centauro.jpg", "img/zodiaco/cabramarina.jpg", "img/zodiaco/agua.jpg", "img/zodiaco/peces.jpg"];



//**CONOCER LAS CUALIDADES DE CADA SIGNO ZODIACAL */


const signo1 = new signoAspectos (signosZodicales[0],elementos[0], cualidades[0], polaridad[0], descripcion[0], imagenSigno[0], imagenSignoF[0]);
const signo2 = new signoAspectos (signosZodicales[1], elementos[1], cualidades[1], polaridad[1], descripcion[1], imagenSigno[1], imagenSignoF[1]);
const signo3 = new signoAspectos (signosZodicales[2], elementos[2], cualidades[2], polaridad[0], descripcion[2], imagenSigno[2], imagenSignoF[2]);
const signo4 = new signoAspectos (signosZodicales[3],  elementos[3], cualidades[0], polaridad[1], descripcion[3], imagenSigno[3], imagenSignoF[3]);
const signo5 = new signoAspectos (signosZodicales[4], elementos[0], cualidades[1], polaridad[0], descripcion[4], imagenSigno[4], imagenSignoF[4]);
const signo6 = new signoAspectos (signosZodicales[5], elementos[1], cualidades[2], polaridad[1], descripcion[5], imagenSigno[5], imagenSignoF[5]);
const signo7 = new signoAspectos (signosZodicales[6], elementos[2], cualidades[0], polaridad[0], descripcion[6] ,imagenSigno[6], imagenSignoF[6]);
const signo8 = new signoAspectos (signosZodicales[7], elementos[3], cualidades[1], polaridad[1], descripcion[7], imagenSigno[7], imagenSignoF[7]);
const signo9 = new signoAspectos (signosZodicales[8], elementos[0], cualidades[2], polaridad[0], descripcion[8], imagenSigno[8], imagenSignoF[8]);
const signo10 = new signoAspectos (signosZodicales[9], elementos[1], cualidades[0], polaridad[1], descripcion[9], imagenSigno[9], imagenSignoF[9]);
const signo11 = new signoAspectos (signosZodicales[10], elementos[2], cualidades[1], polaridad[0], descripcion[10], imagenSigno[10], imagenSignoF[10]);
const signo12 = new signoAspectos (signosZodicales[11], elementos[3], cualidades[2], polaridad[1], descripcion[11], imagenSigno[11], imagenSignoF[11]);

let signos = [signo1, signo2, signo3, signo4, signo5, signo6, signo7, signo8, signo9, signo10, signo11, signo12];





//**COMPATIBILIDAD PAREJAS*/


let botonPareja = document.getElementById("btnPareja");
let divPareja = document.getElementById("parejaInfo");


class parejasYsignos{
    constructor(pSigno, pCompatibilidad, pDescripcion, pImg){
    this.signo = pSigno; 
    this.compatibilidad = pCompatibilidad;
    this.descripcion = pDescripcion;
    this.img = pImg;
    }
}



function calcularPareja(){
    let pareja1 = document.getElementById("pareja1").value;
    let pareja2 = document.getElementById("pareja2").value;

    switch (pareja1) {
        case "p1Aries": 
            for (let i = 0; i < parejasAries.length; i++) {
                if (pareja2 == parejasTauro[i].signo) {
                document.getElementById("parejaInfo").innerHTML = "";        
                parejaInfo.innerHTML+=`<img src="${parejasAries[i].img}" width="100px" class="rounded-circle sombra"><br>
                <h4 class="text-center"><strong>Resultado de compatibilidad:</strong></h4>
                <p class="text-center"><strong>ARIES y ${parejasAries[i].signo}</strong></p>
                <p class="text-center"><strong> ${parejasAries[i].compatibilidad}</strong></p>
                <p class="text-center">${parejasAries[i].descripcion}</p>`;
                divPareja.appendChild(parejaInfo);
                break;
                }
            }
            break;
        case "p1Tauro": 
            for (let i = 0; i < parejasTauro.length; i++) {
                if (pareja2 == parejasTauro[i].signo) {
                document.getElementById("parejaInfo").innerHTML = "";        
                parejaInfo.innerHTML+=`<img src="${parejasTauro[i].img}" width="100px" class="rounded-circle sombra"><br>
                <h4 class="text-center"><strong>Resultado de compatibilidad:</strong></h4>
                <p class="text-center"><strong>TAURO y ${parejasTauro[i].signo}</strong></p>
                <p class="text-center"><strong> ${parejasTauro[i].compatibilidad}</strong></p>
                <p class="text-center">${parejasTauro[i].descripcion}</p>`;
                divPareja.appendChild(parejaInfo);
                break;
                }
            }
            break;
        case "p1Geminis": 
            for (let i = 0; i < parejasGeminis.length; i++) {
                if (pareja2 == parejasGeminis[i].signo) {
                document.getElementById("parejaInfo").innerHTML = "";        
                parejaInfo.innerHTML+=`<img src="${parejasGeminis[i].img}" width="100px" class="rounded-circle sombra"><br>
                <h4 class="text-center"><strong>Resultado de compatibilidad:</strong></h4>
                <p class="text-center"><strong>GEMINIS y ${parejasGeminis[i].signo}</strong></p>
                <p class="text-center"><strong> ${parejasGeminis[i].compatibilidad}</strong></p>
                <p class="text-center"> ${parejasGeminis[i].descripcion}</p>`;
                divPareja.appendChild(parejaInfo);
                break;
                }
            }
            break;
        case "p1Cancer": 
            for (let i = 0; i < parejasCancer.length; i++) {
                if (pareja2 == parejasCancer[i].signo) {
                document.getElementById("parejaInfo").innerHTML = "";        
                parejaInfo.innerHTML+=`<img src="${parejasCancer[i].img}" width="100px" class="rounded-circle sombra"><br>
                <h4 class="text-center"><strong>Resultado de compatibilidad:</strong></h4>
                <p class="text-center"><strong>CANCER y ${parejasCancer[i].signo}</strong></p>
                <p class="text-center"><strong> ${parejasCancer[i].compatibilidad}</strong></p>
                <p class="text-center"> ${parejasCancer[i].descripcion}</p>`;
                divPareja.appendChild(parejaInfo);
                break;
                }
            }
            break;
        case "p1Leo": 
            for (let i = 0; i < parejasLeo.length; i++) {
                if (pareja2 == parejasLeo[i].signo) {
                document.getElementById("parejaInfo").innerHTML = "";        
                parejaInfo.innerHTML+=`<img src="${parejasLeo[i].img}" width="100px" class="rounded-circle sombra"><br>
                <h4 class="text-center"><strong>Resultado de compatibilidad:</strong></h4>
                <p class="text-center"><strong>LEO y ${parejasLeo[i].signo}</strong></p>
                <p class="text-center"><strong> ${parejasLeo[i].compatibilidad}</strong></p>
                <p class="text-center"> ${parejasLeo[i].descripcion}</p>`;
                divPareja.appendChild(parejaInfo);
                break;
                }
            }
            break;
        case "p1Virgo": 
            for (let i = 0; i < parejasVirgo.length; i++) {
                if (pareja2 == parejasVirgo[i].signo) {
                document.getElementById("parejaInfo").innerHTML = "";        
                parejaInfo.innerHTML+=`<img src="${parejasVirgo[i].img}" width="100px" class="rounded-circle sombra"><br>
                <h4 class="text-center"><strong>Resultado de compatibilidad:</strong></h4>
                <p class="text-center"><strong>VIRGO y ${parejasVirgo[i].signo}</strong></p>
                <p class="text-center"><strong> ${parejasVirgo[i].compatibilidad}</strong></p>
                <p class="text-center"> ${parejasVirgo[i].descripcion}</p>`;
                divPareja.appendChild(parejaInfo);
                break;
                }
            }
            break;
        case "p1Libra": 
            for (let i = 0; i < parejasLibra.length; i++) {
                if (pareja2 == parejasLibra[i].signo) {
                document.getElementById("parejaInfo").innerHTML = "";        
                parejaInfo.innerHTML+=`<img src="${parejasLibra[i].img}" width="100px" class="rounded-circle sombra"><br>
                <h4 class="text-center"><strong>Resultado de compatibilidad:</strong></h4>
                <p class="text-center"><strong>LIBRA y ${parejasLibra[i].signo}</strong></p>
                <p class="text-center"><strong> ${parejasLibra[i].compatibilidad}</strong></p>
                <p class="text-center">${parejasLibra[i].descripcion}</p>`;
                divPareja.appendChild(parejaInfo);
                break;
                }
            }
            break;
        case "p1Escorpio": 
            for (let i = 0; i < parejasEscorpio.length; i++) {
                if (pareja2 == parejasEscorpio[i].signo) {
                document.getElementById("parejaInfo").innerHTML = "";        
                parejaInfo.innerHTML+=`<img src="${parejasEscorpio[i].img}" width="100px" class="rounded-circle sombra"><br>
                <h4 class="text-center"><strong>Resultado de compatibilidad:</strong></h4>
                <p class="text-center"><strong>ESCORPIO y ${parejasEscorpio[i].signo}</strong></p>
                <p class="text-center"><strong> ${parejasEscorpio[i].compatibilidad}</strong></p>
                <p class="text-center">${parejasEscorpio[i].descripcion}</p>`;
                divPareja.appendChild(parejaInfo);
                break;
                }
            }
            break;
        case "p1Sagitario": 
            for (let i = 0; i < parejasSagitario.length; i++) {
                if (pareja2 == parejasSagitario[i].signo) {
                document.getElementById("parejaInfo").innerHTML = "";        
                parejaInfo.innerHTML+=`<img src="${parejasSagitario[i].img}" width="100px" class="rounded-circle sombra"><br>
                <h4 class="text-center"><strong>Resultado de compatibilidad:</strong></h4>
                <p class="text-center"><strong>SAGITARIO y ${parejasSagitario[i].signo}</strong></p>
                <p class="text-center"><strong> ${parejasSagitario[i].compatibilidad}</strong></p>
                <p class="text-center"> ${parejasSagitario[i].descripcion}</p>`;
                divPareja.appendChild(parejaInfo);
                break;
                }
            }
            break;
        case "p1Captricornio": 
            for (let i = 0; i < parejasCapricornio.length; i++) {
                if (pareja2 == parejasCapricornio[i].signo) {
                document.getElementById("parejaInfo").innerHTML = "";        
                parejaInfo.innerHTML+=`<img src="${parejasCapricornio[i].img}" width="100px" class="rounded-circle sombra"><br>
                <h4 class="text-center"><strong>Resultado de compatibilidad:</strong></h4>
                <p class="text-center"><strong>CAPRICORNIO y ${parejasCapricornio[i].signo}</strong></p>
                <p class="text-center"><strong> ${parejasCapricornio[i].compatibilidad}</strong></p>
                <p class="text-center"> ${parejasCapricornio[i].descripcion}</p>`;
                divPareja.appendChild(parejaInfo);
                break;
                }
            }
            break;
        case "p1Acuario": 
            for (let i = 0; i < parejasAcuario.length; i++) {
                if (pareja2 == parejasAcuario[i].signo) {
                document.getElementById("parejaInfo").innerHTML = "";        
                parejaInfo.innerHTML+=`<img src="${parejasAcuario[i].img}" width="100px" class="rounded-circle sombra"><br>
                <h4 class="text-center"><strong>Resultado de compatibilidad:</strong></h4>
                <p class="text-center"><strong>ACUARIO y ${parejasAcuario[i].signo}</strong></p>
                <p class="text-center"><strong> ${parejasAcuario[i].compatibilidad}</strong></p>
                <p class="text-center"> ${parejasAcuario[i].descripcion}</p>`;
                divPareja.appendChild(parejaInfo);
                break;
                }
            }
            break;
        case "p1Piscis": 
            for (let i = 0; i < parejasPiscis.length; i++) {
                if (pareja2 == parejasPiscis[i].signo) {
                document.getElementById("parejaInfo").innerHTML = "";        
                parejaInfo.innerHTML+=`<img src="${parejasPiscis[i].img}" width="100px" class="rounded-circle sombra"><br>
                <h4 class="text-center"><strong>Resultado de compatibilidad:</strong></h4>
                <p class="text-center"><strong>PISCIS y ${parejasPiscis[i].signo}</strong></p>
                <p class="text-center"><strong> ${parejasPiscis[i].compatibilidad}</strong></p>
                <p class="text-center">${parejasPiscis[i].descripcion}</p>`;
                divPareja.appendChild(parejaInfo);
                break;
                }
            }
            break;
    } 
}




let compatibilidadSignos = ["Excelente Pareja", "Pareja Aceptable","Pareja Complicada"]
let compatibilidadImg = ["img/iconos/perfecto.jpg", "img/iconos/bien.jpg","img/iconos/neutro.jpg"]
let parejasD = ["Los Aires suelen estar convencidos, que tienen razón, por lo que las discusiones entre ambos pueden ser largas y complicadas. En una pareja en la que ambos están bajo la influencia energética de Aries, deberán tener siempre los dos su propia independencia, uno debe tener su propio territorio a fin de no confrontarse, porque sus naturalezas son violentas e impulsivas.Sin embargo, a fin de cuentas se entenderán bastante bien.",
                "La estabilidad que caracteriza a los Tauro, será capaz de calmar la naturaleza irreprimible de Aries. A su vez, el corazón de fuego de Aries, obtendrá el equilibrio que le aporta Tauro. La tenacidad de Tauro y de Aries puede garantizar una relación fuerte y duradera, si ambos ponen de su parte.",
                "Tanto Aries y Géminis son dos signos llenos de alegría, confianza, entusiasmo y los atrae la diversión. Su mundo se compone de una parte constante, siempre estimulado por la imaginación y acompañado de una complicidad mutua.",
                "Aries es muy romántico, y dará la seguridad que cáncer anhela. Pero una de las grandes dificultades de la compatibilidad de cáncer y aries es que ambos son egocéntricos, y tienen personalidades fuertes. En una relación seria de pareja, Cáncer deberá intentar seguirle el ritmo a Aries; mientras que Aries tendrá que no aburrirse al lado de la tranquila vida de Cáncer.",
                "Ambos son signos de fuego, lo cual puede dar lugar a algunas confrontaciones y a un choque de egos. Sin embargo, la compatibilidad es alta y Aries y Leo compartirán una gran vida social y una relación de compromiso sentimental a largo plazo, si consiguen compartir el protagonismo.",
                "Aunque son opuestos, pero a menudo los opuestos son complementarios: Aries admira la dulzura, la suavidad y la inteligencia de Virgo, que a su vez pone orden en el caos de Aries. A su vez, Virgo será más flexible y menos extremista por la influencia de Aries.",
                "Si una combinación Libra-Aries consigue superar los difíciles inicios de su relación, luego, su compatibilidad puede mejorar. Si Aries se vuelve menos impaciente, descubrirá elementos en la personalidad de Libra, que le fascinarán y atraerán y Libra llegará a ver las respuestas impulsivas de su pareja Aries como algo sin importancia, en lugar de sentirse amenazado por ellas.",
                "A medida que la relación de amor puede establecerse entre ellos, ésta puede ser muy intensa y apasionada, pero también con ciertos arrebatos y altibajos. Sin embargo, si ambos tienen cuidado de hacer que la relación funcione, pueden lograr la felicidad esperada.",
                "Esta es una combinación de gran alegría y diversión y tanto Aries como Sagitario entienden que cada uno de ellos refleja algunas de las cualidades del otro. Esto garantizará un buen entendimiento básico y facilitará la comunicación.",
                "Los principales conflictos a menudo se producen debido a que los dos signos son individualistas e independientes, y con frecuencia actúan de manera centrada en sí mismo. En una relación de pareja, el día a día puede llegar a ser un poco difícil. De todos modos, la gran paciencia de Capricornio conseguirá que dure la relación, convirtiendo a Aries en alguien más sabio que la persona que conoció inicialmente.",
                "Aries y Acuario tienen mucho en común y un grado de compatibilidad muy alto. Ambos signos son independientes, humanitarios, optimistas y entusiastas. Les gustan las emociones fuertes, la valentía y carácter progresivo de los Acuario tienden a atraer mucho a los Aries.",
                "En una relación de Aries y Piscis el trabajo más importante que tienen es el de aceptar a su pareja tal como es y no tratar de cambiarlo. Si son capaces de superar este reto, Piscis será capaz de enriquecer la vida de su pareja, tanto en el ámbito espiritual como en las relaciones con otros seres humanos.",
                "La compatibilidad entre Tauro y Tauro es muy alta. Tauro es el signo de la tierra y esto constituye una base muy sólida para la relación. Hay algo simple y franco en los Tauro. Son prácticos y no se complican demasiado, por lo que son muy compatibles en una relación.",
                "Los Tauro nunca tienen prisa por llegar a ninguna parte, Géminis en cambio, puede llegar a ser inquieto e impaciente. En el lado positivo, Tauro aprecia la naturaleza ingeniosa y las aptitudes mentales de Géminis. Y géminis, admirará la fuerza y determinación de Tauro. Ambos tendrán siempre mucho de qué hablar",
                "Tauro sirve como un ancla para el variable temperamento emocional de Cáncer, siendo capaz de calmar las aguas. A su vez, Cáncer aporta un sentido práctico y sofisticado a la pareja, alivia la tensión y la volatilidad de Tauro.",
                "La terquedad de los Tauro también forma parte de las características de Leo. Ambos poseen una gran determinación y se aferran a una decisión una vez que la han tomado. Esta combinación zodiacal mostrará, muy probablemente, signos de permanencia, firmeza y devoción, a pesar de producirse fuertes peleas en ocasiones.",
                "Tauro y Virgo pueden disfrutar de una vida con mucha armonía. A ninguno de los dos les gustan las extravagancias ni las inconsistencias. En su relación no faltará dedicación y lealtad.",
                "Podrían surgir algunas dificultades debido a que la naturaleza sociable de Libra es totalmente opuesta a la de Tauro, a quien le gusta pasar tiempo en casa. Además, la testarudez e inflexibilidad de Tauro está destinada a chocar con la indecisión de Libra. Lo bueno es que a Libra y a Tauro les gustan los retos, y hacer perdurar esta relación supone, sin duda, un reto muy interesante.",
                "La compatibilidad entre Escorpio y Tauro es más alta de lo que podría parecer. Tauro y Escorpio son signos zodiacales opuestos y por eso, a veces, se atraen mutuamente sin remedio.  Si logran entenderse, ésta puede llegar a ser, con total seguridad, una de las mejores combinaciones del zodíaco.",
                "La compatibilidad entre Sagitario y Tauro es bastante baja porque son signos muy diferentes. El estilo de vida de Sagitario no depende de la costumbre y la estructura como el de Tauro. Sagitario tiende a basar su vida en una filosofía de libertad, independencia y espontaneidad. Es poco probable que pueda proporcionar a Tauro la seguridad y comodidad que éste necesita.",
                "Tanto Tauro como Capricornio ven la vida con un enfoque práctico. Ambos son realistas y viven en el mundo real. Y en lo, que se refiere a los aspectos espirituales y filosóficos de la vida, también muestran una gran compatibilidad. La combinación amorosa entre estos dos signos del zodíaco estará basada en la confianza mútua, además de formalidad y coherencia.",
                "La compatibilidad entre Acuario y Tauro no es muy alta, pero sí tiene muchas posibilidades siempre y cuando ambos estén dispuestos a esforzarse. No falta determinación en ninguno de estos signos y una vez que se concentran en algo, lo que sea deja de ser un sueño.",
                "La compatibilidad entre Piscis y Tauro es muy buena,  sobre todo desde el punto de vista de compañerismo y actividad social. Tanto Tauro como Piscis tienen una actitud comprensiva, personalidad despreocupada y disposición amigable. A ambos les encanta mantener la armonía en sus relaciones.",
                "La compatibilidad de Géminis con Géminis es alta y lo más probable, que una pareja de dos Géminis tengan una relación llena de diversión, aventura y variedad aunque tengan que aprender virtudes como la paciencia y el compromiso para que funcione a largo plazo.",
                "Cáncer, es sensible, emocional y hogareño. Géminis, en cambio, es más intelectual, actúa más con la cabeza que con el corazón, y le encantan las reuniones llenas de amigos. No obstante, los signos opuestos se atraen, aunque solo funcionará si ambos signos respetan las diferencias en la forma de ser de cada uno.",
                "La compatibilidad entre Leo y Géminis es bastante alta y en esta relación ambos descubrirán tener mucho en común. Tanto a Géminis como a Leo les encanta divertirse. Los dos tienen una naturaleza aventurera y disfrutan de la vida. Se encontrarán mutuamente fascinantes y disfrutarán en compañía del otro.",
                "Las personas del signo Geminis suelen ser inteligentes, racionales y prácticas. Igual que Virgo, tienden a ver las cosas tales como son. Estos dos signos tendrán una capacidad de comunicación alta, sobre todo a nivel intelectual.",
                "Se trata de una combinación tan afortunada, que se podría decir que existe un toque de magia entre ambos signos. En ocasiones Libra y Géminis se entienden tan bien, que ni siquiera necesitan palabras. A ambos signos les gusta la gente y las grandes reuniones sociales. Les gusta conversar con mucha gente y formar parte de la multitud.",
                "La compatibilidad entre Escorpio y Géminis es bastante baja y ambas partes de la relación deberán trabajar duramente para conseguir que funcione. Escorpio es altamente emocional, siempre forja relaciones profundas y significativas. Géminis, en cambio, difícilmente se ata a otra persona, sus relaciones amorosas tienden a ser superficiales hasta que encuentre a su verdadera media naranja.",
                "Cuando ambos signos se juntan, sus vidas se convierten en un torbellino, con montones de giros repentinos e inesperados. Su relación puede ser placentera ya que a ambos les gustan el cambio, los movimientos frecuentes, los reajustes, las sorpresas, las aventuras y los nuevos retos.",
                "A Capricornio le gusta avanzar en la vida de forma sistemática, siguiendo planes formulados para evitar sorpresas o imprevistos en su camino. Géminis es todo lo contrario. Es uno de los signos más impulsivos del Zodiaco, y es capaz de cambiar de planes todos los días. Dada la forma tan distinta, que tienen de enfocar la vida,  ambos signos tendrán, que hacer un gran esfuerzo para que la relación funcione.",
                "Tienen planteamientos muy parecidos e incluso a nivel intelectual son compatibles. Es una de las combinaciones más compatibles del zodiaco, porque la conexión kármica es muy fuerte. Una pareja de Géminis y Acuario disfrutan en la compañía del otro. Les encanta hablar durante horas, y comparten los mismos intereses, las mismas aficiones, las mismas opiniones e incluso los mismos amigos.",
                "Piscis y Géminis tienen algunas cosas en común. Ambos están abiertos a nuevas ideas, son flexibles, transigentes y dispuestos a cambiar de postura si se equivocan.  En cuanto a las diferencias, también hay algunas básicas y potencialmente importantes. Géminis es mucho más racional, que Piscis que tiende a vivir en un mundo de sueños. Si Géminis logra ser sensible hacia el lado más receptivo de Piscis entonces esta combinación podrá funcionar.",
                "La combinación entre dos Cáncer puede ser realmente buena, porque ambos se levantarán la moral, comprenderán los cambios de humor y cambios en el estado de ánimo mutuamente y con facilidad. Esta receta es ideal para la vida familiar, el cuidado de los niños y la búsqueda de un hogar más tranquilo.",
                "El entusiasta y seguro Leo podría ser la solución perfecta para la inseguridad y la falta de confianza en sí mismos de los Cáncer, dada la capacidad de Leo para levantar el ánimo y hacer, que los otros se sientan mejor.A su vez, el acercamiento cariñoso y sensible de los Cáncer hará que Leo se sienta querido.",
                "De esta combinación, cabe esperar una gran amistad y comprensión, aunque en ocasiones Virgo tendrá problemas para entender los frecuentes cambios de humor de Cáncer. Sin embargo, debido a que Virgo es receptivo y capaz de analizar las cosas, tenderá con el tiempo a hacerse más responsable de las necesidades de Cáncer quien, a su vez, aprenderá a ser más razonable en sus exigencias.",
                "Tanto  Cáncer como Libra buscan la paz, el sosiego y la armonía, por lo que al principio, la relación puede parecer muy sencilla. La diferencia más importante se hará evidente establecida la relación: A Cáncer puede no gustarle el deseo de Libra de llevar una vida social activa y variada, mientras que Libra puede llegar a encontrar a Cáncer restrictivo y aburrido. Sin embargo ambos son signos muy afectuoso, entre ellos podrían lograr una conexión duradera.",
                "Las personas, que nacen bajo el mismo elemento suelen sentirse cómodas y atraerse entre sí. Este es el caso de Cáncer y Escorpio. Tiene un grado de compatibilidad alto. Ambos son sensibles, emocionales y cariñosos. Es importante que los posesivos cáncer y escorpio sepan dejar algo de espacio a su pareja. Los escorpio en ocasiones son tan posesivos y dominadores que pueden eclipsar a los cáncer, más complacientes y sumisos.",
                "Cáncer es propenso a enamorarse perdidamente del fuerte carácter de Sagitario, pero una relación de amistad o profesional tiene más posibilidades de funcionar, que como pareja. Sagitario es honesto, muy directo y, en ocasiones, insensible; y aunque los Cáncer aprecien la honestidad y la franqueza, son muy sensibles a las críticas.",
                "Cáncer es un signo de agua y su naturaleza es esencialmente emotiva. Son románticos, cariñosos, tiernos y protectores. Capricornio se siente de maravilla ante todas las atenciones que brinda cancer. Por otra parte, los de Capricornianos son muy realistas y le ofrecen a los Cáncer la seguridad que necesitan para salir de su caparazón.",
                "Una de las relaciones más complejas y profundas que puede existir dentro del zodíaco la integran los signos Cáncer y Acuario; pero si superan las dificultares, pueden tener una relación muy estable. Al contrario de lo que uno podría creer, ambos signos se complementan casi a la perfección. Puede haber momentos muy desesperantes entre ellos pero como amigos, seguramente, pueden ser de los mejores.",
                "Piscis y Cáncer tienen mucho en común, especialmente en cuanto a compatibilidad emocional. Ambos signos se entienden instintivamente entre sí y sienten las necesidades del otro. Ambos son cariñosos y dan apoyo a su pareja. Existe un fuerte lazo entre estos signos, Piscis anima a Cáncer a poner en marcha sus ideas más filosóficas y espirituales. Cáncer, a su vez, ayudará a Piscis a centrarse en cosas más concretas.",
                "Dos Reyes de la selva juntos forman una pareja divertida, llena de glamour y muy exuberante. Tienen un carácter muy pero que muy enérgico y, para bien, o para mal la convivencia no será relajada ni discreta. Eso sí, la pareja promete ser chispeante y maravillosa. Entre ambos deben tener presente que se juntará demasiada fuerza de carácter en poco espacio, y que el escenario tiene espacio para dos protagonistas.",
                "Leo puede cansarse de la ordenada pulcritud de Virgo y Virgo puede sentirse relegado ante el éxito social de Leo.  Los rasgos más negativos de su unión suelen ser la tendencia a la atención en el caso de Leo, y la propensión a la crítica, en el caso de Virgo. De todas maneras, son dos personas muy inteligentes y curiosas, por lo que pueden llevarse muy bien.",
                " Son dos signos que derrochan energía y unas tremendas ganas de vivir y de disfrutar de la vida. El optimismo es uno de su leit motiv, así como las ganas de salir y socializar con todos. Además, Libra es capaz de caer rendido ante Leo y éste feliz por todo el montón de halagos que puede prodigarle, por minuto, el encantador Libra. Una relación afectuosa con su debida cuota de independencia.",
                "Son dos signos de naturaleza salvaje, fuerte. Son dramáticos, gritones, peleones, calculadores y líderes. Esta unión no es muy normal aunque cuando se da, o bien están peleados todo el día o bien han llegado a construir algo fuerte entre los dos y que es inquebrantable.",
                "Dos signos de Fuego juntos encenderán pasiones abrasadoras, dado que ambos entienden instintivamente las necesidades más profundas del otro. Su compatibilidad es muy alta. A Leo le encanta brillar y ser admirado y a Sagitario le encanta dar. Lo mejor entre estos dos signos es esas ganas de hacer siempre más, de conocer más, y la independencia.",
                "Relación improbable que funcionar muy bien.  Si ambos dejan a un lado su orgullo y trabajan juntos por un fin común, podría ser una relación muy gratificante.  Leo suele mira el lado positivo de la vida y puede animar a Capricornio cuándo este se ve afectado por la tristeza. A cambio, la naturaleza realista y práctica de Capricornio es el antídoto perfecto para los momentos en los que la cabeza de Leo se pierde en las nubes.",
                "Los dos signos son muy distintos, pero a pesar de sus diferencias logran atraerse e impresionarse. A los Acuario les gusta el calor, la generosidad y la energía de Leo mientras, que a los Leo les impresiona la capacidad intelectual y la seguridad de Acuario.",
                "Esta pareja es mucho más común de lo que piensa la gente. Hay muchísimas uniones entre estos dos signos del Zodiaco y es debido a que Piscis se siente protegido ante la fuerza interior de Leo y éste último se siente atraído por la sensibilidad y la mente de Piscis. Piscis es capaz de admirar al león como no lo ha hecho nadie y eso, hace que éste se eleve al cielo.",
                "En términos generales, las parejas Virgo son tranquilas y calmadas cuando todo está en orden entre ellos. Estas relaciones son muy estables y equilibradas. Los dos son perfeccionistas y de alguna manera, sienten que no hay problema que no puedan solucionar.",
                "Virgo tiene una personalidad que tiende a ser un poco introvertida, al menos al principio, y prefiere las reuniones con pequeños grupos. Por el contrario Libra tiene una personalidad extrovertida. Y además, es más espontáneo, más natural, frente a Virgo que es un apasionado del orden y le encantan tener todo bajo control. Entre Virgo y Libra debe haber concesiones para que Libra no se sienta vigilado y Virgo no se frustre al ver que la situación se escapa de su dominio.",
                "Las parejas Virgo y Escorpio funcionan bastante bien, son signos de tierra y agua y esto hace que sean muy compatibles. Escorpio es un signo magnético, que atrae a los demás aunque no quiera. Y Virgo, se va a ver afectado por este influjo. Escorpio también puede sentirse fascinado ante Virgo, a quien por sus características, le verá como la pareja soñada.",
                "Ambos tienen un gran sentido del humor cuando están juntos que los hará pasar grandes momentos juntos. Además son signos que tienen gran capacidad para adaptarse a los demás, por lo que si consiguen limar las diferencias pueden llegar a ser una pareja estable.",
                "Los dos signos tienen una visión práctica de la vida, y nunca mejor dicho, tienen los pies en la tierra. La formalidad y el respeto son la base de esta relación. Virgo aportará a Capricornio el toque fresco y vivaz que necesita la pareja y Capricornio le dará la confianza a Virgo para realizar lo que desea.",
                "Se trata de signos opuestos y ambos se tomarán como un desafío conseguir imponerse sobre el otro. Virgo pretenderá poner orden en el caos y Acuario pretenderá poner el caos en el orden establecido. Pese a estas (grandes) diferencias, Virgo y Acuario tienen algunas cosas en común: un gran lado humanitario y un amor apasionado.",
                "Virgo y Piscis son signos que se complementan bien. En esta pareja se cumple el dicho «los polos opuestos se atraen». Son signos totalmente opuestos en la rueda zodiacal. Para Virgo, Piscis aporta el toque de fantasía al mundo realista de Virgo. Y Virgo supone el toque de realidad para el mundo de ensueño de Piscis. Cada signo posee determinadas cualidades que el otro no tiene y que en el fondo desearía tener. Cualidades buenas.",
                "Cuando dos Libra se juntan, todo puede pasar. Es una pareja con una gran compatibilidad. La atracción entre dos Libra es inmediata, irrefrenable. Dos Libra se entienden al instante, como si a cada uno de ellos antes les hubiese faltado una parte de su vida. Además de una relación muy pasional, se convertirán en grandes amigos, y compartirán gustos e intereses.",
                "A pesar de que el aire y el agua no siempre funcionan del todo bien, estos dos signos se llegan a entender (de vez en cuando). Escorpio ayuda a tomar decisiones a Libra, que es tarea difícil para él, que se lo piensa todo mucho. Y Libra ayuda a Escorpio a profundizar en el amor y a dar sentido a sus sensaciones y emociones.",
                "Cuando Libra y Sagitario se unen, casi en el ámbito que sea, pueden llegar a convertirse en una pareja firme. Uno de sus principales puntos fuertes es que es una unión basada principalmente en la amistad que al final, es lo que sustenta a una pareja cuando la emoción del principio inevitablemente se va.",
                "La unión entre Libra y Capricornio, aunque aparentemente pueda ser bastante inestable y tener grandes abismos que los separan, tiene algún que otro punto válido para tirar para adelante. Tanto Libra como Capricornio comparten la fascinación por las artes, por el “orden”, por lo justo.",
                "Libra y Acuario son dos signos de aire y a verdad es que la conexión es casi instantánea. Sea cual sea su relación, de amistad, laboral o de pareja, estos dos compenetran bastante bien. Hay química porque aunque son diferentes entre sí, tienen una manera bastante parecida de afrontar las cosas, de ver el mundo, de crear el camino.",
                "A pesar de ser muchas veces la noche y el día o de que no entiendan en ocasiones nada del comportamiento del otro y de su manera de actuar, la unión entre Libra y Piscis puede tener una gran compatibilidad. Libra aportará la estabilidad de su signo a esta pareja mientras Piscis contribuirá con su misticismo y espiritualidad.",
                "Entre dos Escorpiones hay una atracción enorme, pero también es cierto que pueden pasar del amor al odio en segundos. Escorpio es muy pasional. Si ama lo hace sin límite, pero si discute también lo hace sin freno. Eso mismo hará que les cueste entenderse.",
                "Sagitario es un signo libre, que necesita su espacio, su independencia… Pero cuando conoce al posesivo Escorpio, todo eso parece disiparse. Lo mejor entre estos dos signos son las buenas conversaciones, lo peor, lo testarudos y lo orgullosos que pueden llegar a ser.",
                "Escorpio y Capricornio se atraen de manera natural pero quizás funcionen mejor en otros aspectos de su vida como por ejemplo, la amistad o el trabajo. No es que sea una pareja difícil, aunque si pueden tener más de un roce, sobre todo por demostrar quién de los dos tiene más poder que el otro.",
                "Escorpio y Acuario se atraen. Tienen un magnetismo especial. Es como una especie de flechazo a primera vista. Pero la realidad es que la gran mayoría de veces, no funciona. Al Escorpión le hará gracia la excentricidad de Acuario, esa visión especial que tiene para ver la vida. Y a Acuario le encantará la fuerza interior de Escorpio. Por norma general se llevan bien pero quizás en otros ámbitos de su vida y no en el sentimental.",
                "Estos dos signos se entienden. Y aunque el mundo entero no sea capaz de saber qué se les está pasando por la cabeza o qué es lo que están tramando cuando están juntos, el pez y el escorpión con sólo mirarse, son capaces de leerse. Y además, lo hacen divinamente. Piscis y Escorpio son atraídos magnéticamente el uno hacia el otro mediante una comprensión silenciosa y poderosa.",
                "Todo hay que decirlo, entre dos Sagitario la combinación es casi perfecta. Los dos, además de pareja, serán grandes amigos y compañeros. La relación profunda está más que garantizada. Tienen intereses muy parecidos, pueden pasar horas charlando sobre sus gustos o aficiones. Además si uno decide emprender una aventura, el otro le seguirá probablemente hasta el fin del mundo.",
                "El carácter optimista y extrovertido de Sagitario se contrapone al carácter responsable, llegando a ser pesimista en ocasiones, de Capricornio. Sagitario podría acusar a Capricornio de ser un pesimista aguafiestas, mientras que Capricornio ve a sagitario como quien no se toma en serio la vida.",
                "La unión de Sagitario y Acuario funciona bastante bien a priori. Acuario y Sagitario son signos que tienen muchos puntos en común, son muy imaginativos, aman la libertad, por sus venas corre rebeldía y defienden a muerte lo justo. Además, de alguna manera, se necesitan el uno al otro pero sin llegar a ser pegajosos ni dependientes.",
                "Entre Piscis y Sagitario algo está claro, la tensión se palpa en el ambiente. Y claro que un poco de tensión no es mala. El problema es que una fuerte dosis puede provocar excesos menos beneficiosos, y esta pareja, lo sabe de sobra. Si los dos quieren vivir en paz deberán controlarse, ambos, y mucho más de lo normal.",
                "Cuando dos Capricornio se unen, la comunicación suele ser bastante fluida. Les preocupan las finanzas, los proyectos, y la estabilidad económica, emocional. Así que, al menos, parece que ambos reman en la misma dirección. En definitiva, dos Capri se llevan bastante bien y si entienden su unión como una relación de igual a igual (sin que uno quiera dominar a otro), será duradera seguro.",
                "La pareja de Acuario y Capricornio tiene una compatibilidad bastante alta pero no quizás en relaciones sentimentales si no más bien laborales o de amistad. Los dos signos son bastante diferentes y en el amor, eso se nota mucho.",
                "La pareja de Capricornio y Piscis puede llegar a ser muy buena y, sobre todo, duradera. Aunque al principio parezca complicada. Con un poco de paciencia (que ambos a veces la necesitan) descubrirán que son más cosas las que los unen que las que los separan.",
                "Dos Acuario compartirán una gran comunicación intelectual y mental. Ambos necesitan expresar y confiar sus secretos a alguien. Es muy difícil que abran sus sentimientos a cualquiera pero alguien de su mismo signo ayudará bastante. Los dos madurarán en este aspecto mucho.",
                "Ambos signos tienen un carácter agradable, intentan pensar que todo puede solucionarse hablando. Detestan la violencia o cualquier tipo de agresión. Sus diferencias radican en la esencia de cada uno, Acuario es un signo de aire, libre, que odia ser controlado. Mientras tanto, Piscis, signo de agua, puede considerar que tanta libertad por parte de Acuario es simplemente desamor.",
                "Dos pececillos juntos puede ser una combinación extraordinaria o por el contrario puede convertirse en un infierno. Todo depende si deciden dejarse llevar por la corriente o nadar en su contra. Pueden perderse juntos para no terminar haciendo nada bueno. Pero también pueden crear muchísimas cosas en muchos aspectos de su vida. Dos Piscis juntos deben de tener en cuenta que pueden convivir armónicamente o pueden ahogarse juntos."
];




const parejaAriesyAries = new parejasYsignos( signosZodicales [0], compatibilidadSignos [1], parejasD [0], compatibilidadImg [1]);
const parejaAriesyTauro = new parejasYsignos( signosZodicales [1] , compatibilidadSignos [1], parejasD[1], compatibilidadImg [1]);
const parejaAriesyGeminis = new parejasYsignos( signosZodicales [2], compatibilidadSignos [0], parejasD [2], compatibilidadImg [0]);
const parejaAriesyCancer = new parejasYsignos( signosZodicales [3], compatibilidadSignos [2], parejasD [3], compatibilidadImg [2]);
const parejaAriesyLeo = new parejasYsignos( signosZodicales [4], compatibilidadSignos [0], parejasD [4], compatibilidadImg [0]);
const parejaAriesyVirgo = new parejasYsignos( signosZodicales [5], compatibilidadSignos [1], parejasD [5], compatibilidadImg [1]);
const parejaAriesyLibra = new parejasYsignos( signosZodicales [6], compatibilidadSignos [1], parejasD[6], compatibilidadImg [1]);
const parejaAriesyEscorpio = new parejasYsignos( signosZodicales [7], compatibilidadSignos [1], parejasD [7], compatibilidadImg [1]);
const parejaAriesySagitario = new parejasYsignos( signosZodicales [8], compatibilidadSignos [0], parejasD [8], compatibilidadImg [0]);
const parejaAriesyCapricornio = new parejasYsignos( signosZodicales [9], compatibilidadSignos [2], parejasD [9], compatibilidadImg [2]);
const parejaAriesyAcuario= new parejasYsignos(signosZodicales[10], compatibilidadSignos [1], parejasD [10], compatibilidadImg [1]);
const parejaAriesyPiscis= new parejasYsignos( signosZodicales[11], compatibilidadSignos [2], parejasD [11], compatibilidadImg [2]);

const parejaTauroyAries = new parejasYsignos( signosZodicales [0], compatibilidadSignos [1], parejasD [1], compatibilidadImg [1]);
const parejaTauroyTauro= new parejasYsignos( signosZodicales [1], compatibilidadSignos [0], parejasD [12], compatibilidadImg [0]);
const parejaTauroyGeminis= new parejasYsignos( signosZodicales[2], compatibilidadSignos [2], parejasD [13], compatibilidadImg [2]);
const parejaTauroyCancer= new parejasYsignos( signosZodicales [3], compatibilidadSignos [1], parejasD [14], compatibilidadImg [1]);
const parejaTauroyLeo= new parejasYsignos( signosZodicales [4], compatibilidadSignos [1], parejasD [15], compatibilidadImg [1]);
const parejaTauroyVirgo= new parejasYsignos( signosZodicales [5], compatibilidadSignos [0], parejasD [16], compatibilidadImg [0]);
const parejaTauroyLibra= new parejasYsignos( signosZodicales [6], compatibilidadSignos [2], parejasD [17], compatibilidadImg [2]);
const parejaTauroyEscorpio= new parejasYsignos( signosZodicales [7], compatibilidadSignos [0], parejasD [18], compatibilidadImg [0]);
const parejaTauroySagitario= new parejasYsignos( signosZodicales [8], compatibilidadSignos [2], parejasD [19], compatibilidadImg [2]);
const parejaTauroyCapricornio= new parejasYsignos( signosZodicales [9], compatibilidadSignos [0], parejasD [20], compatibilidadImg [0]);
const parejaTauroyAcuario= new parejasYsignos( signosZodicales [10], compatibilidadSignos [1], parejasD [21], compatibilidadImg [1]);
const parejaTauroyPiscis= new parejasYsignos( signosZodicales [11], compatibilidadSignos [1], parejasD [22], compatibilidadImg [1]);

const parejaGeminisyAries = new parejasYsignos( signosZodicales [0], compatibilidadSignos [0], parejasD [12], compatibilidadImg [0]);
const parejaGeminisyTauro= new parejasYsignos( signosZodicales [1], compatibilidadSignos [2], parejasD [13], compatibilidadImg [2]);
const parejaGeminisyGeminis= new parejasYsignos( signosZodicales[2], compatibilidadSignos [0], parejasD [23], compatibilidadImg [0]);
const parejaGeminisyCancer= new parejasYsignos( signosZodicales [3], compatibilidadSignos [2], parejasD [24], compatibilidadImg [2]);
const parejaGeminisyLeo= new parejasYsignos( signosZodicales [4], compatibilidadSignos [1], parejasD [25], compatibilidadImg [1]);
const parejaGeminisyVirgo= new parejasYsignos( signosZodicales [5], compatibilidadSignos [0], parejasD [26], compatibilidadImg [0]);
const parejaGeminisyLibra= new parejasYsignos( signosZodicales [6], compatibilidadSignos [0], parejasD [27], compatibilidadImg [0]);
const parejaGeminisyEscorpio= new parejasYsignos( signosZodicales [7], compatibilidadSignos [2], parejasD [28], compatibilidadImg [2]);
const parejaGeminisySagitario= new parejasYsignos( signosZodicales [8], compatibilidadSignos [0], parejasD [29], compatibilidadImg [0]);
const parejaGeminisyCapricornio= new parejasYsignos( signosZodicales [9], compatibilidadSignos [2], parejasD [30], compatibilidadImg [2]);
const parejaGeminisyAcuario= new parejasYsignos( signosZodicales [10], compatibilidadSignos [0], parejasD [31], compatibilidadImg [0]);
const parejaGeminisyPiscis= new parejasYsignos( signosZodicales [11], compatibilidadSignos [1], parejasD [32], compatibilidadImg [1]);

const parejaCanceryAries = new parejasYsignos( signosZodicales [0], compatibilidadSignos [2], parejasD [3], compatibilidadImg [2]);
const parejaCanceryTauro= new parejasYsignos( signosZodicales [1], compatibilidadSignos [1], parejasD [14], compatibilidadImg [1]);
const parejaCanceryGeminis= new parejasYsignos( signosZodicales[2], compatibilidadSignos [2], parejasD [24], compatibilidadImg [2]);
const parejaCanceryCancer= new parejasYsignos( signosZodicales [3], compatibilidadSignos [0], parejasD [33], compatibilidadImg [0]);
const parejaCanceryLeo= new parejasYsignos( signosZodicales [4], compatibilidadSignos [1], parejasD [34], compatibilidadImg [1]);
const parejaCanceryVirgo= new parejasYsignos( signosZodicales [5], compatibilidadSignos [0], parejasD [35], compatibilidadImg [0]);
const parejaCanceryLibra= new parejasYsignos( signosZodicales [6], compatibilidadSignos [1], parejasD [36], compatibilidadImg [1]);
const parejaCanceryEscorpio= new parejasYsignos( signosZodicales [7], compatibilidadSignos [0], parejasD [37], compatibilidadImg [0]);
const parejaCancerySagitario= new parejasYsignos( signosZodicales [8], compatibilidadSignos [2], parejasD [38], compatibilidadImg [2]);
const parejaCanceryCapricornio= new parejasYsignos( signosZodicales [9], compatibilidadSignos [1], parejasD [39], compatibilidadImg [1]);
const parejaCanceryAcuario= new parejasYsignos( signosZodicales [10], compatibilidadSignos [1], parejasD [40], compatibilidadImg [1]);
const parejaCanceryPiscis= new parejasYsignos( signosZodicales [11], compatibilidadSignos [0], parejasD [41], compatibilidadImg [0]);

const parejaLeoyAries = new parejasYsignos( signosZodicales [0], compatibilidadSignos [0], parejasD [4], compatibilidadImg [0]);
const parejaLeoyTauro= new parejasYsignos( signosZodicales [1], compatibilidadSignos [1], parejasD [15], compatibilidadImg [1]);
const parejaLeoyGeminis= new parejasYsignos( signosZodicales[2], compatibilidadSignos [1], parejasD [25], compatibilidadImg [1]);
const parejaLeoyCancer= new parejasYsignos( signosZodicales [3], compatibilidadSignos [1], parejasD [34], compatibilidadImg [1]);
const parejaLeoyLeo= new parejasYsignos( signosZodicales [4], compatibilidadSignos [1], parejasD [42], compatibilidadImg [1]);
const parejaLeoyVirgo= new parejasYsignos( signosZodicales [5], compatibilidadSignos [2], parejasD [43], compatibilidadImg [2]);
const parejaLeoyLibra= new parejasYsignos( signosZodicales [6], compatibilidadSignos [1], parejasD [44], compatibilidadImg [1]);
const parejaLeoyEscorpio= new parejasYsignos( signosZodicales [7], compatibilidadSignos [1], parejasD [45], compatibilidadImg [1]);
const parejaLeoySagitario= new parejasYsignos( signosZodicales [8], compatibilidadSignos [0], parejasD [46], compatibilidadImg [0]);
const parejaLeoyCapricornio= new parejasYsignos( signosZodicales [9], compatibilidadSignos [1], parejasD [47], compatibilidadImg [1]);
const parejaLeoyAcuario= new parejasYsignos( signosZodicales [10], compatibilidadSignos [1], parejasD [48], compatibilidadImg [1]);
const parejaLeoyPiscis= new parejasYsignos( signosZodicales [11], compatibilidadSignos [1], parejasD [49], compatibilidadImg [1]);


const parejaVirgoyAries = new parejasYsignos( signosZodicales [0], compatibilidadSignos [1], parejasD [5], compatibilidadImg [1]);
const parejaVirgoyTauro= new parejasYsignos( signosZodicales [1], compatibilidadSignos [0], parejasD [16], compatibilidadImg [0]);
const parejaVirgoyGeminis= new parejasYsignos( signosZodicales[2], compatibilidadSignos [0], parejasD [26], compatibilidadImg [0]);
const parejaVirgoyCancer= new parejasYsignos( signosZodicales [3], compatibilidadSignos [0], parejasD [35], compatibilidadImg [0]);
const parejaVirgoyLeo= new parejasYsignos( signosZodicales [4], compatibilidadSignos [2], parejasD [43], compatibilidadImg [2]);
const parejaVirgoyVirgo= new parejasYsignos( signosZodicales [5], compatibilidadSignos [0], parejasD [50], compatibilidadImg [0]);
const parejaVirgoyLibra= new parejasYsignos( signosZodicales [6], compatibilidadSignos [2], parejasD [51], compatibilidadImg [2]);
const parejaVirgoyEscorpio= new parejasYsignos( signosZodicales [7], compatibilidadSignos [0], parejasD [52], compatibilidadImg [0]);
const parejaVirgoySagitario= new parejasYsignos( signosZodicales [8], compatibilidadSignos [1], parejasD [53], compatibilidadImg [1]);
const parejaVirgoyCapricornio= new parejasYsignos( signosZodicales [9], compatibilidadSignos [0], parejasD [54], compatibilidadImg [0]);
const parejaVirgoyAcuario= new parejasYsignos( signosZodicales [10], compatibilidadSignos [1], parejasD [55], compatibilidadImg [1]);
const parejaVirgoyPiscis= new parejasYsignos( signosZodicales [11], compatibilidadSignos [0], parejasD [56], compatibilidadImg [0]);

const parejaLibrayAries = new parejasYsignos( signosZodicales [0], compatibilidadSignos [1], parejasD [6], compatibilidadImg [1]);
const parejaLibrayTauro= new parejasYsignos( signosZodicales [1], compatibilidadSignos [2], parejasD [17], compatibilidadImg [2]);
const parejaLibrayGeminis= new parejasYsignos( signosZodicales[2], compatibilidadSignos [0], parejasD [27], compatibilidadImg [0]);
const parejaLibrayCancer= new parejasYsignos( signosZodicales [3], compatibilidadSignos [1], parejasD [36], compatibilidadImg [1]);
const parejaLibrayLeo= new parejasYsignos( signosZodicales [4], compatibilidadSignos [1], parejasD [44], compatibilidadImg [1]);
const parejaLibrayVirgo= new parejasYsignos( signosZodicales [5], compatibilidadSignos [2], parejasD [51], compatibilidadImg [2]);
const parejaLibrayLibra= new parejasYsignos( signosZodicales [6], compatibilidadSignos [0], parejasD [57], compatibilidadImg [0]);
const parejaLibrayEscorpio= new parejasYsignos( signosZodicales [7], compatibilidadSignos [1], parejasD [58], compatibilidadImg [1]);
const parejaLibraySagitario= new parejasYsignos( signosZodicales [8], compatibilidadSignos [0], parejasD [59], compatibilidadImg [0]);
const parejaLibrayCapricornio= new parejasYsignos( signosZodicales [9], compatibilidadSignos [1], parejasD [60], compatibilidadImg [1]);
const parejaLibrayAcuario= new parejasYsignos( signosZodicales [10], compatibilidadSignos [1], parejasD [61], compatibilidadImg [1]);
const parejaLibrayPiscis= new parejasYsignos( signosZodicales [11], compatibilidadSignos [1], parejasD [62], compatibilidadImg [1]);

const parejaEscorpioyAries = new parejasYsignos( signosZodicales [0], compatibilidadSignos [1], parejasD [7], compatibilidadImg [1]);
const parejaEscorpioyTauro= new parejasYsignos( signosZodicales [1], compatibilidadSignos [0], parejasD [18], compatibilidadImg [0]);
const parejaEscorpioyGeminis= new parejasYsignos( signosZodicales[2], compatibilidadSignos [2], parejasD [28], compatibilidadImg [2]);
const parejaEscorpioyCancer= new parejasYsignos( signosZodicales [3], compatibilidadSignos [0], parejasD [37], compatibilidadImg [0]);
const parejaEscorpioyLeo= new parejasYsignos( signosZodicales [4], compatibilidadSignos [1], parejasD [45], compatibilidadImg [1]);
const parejaEscorpioyVirgo= new parejasYsignos( signosZodicales [5], compatibilidadSignos [0], parejasD [52], compatibilidadImg [0]);
const parejaEscorpioyLibra= new parejasYsignos( signosZodicales [6], compatibilidadSignos [1], parejasD [58], compatibilidadImg [1]);
const parejaEscorpioyEscorpio= new parejasYsignos( signosZodicales [7], compatibilidadSignos [1], parejasD [63], compatibilidadImg [1]);
const parejaEscorpioySagitario= new parejasYsignos( signosZodicales [8], compatibilidadSignos [2], parejasD [64], compatibilidadImg [2]);
const parejaEscorpioyCapricornio= new parejasYsignos( signosZodicales [9], compatibilidadSignos [1], parejasD [65], compatibilidadImg [1]);
const parejaEscorpioyAcuario= new parejasYsignos( signosZodicales [10], compatibilidadSignos [1], parejasD [66], compatibilidadImg [1]);
const parejaEscorpioyPiscis= new parejasYsignos( signosZodicales [11], compatibilidadSignos [0], parejasD [67], compatibilidadImg [0]);

const parejaSagitarioyAries = new parejasYsignos( signosZodicales [0], compatibilidadSignos [0], parejasD [8], compatibilidadImg [0]);
const parejaSagitarioyTauro= new parejasYsignos( signosZodicales [1], compatibilidadSignos [2], parejasD [19], compatibilidadImg [2]);
const parejaSagitarioyGeminis= new parejasYsignos( signosZodicales[2], compatibilidadSignos [0], parejasD [29], compatibilidadImg [0]);
const parejaSagitarioyCancer= new parejasYsignos( signosZodicales [3], compatibilidadSignos [2], parejasD [38], compatibilidadImg [2]);
const parejaSagitarioyLeo= new parejasYsignos( signosZodicales [4], compatibilidadSignos [0], parejasD [46], compatibilidadImg [0]);
const parejaSagitarioyVirgo= new parejasYsignos( signosZodicales [5], compatibilidadSignos [1], parejasD [53], compatibilidadImg [1]);
const parejaSagitarioyLibra= new parejasYsignos( signosZodicales [6], compatibilidadSignos [0], parejasD [59], compatibilidadImg [0]);
const parejaSagitarioyEscorpio= new parejasYsignos( signosZodicales [7], compatibilidadSignos [2], parejasD [64], compatibilidadImg [2]);
const parejaSagitarioySagitario= new parejasYsignos( signosZodicales [8], compatibilidadSignos [0], parejasD [68], compatibilidadImg [0]);
const parejaSagitarioyCapricornio= new parejasYsignos( signosZodicales [9], compatibilidadSignos [2], parejasD [69], compatibilidadImg [2]);
const parejaSagitarioyAcuario= new parejasYsignos( signosZodicales [10], compatibilidadSignos [0], parejasD [70], compatibilidadImg [0]);
const parejaSagitarioyPiscis= new parejasYsignos( signosZodicales [11], compatibilidadSignos [2], parejasD [71], compatibilidadImg [2]);

const parejaCapricornioyAries = new parejasYsignos( signosZodicales [0], compatibilidadSignos [2], parejasD [9], compatibilidadImg [2]);
const parejaCapricornioyTauro= new parejasYsignos( signosZodicales [1], compatibilidadSignos [0], parejasD [20], compatibilidadImg [0]);
const parejaCapricornioyGeminis= new parejasYsignos( signosZodicales[2], compatibilidadSignos [2], parejasD [30], compatibilidadImg [2]);
const parejaCapricornioyCancer= new parejasYsignos( signosZodicales [3], compatibilidadSignos [1], parejasD [39], compatibilidadImg [1]);
const parejaCapricornioyLeo= new parejasYsignos( signosZodicales [4], compatibilidadSignos [1], parejasD [47], compatibilidadImg [1]);
const parejaCapricornioyVirgo= new parejasYsignos( signosZodicales [5], compatibilidadSignos [0], parejasD [54], compatibilidadImg [0]);
const parejaCapricornioyLibra= new parejasYsignos( signosZodicales [6], compatibilidadSignos [1], parejasD [60], compatibilidadImg [1]);
const parejaCapricornioyEscorpio= new parejasYsignos( signosZodicales [7], compatibilidadSignos [1], parejasD [65], compatibilidadImg [1]);
const parejaCapricornioySagitario= new parejasYsignos( signosZodicales [8], compatibilidadSignos [2], parejasD [69], compatibilidadImg [2]);
const parejaCapricornioyCapricornio= new parejasYsignos( signosZodicales [9], compatibilidadSignos [0], parejasD [72], compatibilidadImg [0]);
const parejaCapricornioyAcuario= new parejasYsignos( signosZodicales [10], compatibilidadSignos [1], parejasD [73], compatibilidadImg [1]);
const parejaCapricornioyPiscis= new parejasYsignos( signosZodicales [11], compatibilidadSignos [1], parejasD [74], compatibilidadImg [1]);

const parejaAcuarioyAries = new parejasYsignos( signosZodicales [0], compatibilidadSignos [1], parejasD [10], compatibilidadImg [1]);
const parejaAcuarioyTauro= new parejasYsignos( signosZodicales [1], compatibilidadSignos [1], parejasD [21], compatibilidadImg [1]);
const parejaAcuarioyGeminis= new parejasYsignos( signosZodicales[2], compatibilidadSignos [0], parejasD [31], compatibilidadImg [0]);
const parejaAcuarioyCancer= new parejasYsignos( signosZodicales [3], compatibilidadSignos [1], parejasD [40], compatibilidadImg [1]);
const parejaAcuarioyLeo= new parejasYsignos( signosZodicales [4], compatibilidadSignos [1], parejasD [48], compatibilidadImg [1]);
const parejaAcuarioyVirgo= new parejasYsignos( signosZodicales [5], compatibilidadSignos [1], parejasD [55], compatibilidadImg [1]);
const parejaAcuarioyLibra= new parejasYsignos( signosZodicales [6], compatibilidadSignos [1], parejasD [61], compatibilidadImg [1]);
const parejaAcuarioyEscorpio= new parejasYsignos( signosZodicales [7], compatibilidadSignos [1], parejasD [66], compatibilidadImg [1]);
const parejaAcuarioySagitario= new parejasYsignos( signosZodicales [8], compatibilidadSignos [0], parejasD [70], compatibilidadImg [0]);
const parejaAcuarioyCapricornio= new parejasYsignos( signosZodicales [9], compatibilidadSignos [1], parejasD [73], compatibilidadImg [1]);
const parejaAcuarioyAcuario= new parejasYsignos( signosZodicales [10], compatibilidadSignos [0], parejasD [75], compatibilidadImg [0]);
const parejaAcuarioyPiscis= new parejasYsignos( signosZodicales [11], compatibilidadSignos [1], parejasD [76], compatibilidadImg [1]);

const parejaPiscisyAries = new parejasYsignos( signosZodicales [0], compatibilidadSignos [2], parejasD [11], compatibilidadImg [2]);
const parejaPiscisyTauro= new parejasYsignos( signosZodicales [1], compatibilidadSignos [1], parejasD [22], compatibilidadImg [1]);
const parejaPiscisyGeminis= new parejasYsignos( signosZodicales[2], compatibilidadSignos [1], parejasD [32], compatibilidadImg [1]);
const parejaPiscisyCancer= new parejasYsignos( signosZodicales [3], compatibilidadSignos [0], parejasD [41], compatibilidadImg [0]);
const parejaPiscisyLeo= new parejasYsignos( signosZodicales [4], compatibilidadSignos [1], parejasD [49], compatibilidadImg [1]);
const parejaPiscisyVirgo= new parejasYsignos( signosZodicales [5], compatibilidadSignos [0], parejasD [56], compatibilidadImg [0]);
const parejaPiscisyLibra= new parejasYsignos( signosZodicales [6], compatibilidadSignos [1], parejasD [62], compatibilidadImg [1]);
const parejaPiscisyEscorpio= new parejasYsignos( signosZodicales [7], compatibilidadSignos [0], parejasD [67], compatibilidadImg [0]);
const parejaPiscisySagitario= new parejasYsignos( signosZodicales [8], compatibilidadSignos [2], parejasD [71], compatibilidadImg [2]);
const parejaPiscisyCapricornio= new parejasYsignos( signosZodicales [9], compatibilidadSignos [1], parejasD [74], compatibilidadImg [1]);
const parejaPiscisyAcuario= new parejasYsignos( signosZodicales [10], compatibilidadSignos [1], parejasD [76], compatibilidadImg [1]);
const parejaPiscisyPiscis= new parejasYsignos( signosZodicales [11], compatibilidadSignos [1], parejasD [77], compatibilidadImg [1]);


let parejasAries = [parejaAriesyAries, parejaAriesyTauro, parejaAriesyGeminis, parejaAriesyCancer, parejaAriesyLeo,  parejaAriesyVirgo, parejaAriesyLibra, parejaAriesyEscorpio, parejaAriesySagitario, parejaAriesyCapricornio, parejaAriesyAcuario, parejaAriesyPiscis];
let parejasTauro = [parejaTauroyAries, parejaTauroyTauro, parejaTauroyGeminis, parejaTauroyCancer, parejaTauroyLeo, parejaTauroyVirgo, parejaTauroyLibra, parejaTauroyEscorpio, parejaTauroySagitario, parejaTauroyCapricornio, parejaTauroyAcuario, parejaTauroyPiscis];
let parejasGeminis = [parejaGeminisyAries, parejaGeminisyTauro, parejaGeminisyGeminis, parejaGeminisyCancer, parejaGeminisyLeo, parejaGeminisyVirgo, parejaGeminisyLibra, parejaGeminisyEscorpio, parejaGeminisySagitario, parejaGeminisyCapricornio, parejaGeminisyAcuario, parejaGeminisyPiscis];
let parejasCancer = [parejaCanceryAries, parejaCanceryTauro, parejaCanceryGeminis, parejaCanceryCancer, parejaCanceryLeo, parejaCanceryVirgo, parejaCanceryLibra, parejaCanceryEscorpio, parejaCancerySagitario, parejaCanceryCapricornio, parejaCanceryAcuario, parejaCanceryPiscis];
let parejasLeo = [parejaLeoyAries, parejaLeoyTauro, parejaLeoyGeminis, parejaLeoyCancer, parejaLeoyLeo, parejaLeoyVirgo, parejaLeoyLibra, parejaLeoyEscorpio, parejaLeoySagitario, parejaLeoyCapricornio, parejaLeoyAcuario, parejaLeoyPiscis];
let parejasVirgo = [parejaVirgoyAries, parejaVirgoyTauro, parejaVirgoyGeminis, parejaVirgoyCancer, parejaVirgoyLeo, parejaVirgoyVirgo, parejaVirgoyLibra, parejaVirgoyEscorpio,parejaVirgoySagitario, parejaVirgoyCapricornio, parejaVirgoyAcuario, parejaVirgoyPiscis];
let parejasLibra = [parejaLibrayAries, parejaLibrayTauro, parejaLibrayGeminis, parejaLibrayCancer, parejaLibrayLeo, parejaLibrayVirgo, parejaLibrayLibra, parejaLibrayEscorpio, parejaLibraySagitario, parejaLibrayCapricornio, parejaLibrayAcuario, parejaLibrayPiscis];
let parejasEscorpio = [parejaEscorpioyAries, parejaEscorpioyTauro, parejaEscorpioyGeminis, parejaEscorpioyCancer, parejaEscorpioyLeo, parejaEscorpioyVirgo, parejaEscorpioyLibra, parejaEscorpioyEscorpio, parejaEscorpioySagitario, parejaEscorpioyCapricornio, parejaEscorpioyAcuario, parejaEscorpioyPiscis];
let parejasSagitario = [parejaSagitarioyAries, parejaSagitarioyTauro, parejaSagitarioyGeminis, parejaSagitarioyCancer, parejaSagitarioyLeo, parejaSagitarioyVirgo, parejaSagitarioyLibra, parejaSagitarioyEscorpio, parejaSagitarioySagitario, parejaSagitarioyCapricornio, parejaSagitarioyAcuario, parejaSagitarioyPiscis];
let parejasCapricornio = [parejaCapricornioyAries, parejaCapricornioyTauro, parejaCapricornioyGeminis, parejaCapricornioyCancer, parejaCapricornioyLeo, parejaCapricornioyVirgo, parejaCapricornioyLibra, parejaCapricornioyEscorpio, parejaCapricornioySagitario, parejaCapricornioyCapricornio, parejaCapricornioyAcuario, parejaCapricornioyPiscis];
let parejasAcuario = [parejaAcuarioyAries, parejaAcuarioyTauro, parejaAcuarioyGeminis, parejaAcuarioyCancer, parejaAcuarioyLeo, parejaAcuarioyVirgo, parejaAcuarioyLibra, parejaAcuarioyEscorpio, parejaAcuarioySagitario, parejaAcuarioyCapricornio, parejaAcuarioyAcuario, parejaAcuarioyPiscis];
let parejasPiscis = [parejaPiscisyAries, parejaPiscisyTauro, parejaPiscisyGeminis, parejaPiscisyCancer, parejaPiscisyLeo, parejaPiscisyVirgo, parejaPiscisyLibra, parejaPiscisyEscorpio, parejaPiscisySagitario, parejaPiscisyCapricornio, parejaPiscisyAcuario, parejaPiscisyPiscis];

//**LLAMADAS A FUNCIONES */

formulario.click(calcularsigno);
botonVer1.click(mostrarSigno);
botonVer2.addEventListener ("click",mostrarTodosSignos);
$("#versigno3").click(mostrarSignosElemento); 
botonPareja.addEventListener ("click", calcularPareja);