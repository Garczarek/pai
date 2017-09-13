var kolory = ['czerwony', 'zielony','czarny']; // literał tablicy
console.log(kolory[0]);

// konstruktor Array

var samochody = new Array('kia', 'audi', 'nissan');
console.log(samochody[0]);
console.log(samochody[samochody.length - 1]);
console.log(samochody.length);
//var nowy= prompt('Podaj nazwę');
//samochody[0] = nowy;
console.log(samochody);

// tablica wielowymiarowa

var tab = new Array(
    new Array('Janusz', 'Kowal', 'Poznań'),
    new Array('Marek', 'Nowak', 'Gniezno'),
    new Array('Anna', 'Kowal', 'Poznań')
);
console.log(tab[1][2]);

var imiona = ['Janusz', 'Anna', 'Krystyna', 'Zenek'];
console.log(imiona);
var posortowane = imiona.sort();
console.log(posortowane);
var odwrotnosc = imiona.reverse();
console.log(odwrotnosc);

console.log(odwrotnosc.indexOf('Krystyna')); // pobieranie indeksu wartosci

odwrotnosc.pop();
odwrotnosc.push('nowy');
odwrotnosc.unshift('pierwszy');
console.log(odwrotnosc);

// tablica z liczbami

var liczby = [1, 2, 20, 190, -1, 1000000];
console.log(liczby);
liczby.sort(function(a,b){
    return (a - b);     // sortowanie liczb, a nie liter
});
console.log(liczby);
// z.d utwórz formularz z loginem (text) i hasłem. Zapisz dane w tablicy, wyświetl w nagłóku drugiego stopnia. Użytkownik podaje również kolor w jakim tekst ma być wyświetlony.
