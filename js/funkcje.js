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
function polObjetosc(szer, dlu, wys){
    var pole = szer*dlu;
    var objetosc = pole*wys;
    var wynik = [pole, objetosc];
    return wynik;
}
console.log(polObjetosc(2,3,4));
var pole = polObjetosc(2,3,19)[0];
var objetosc = polObjetosc(2,3,10)[1];
console.log(pole);
console.log(objetosc);

var x = prompt('Podaj wartosc','0 - pole, 1 - objetosc');
console.log(polObjetosc(1,2,3)[x]);

console.log(Math.PI);

//Z.D Napisać skrypt który oblicza obwód, pole oraz objętość stożka. Dane user podaje z klawiatury, wykorzystaj obiekt Math. Użytkownik wybiera za pomocą pola radio co chce obliczyć. Dane wprowadza w formularzu. Wynik wyświetl w bloku.
