//document.write("test")

var imie = 'Janusz';
var nazwisko;
nazwisko="Nowak";
//document.write("Imię: " + imie + "<br>Nazwisko: " + nazwisko);

var wiek1 = 19;
var wiek2 = 20;
var sredniWiek = (wiek1+wiek2)/2; // camelCase
console.log("Sredni wiek wychodzi: " + sredniWiek);
//alert(sredniWiek);
var a = 5, b = '3';
var suma = a + b;
console.log(suma);
console.log(10 - '20' + 30); //20
console.log(10 + '20' + 30); //30

var c = 10, d = 2.5;
console.log(typeof(c)); //sprawdzanie typu
console.log(typeof(imie));
var log = true;
console.log(typeof(log));
var x = null;
var y;
console.log(typeof(x));
console.log(typeof(y));
var dziesietne = 20;
var oktalna = 020; // liczba ósemkowa, 0 i liczba. Tak się je zapisuje
var hex = 0x20;  //liczba szestnastkowa: 0x i liczba

console.log(hex);

console.trace(); //pokazuje w jakim pliku jesteśmy

var name = "Anna";
name = parseInt(name); //zmienienie inta na stringa
console.log(name); //NaN
console.log(typeof(name));
var j = '1';
j = parseInt(j);
console.log(j); //wyszło 1

var k = '3.99999';
k = parseFloat(k); // z parseInt by nie było po przecinku
console.log(k);

var age1 = prompt('Podaj wiek');
console.log(typeof(age1));

var age2 = prompt('podaj wiek 2');
age1 = parseInt(age1);
age2 = parseInt(age2);
var wynik = (age1 + age2)/2;
console.log(wynik);
//document.getElementById("naglowek").innerHTML = wynik;
var elNaglowek = document.getElementById('naglowek');
elNaglowek.innerHTML = wynik;
elNaglowek.style.color = prompt("podaj kolor","np.yellow");

