


var $titulo = document.getElementById("name_container");
var $ocupation = document.getElementById("ocupation_container");
var $description = document.getElementById("description_container");

var $aptitud1 = document.getElementById("aptitud1");
var $aptitud2 = document.getElementById("aptitud2");
var $aptitud3 = document.getElementById("aptitud3");
var $aptitud4 = document.getElementById("aptitud4");

var $def_aptitud1 = document.getElementById("def_aptitud1");
var $def_aptitud2 = document.getElementById("def_aptitud2");
var $def_aptitud3 = document.getElementById("def_aptitud3");
var $def_aptitud4 = document.getElementById("def_aptitud4");

var $cerrar = document.getElementById("cerrar");



var $usuario = JSON.parse(localStorage.getItem("usuario"));

$titulo.innerHTML = $usuario.nombre;

$ocupation.innerHTML = $usuario.ocupación;
$description.innerHTML = $usuario.descripción;

$aptitud1.innerHTML = $usuario.aptitud1;
$aptitud2.innerHTML = $usuario.aptitud2;
$aptitud3.innerHTML = $usuario.aptitud3;
$aptitud4.innerHTML = $usuario.aptitud4;

$def_aptitud1.innerHTML = $usuario.def_aptitud1;
$def_aptitud2.innerHTML = $usuario.def_aptitud2;
$def_aptitud3.innerHTML = $usuario.def_aptitud3;
$def_aptitud4.innerHTML = $usuario.def_aptitud4;

$cerrar.addEventListener('click', () => {
    localStorage.removeItem("usuario");
    window.location.href = "index.html";

})
