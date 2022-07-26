
const $btn_ingreso = document.getElementById('btn_ingreso'); 

const form = document.getElementById('form');
var $email;
var $pass;




var user1 = {
    nombre: "Santiago Valencia Ríos",
    edad: 24,
    ocupación: "Estudiante",
    descripción: "Soy un joven estudiante de Desarrollo de Software en la Fundación Católica del Norte, he tenido elapoyo de amigos pertenecientes al gremio y por micuenta también realicé un curso de Python conDjango en CoderHouse y un curso de Lógica deprogramación en Udemy, plataformas remotas paraeducación. Manejo tecnologías como CSS, HTML,JS, Git y GitHub, y actualmente aprendiendo basesde Java. Me describo como alguien eficiente,jovial y autodidacta, muy dispuesto a tomaroportunidades de aprendizaje.",
    email: "santiagovalenciarios@gmail.com",
    contraseña: "pipo971023",
    aptitud1: "Responsabilidad",
    def_aptitud1: "Doy cumplimiento a las obligaciones y soy cuidadoso con la toma de decisiones o al realizar.",
    aptitud2: "Carisma",
    def_aptitud2: "Trato de influir de la mejor manera posible sobre otras personas, conectar siempre de manera que se sientan bien.",
    aptitud3: "Resolución de problemas",
    def_aptitud3: "Tengo capacidad para identificar problemas, y tomar medidas lógicas para encontrar una solución",
    aptitud4: "Habilidad para la comunicación",
    def_aptitud4: "Puedo comunicarme con exactitud, claridad y siempre con respeto."

}

var user2 = {
    nombre: "Dahián Valencia Ríos",
    edad: 28,
    ocupación: "Médico",
    descripción: "Soy Médico y Cirujano de la Universidad de Antioquia, Actualmente me encuentro terminando mi segundo año de Especialización en Neurología en la misma Universidad, me describo como alguien apasionado por la lectura, el aprendizaje, el origami, me gusta la música, y tengo una gran capacidad para el aprendizaje y me desenvuelvo muy muy bien con el inglés.",
    email: "dahianvalenciarios@gmail.com",
    contraseña: "dahian.018",
    aptitud1: "Lectura",
    def_aptitud1: "Soy un apasionado por la lectura, en mi rutina diaria no puede faltar leer minimo 30 minutos.",
    aptitud2: "Inglés",
    def_aptitud2: "Tengo un niven avanzado de inglés, gracias a que estuve varios semestres en una escuela de idiomas.",
    aptitud3: "Efectividad",
    def_aptitud3: "Tengo capacidad de lograr los objetivos que se esperan o se desean sobre mí.",
    aptitud4: "Habilidad para la comunicación",
    def_aptitud4: "Puedo comunicarme con exactitud, claridad y siempre con respeto."

}

var user3 = {
    nombre: "Víctor Valencia Ríos",
    edad: 27,
    ocupación: "Ingeniero",
    descripción: "Soy un joven ingeniero Mecánico, de la Universidad de Antioquia, actualmente me encuentro estudiando Desarrollo de Software y en proceso de selección y aprendizaje en una gran empresa. Tengo conocimientos en SQL, Java, Bases de Datos, MongoDB, Git, GitHub, etc. Tengo altas capacidades en  matemáticas y facilidad para aprender sobre todo en áreas de la tecnología. También puedo decir que soy alguien muy responsable y disfruto muchoi ser autodidacta.",
    email: "victorvalenciarios@gmail.com",
    contraseña: "victor025",
    aptitud1: "Matematicas",
    def_aptitud1: "Tengo un nivel avanzado en ciencias Matemáticas, pues gracias a mis estudios fue algo que he tenido que practicar mucho tiempo.",
    aptitud2: "Capacidad de aprendizaje",
    def_aptitud2: "Puedo adquirir conociemiento, aprendizaje y nuevos temas con facilidad, además es algo que no solo se me da bien, también me apasiona.",
    aptitud3: "Resolusión de problemas",
    def_aptitud3: "Tengo capacidad para identificar problemas, y tomar medidas lógicas para encontrar una solución",
    aptitud4: "Hablidad para la comunicación",
    def_aptitud4: "Puedo comunicarme con exactitud, claridad y siempre con respeto."

}

var arrayUsers = [user1, user2, user3]


function captura(){
    $email = document.getElementById('email').value;
    $pass = document.getElementById('password').value;
    
}
  


$btn_ingreso.addEventListener("click", () => {    // Click para enviar datos
    captura();   // Función para guardar los datos en variables
    arrayUsers.find(user =>{
        if(user.email == $email){
            if($email == user.email && $pass == user.contraseña){
                
                
                localStorage.setItem('usuario', JSON.stringify(user));
                console.log(localStorage.getItem("usuario"));
                window.location.href = "homepage.html";
                // document.getElementById("name_container").innerHTML = user.nombre;
                
                alert("Bienvenido "+ user.nombre);
            }else{
                alert("El email o la contraseña no son correctos.")
            }
        }
        
    });

    
    
    
})

console.log(localStorage.getItem("usuario"));



