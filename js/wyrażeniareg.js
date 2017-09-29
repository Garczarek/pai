/*var text = "13";*/
/*var regEx = /Szkół/i;  // jak się da i to nie zwraca uwagi na wielkość liter
var sprawdz = regEx.test(text); // jak się daje ^ to patrzy tylko na początkowe słowo
console.log(sprawdz); */// a jak $ to na końcowe słowo, może łączyć powyższe funkcje
/*var regEx = /[A-z]+@/;*/ // czy dana wartość się znajduje bez zwracania na wielkości liter, znak "|" to jest or
 // "\" jak znak specjalny jak mały znak to może być, ale jak duży to nie może być
// ? - po znaku może, ale nie musi być
// + - po znaku musi wystąpić
// . - dowolny znak
// \w - litery, cyfry, znak podkreślenia
// \d - tylko cyfry
// \s - spacja
// () - grupa liter
/*var regEx = /[A-z]?@/;*/
/*var regEx = /^mąk[a]*@/;*/
/*var regEx = /[a]{1}/;*/
/*var regEx = /[a]{3,4}/; // zakres od do*/
/*var regEx = /[a-z]{3,}$/; //od trzech do nieograniczonej*/
/*var regEx = /\\/;*/
/*var regEx = /\./ // sprawdzanie czy jest kropka*/
/*var regEx = /\W/;*/
/*var regEx = /\d/;*/
/*var regEx = /(text){2}/;
var text = 'texttext;'*/
/*var sprawdz = regEx.test(text);
console.log(sprawdz);*/

var kod = document.getElementById("kod");
var blok = document.getElementById("blok");
var regEx = /^\d{2}-\d{3}$/;
kod.oninput = function() {
    if(regEx.test(kod.value)) {
        blok.textContent = "Poprawny kod";
        blok.style.color = "green";
    } else {
        blok.textContent = "Błędny kod";
        blok.style.color = "red";
    }
}
