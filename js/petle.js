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

var a = prompt("Podaj wart. pocz.");
var b = prompt("Podaj wart. końc.");
for(var i = a; i <= b;i++){
    if(i!=b) {
        document.write(i + ",<br>");
    } else {
         document.write(i + ".<br>");
    }
}
