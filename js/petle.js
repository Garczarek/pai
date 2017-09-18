// pętle for

/*for (var i = 0;i < 10;i++){
    document.write(i);
    if(i == 6){
        break;
    }
}*/

//zad. losuj 10 licz z przedziału od 10 do 100

/*for (var i = 0;i < 10;i++){
    document.write(Math.floor(Math.random() * 91 + 10) + '<br>');
}
for(var i = 0;i <10;i++){
    if(i == 0) {
        document.write(i+1 + " raz<br>")
    } else {
    document.write(i+1 + " razy<br>");
    }
}*/

//zad użytkownik podaje z klawiatury wartość początkową i końcową pętli, po każdej liczbie dodaj przeciniek, a tylko po ostatniej liczbie podaj kropkę. Pierwsza liczba musi być mniejsza od drugiej.

/*
var a = prompt("Podaj wart. pocz.");
var b = prompt("Podaj wart. końc.");
for(var i = a; i <= b;i++){
    if(i!=b) {
        document.write(i + ",<br>");
    } else {
         document.write(i + ".<br>");
    }
}
*/
// WHILE
/*var i = 0;
while(i++ <5){
    document.write(i + "<br>");
}*/
/*var x = 0, y = 0;

while(x >= y){
    x = Number(prompt("x"));
    y = Number(prompt("y"));
}
document.write("podałeś poprawne wartości: <br>" + "x= " + x + " y= " + y);*/
//DO WHILE
/*do{
   var wiek = prompt("Podaj wiek: ");
    if(wiek == 18){
        document.write("Masz 18 lat.");
    }
}while(wiek != 18);*/

// Wykorzystaj pętlę for i do while. Podaj 5 liczb podzielnych przez 2 z klawiatury. Zapisz je do tablicy i wyświetl je w konsoli.
/*var tab = [];
for(var i = 0;i < 5;i++){
    do{
    tab[i] = prompt("podaj liczbę podzielne przez 2");
    tab[i] = parseInt(tab[i]);
    }while(tab[i]%2 != 0);
}
console.log(tab);*/

// użytwonik podaje z klawiatury liczbę. Zabezpiecz przed podaniem litery lub znaku specjalnego.

/*document.write('<input type="text" id="liczba">');
document.write('<button id="przycisk">Wyślij</button>');

var elPrzycisk = document.getElementById("przycisk");
var elLiczba = document.getElementById("liczba");
elPrzycisk.onclick = function(){
    var wartosc = elLiczba.value;
    if(!isNaN(wartosc)) {
        console.log(wartosc);
    }
}*/

// Program wyświetlający liczby od 1 do 10 w pięciu rzędach. Po każdej liczbie ma być przecinek, a po ostatniej w każdym rzędzie kropka.


for(var i = 0;i<5;i++){
    for(var j = 0;j<11;j++){
        if(j != 10) {
        document.write(j + ", ");
        } else {
            document.write(j + ". ");
        }
    }
    document.write("<br>");
}

//choinka
var x;
for(var i = 1;i<=5;i++){
    for(var j = 0;j<i;j++){
        document.write("*");
    }
    document.write("<br>");
}

//podaj z klawiatury maksymalną ilość gwiazdek, zrób pętlę w której zabezpieczysz przed podaniem błędnych danych.

/*var n = prompt("Podaj liczbę gwazdek:");
if (!isNaN(n)) {
for(var i = 1;i<=n;i++){
    for(var j = 0;j<i;j++){
        document.write("*");
    }
    document.write("<br>");
}
}*/

//użytkownik podaje login i hasło z klawiatury w formularzu, jeżeli login to admin, a hasło to tajne@123 to na ekranie wyświetli się w kolorze czerwonym poprawne hasło.

/*
function funkcja(form) {
var login = form.login.value;
var haslo = form.haslo.value;
var blok = document.getElementById("a");
if(login == "admin" && haslo == "tajne@123") {
    blok.style.color = "red";
    blok.innerHTML = 'Poprawne hasło';
} else {
    blok.style.color = "blue";
    blok.innerHTML = 'Złe hasło';
}
}
*/

// foreach

var tab = ['Anna', 'Jacek', 'Janusz', 'Adrian'];

for (var i =0;i <= tab.length - 1;i++){
    //document.write(tab[i] + " ");
}

function p(wartosc,indeks){
    document.write("Indeks " + indeks + ": " + wartosc + "<br>");
}

tab.forEach(p);




