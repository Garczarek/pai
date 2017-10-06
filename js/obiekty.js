//
// tworzenie obiektu za pomocą literału
// obiekty -> właściwości
//

var janusz = {
    wzrost: 190,
    waga: 79,
    miejsceUrodzenia: "Poznań",
    plec: "m"
};

console.log(janusz.wzrost);




var auto = {
    marka: "Tesla",
    model: "Model 3",
    predkosc: "200 km/h",
    wyswietl() {                // wyswietl: function() {

        document.write(
            this.marka + " " +
            this.model + "<br />Prędkość: " +
            this.predkosc
        );

    }
};

auto.wyswietl();                // wywoływanie metody



var ksiazka = {
    tytul: "Pan Tadeusz",
    rokWydania: 1834,
    gatunek: "poemat epicki",
    autor: {
        imie: "Adam",
        nazwisko: "Mickiewicz",
        wyswietl() { return this.imie + " " + this.nazwisko }
    }
}


// odwoływanie się do obiektu
console.log( ksiazka.autor.imie );
console.log( ksiazka["autor"]["imie"] );


var klucz = "nazwisko";
console.log(ksiazka.autor[klucz]);

console.log( ksiazka.autor.wyswietl() )






//
// tworzenie obiektu - drugi sposób
//


var produkt = {};

// sprawdzenie czy obiekt ma właściwość
console.log( typeof(produkt.nazwa) );           // undefined

// dodanie właściwość i metody do obiektu produkt
produkt.nazwa = "pralka";
produkt.firma = "Bosch";
produkt.model = "WLK-501";
produkt.waga = 8;
produkt.cena = 1500.00;
produkt.wyswietl = function() {
    return "Nazwa produktu: " + this.nazwa + "<br />" +
        "Firma: " + this.firma + "<br />" +
        "Model: " + this.model;
}

console.log( produkt );
document.write("<br /><br />" + produkt.wyswietl() )

console.log( typeof(produkt.wyswietl) );        // function





//
// tablice w obiekcie
//

var platnosci = {
    pokoj1: [50, 100, 200, 300, 50],
    pokoj2: [150, 300, 50, 250, 100],
    pokoj3: [350, 600, 100, 950],
    pokoj4: [550, 200, 100, 300, 350]
};

console.log(platnosci.pokoj1[0]);
console.log(platnosci.pokoj3.length);





/*

ZD

stwórz metodę, która wyświtli sumę wszystkich płatności
(ze wszystkich pokoi)

*/

function sumuj(tab) {
    var suma = 0;
    for(var i=0; i<tab.length; i++) { suma = suma + tab[i] };
    return suma;
}

platnosci.suma = function() {
    return sumuj(this.pokoj1) +
        sumuj(this.pokoj2) +
        sumuj(this.pokoj3) +
        sumuj(this.pokoj4)
}

console.log( platnosci.suma() );





//
// konstruktory
// !! z dużych liter
//

function Auto() {
    this.model = "Ferrari";
};

var samochod = new Auto();
console.log(samochod.model);


function Osoba(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wyswietl = function() {
        return this.imie + " " + this.nazwisko;
    }
}

var jan = new Osoba("Jan", "Kowalski");
var anna = new Osoba("Anna", "Nowak");

console.log(jan);

var hotel = new Object();
hotel.nazwa = "Hotel Poznań";
hotel.pokoje = 100;
hotel.pokojeZarezerwowane = 24;
hotel.silowania = true;
hotel.rodzajPokoi = ["pojedyńczy","Podwójny","Apartament"];
hotel.pokojeWolne = function() {
    return this.pokoje - this.pokojeZarezerwowane;
}
//console.log(hotel.pokojeWolne());

// konstruktor obiektów

function Hotel(nazwa, pokoje, pokojeZarezerwowane){
    this.nazwa = nazwa;
    this.pokoje = pokoje;
    this.pokojeZarezerwowane = pokojeZarezerwowane;
    this.wolnePokoje = function () {
        return this.pokoje - this.pokojeZarezerwowane;
    }
};

var lech = new Hotel("Lech", 45, 30);
var mercury = new Hotel("Mercury", 450, 248);

//document.write("Wolne pokoje w hotelu Lech: " + lech.wolnePokoje())


// zad. utwórz konstruktor o nazwie pies i parametrach: imie, rasa, waga oraz ulubione zajęcia, które mogą mieć wiele wartości. Utwórz 3 obiekty o nazwach Razor, Edi, Seba


function Pies(imie, rasa, waga, ulZajecia){
    this.imie = imie;
    this.rasa = rasa;
    this.waga = waga;
    this.ulZajecia = ulZajecia;
};
var Razor = new Pies("Razor", "Słaba", 30, ["Lizanie po jajach", "Aportowanie"]);
var Edi = new Pies("Edi", "Najlepsza", 10, ["Jedzenie", "Szczekanie"]);
var Seba = new Pies("Seba", "Najgorsza", 7, ["Lizanie po jajach", "Leżenie"]);

var psy = [Razor, Edi, Seba];

Edi.ulZajecia.push("Spanie");

/*console.log(Edi.ulZajecia);
console.log(psy);*/

var rozmiar
for (var i =0;i<psy.length;i++){
    if(psy[i].waga > 10) {
        rozmiar="duży pies";
    } else {
        rozmiar="mały pies";
    }
    document.write("Pies <span style='color:red;'>" + psy[i].imie + "</span> to " + rozmiar + "<br>")
}

/*var tab = ['Jan', "Nowak", "Poznań"];
for (i in tab){
    //document.write(tab[i]);
}

document.write("<br /><br />");
for (x in Edi){
    if(x=="imie"||x=="rasa")
    document.write(Edi[x]);
}*/

/*
function Pole(a, b){
    return a*b;
}
console.log(Pole.length);
console.log(Pole.constructor);
console.log(Pole.prototype);
*/

function Uczen(imie, nazwisko){
    this.imie = imie;
    this.nazwiswko = nazwisko;
}

var adrian = new Uczen("Adrian", "Marciniak");
Uczen.prototype.narodowosc = "polska";
Uczen.prototype.wyswietlUcznia = function() {
    return "Imię: " + this.imie + " Nazwisko: " + this.nazwiswko + " Narodowosc: " + this.narodowosc;
}
document.write(adrian.wyswietlUcznia());
console.log(adrian.constructor);
console.log(Uczen.prototype.narodowosc);
console.log(adrian.hasOwnProperty("imie"));
console.log(adrian.hasOwnProperty("narodowosc"));

//utwórz konstruktor rower w którym będzią właściwości marka, kolor. Wyświetl wszystkie dane za pomocą metody wyswoetlRower. Wykorzystaj for in.
//Utwórz protorym, w którym będzie zapisana ilość kół

function Rower(marka, kolor){
    this.marka = marka;
    this.kolor = kolor;
};
var nowy = new Rower("Bicykle", "Zielony");
Rower.prototype.wyswietlRower = function() {
    for (x in this){
        if(x!="wyswietlRower")
         document.write(this[x] + " ");
         }
}
nowy.wyswietlRower();








