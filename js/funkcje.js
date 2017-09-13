/* function witaj() {
    document.write("Witaj " + name + '<br>');
}
var name = 'Janusz';
witaj(name);


function polePros(a,b){
    var pole = a * b;
    return pole;
}

document.write(polePros(3,4) + "cm<sup>2</sup>");
*/
function licz(a,b){
    var a = document.getElementById('szerokosc').value;
    var b = document.getElementById('dlugosc').value;
    var pole = a * b;
    document.write("Pole prostokąta= " + pole + "cm<sup>2</sup>");
}
