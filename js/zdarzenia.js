var imie = document.getElementById("imie");
var nazwisko = document.getElementById("nazwisko");
var login = document.getElementById("login");
var mail1 = document.getElementById("mail1");
var mail2 = document.getElementById("mail2");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var data = document.getElementById("data");
var regulamin = document.getElementById("regulamin");
var przycisk = document.getElementById("przycisk");
var popraw = document.getElementById("popraw");
var blok = document.getElementById("blok");


blok.style.color = "red";

//window.onload = function() {
//    alert("Witaj");
//}

//imie.onblur = sprawdz();


/*
function sprawdz() {
    if(imie.value.length >= 2 && this.value.length < 15) {
        blok.textContent = "";
        //imie.setAttribute("disabled", "");
    } else {
        blok.textContent = "Błędne dane";
    }
}
*/

function sprawdz() {
    var element = document.getElementById(this.id);
    if(element.value.length >= 2 && element.value.length < 15) {
        blok.textContent = "";
        this.disabled = true;
    } else {
        element.focus();
        blok.textContent = "Błędne dane";
    }
}


function mail() {
    if( mail1.value != mail2.value ) {
        blok.textContent = "Wpisałeś różne adresy";
        mail1.disabled = false;
        mail2.disabled = true;
        mail1.focus();
        mail1.value = "";
        mail2.value = "";
    } else {
        blok.textContent = "";
        this.disabled = true;
    }
}
function pass() {
    if( pass1.value != pass2.value ) {
        blok.textContent = "Wpisałeś różne hasła";
        pass1.disabled = false;
        pass2.disabled = true;
        pass1.focus();
        passl1.value = "";
        pass2.value = "";
    } else {
        blok.textContent = "";
        this.disabled = true;
    }
}

function blokuj() {
    this.disabled = true;
    blok.textContent = "";
    mail2.disabled = false;
    mail2.focus();
}

function blokuj2() {
    this.disabled = true;
    blok.textContent = "";
    pass2.disabled = false;
    pass2.focus();
}

function sprawdzReg() {
    if(regulamin.checked) {
        przycisk.disabled = false;
    } else {
        przycisk.disabled = true;
    }
}

function odblokuj() {
    var zablk = document.getElementsByTagName("input");
    if(zablk.length > 0) {
        for (var i=0; i<zablk.length; i++){
            if(zablk[i].disabled == true)
                zablk[i].disabled = false;
        }
    }
}

function wyswielt(){
    var puste = false;
    var inputy = document.getElementsByTagName("input");
    for(var i=0;i<inputy.length-1;i++){
        if(inputy[i].value=="") {
            puste = true;
            break;
        }
    }
    if(puste) {
        blok.textContent = "Uzupelnij puste pola";
    } else {
    blok.style.color = "red";
    var formul = document.querySelector("form");
    formul.style.display = "none";
    document.write(
        "Imię: " + imie.value + "<br>" +
        "Nazwisko: " + nazwisko.value + "<br>" +
        "Login: " + login.value + "<br>" +
        "Mail: " + mail1.value + "<br>" +
        "Hasło: " + pass1.value + "<br>" +
        "Data: " + data.value + "<br>"
    )
    }
}


imie.addEventListener("blur", sprawdz);
nazwisko.addEventListener("blur", sprawdz);
login.addEventListener("blur", sprawdz);
mail1.addEventListener("blur", blokuj);
mail2.addEventListener("blur", mail);
pass1.addEventListener("blur", blokuj2);
pass2.addEventListener("blur", pass);
regulamin.addEventListener("change", sprawdzReg);
popraw.addEventListener("click", odblokuj);
przycisk.addEventListener("click", wyswielt);
