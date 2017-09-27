var auta = document.getElementById("auta");
var ulua = document.getElementById("ulubione")

function mojeAuto() {
    var ulubione auta.value;
    ulua.textContent = "Twoje ulubione auto: " + ulubione;

}
auta.onchange = mojeAuto;

//Z.D Użytkownik z klawiatury wpisuje w formluarzu swoje hasło w dwóch polach. Wykorzystaj zdażenie onchange, ktore będzie w bloku wyświetlało czy hasła są takie same i mają minimum 5 znaków, a maksymalnie 12. (na żywo będzie wyświetlało, każdy znak ma wywoływać funkcje)
