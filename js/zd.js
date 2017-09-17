//Z.D Napisać skrypt który oblicza obwód, pole oraz objętość stożka. Dane user podaje z klawiatury, wykorzystaj obiekt Math. Użytkownik wybiera za pomocą pola radio co chce obliczyć. Dane wprowadza w formularzu. Wynik wyświetl w bloku.


function funkcja(form) {
var h = form.h.value;
var r = form.r.value;
var l = form.l.value;
if (document.getElementById("obwod").checked) {
    var obw;
    obw = 2*Math.PI*r;
    obw = Math.round(obw);
    document.getElementById("wynik").innerHTML = "Obwód postawy=" + obw;
} else {
    if (document.getElementById("pole").checked) {
    var pole;
    pole = Math.PI*r*(r+l);
    pole = Math.round(pole);
    document.getElementById("wynik").innerHTML = "Pole= " + pole;
} else {
    if (document.getElementById("objetosc").checked) {
    var ob;
    ob = 1/3*Math.PI*r*r*h;
    ob = Math.round(ob);
    document.getElementById("wynik").innerHTML = "Objętość= " + ob;
}
}
}
/*zad[0] = form.login.value;
zad[1] = form.haslo.value;
zad[2] = form.kolor.value;
document.getElementById("wynik").innerHTML = "login: " + zad[0] + "<br>Hasło: " + zad[1];
document.getElementById("wynik").style.color = zad[2];*/
}
