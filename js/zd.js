var zad = [];
function funkcja(form) {
zad[0] = form.login.value;
zad[1] = form.haslo.value;
zad[2] = form.kolor.value;
document.getElementById("wynik").innerHTML = "login: " + zad[0] + "<br>Hasło: " + zad[1];
document.getElementById("wynik").style.color = zad[2];
}
