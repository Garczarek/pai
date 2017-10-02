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

var regImie = /^[A-z]{2,16}$/;
var regNazw = /^[A-z]{2,30}(\-[A-z]{2,30})?$/;
var regLog = /^(\w|\W){4,25}$/;
var regMail = /^[A-z](\w|\W){0,15}@(\w{2,10}\.){1,3}[a-z]{2,4}$/;
var regHas = /^((?=.*\d)(?=.*[A-z])(?=.*[\W|_]).{8,20})$/;

function sprawdzImie() {
    if(regImie.test(imie.value)) {
        blok.textContent = "";
        this.disabled = true;
    } else {
        imie.focus();
        blok.textContent = "Wpisz poprawnie imie";
    }
}

function sprawdzNazw() {
    if(regNazw.test(nazwisko.value)) {
        blok.textContent = "";
        this.disabled = true;
    } else {
        nazwisko.focus();
        blok.textContent = "Wpisz poprawnie nazwisko";
    }
}

function sprawdzLog() {
    if(regLog.test(login.value)) {
        blok.textContent = "";
        this.disabled = true;
    } else {
        login.focus();
        blok.textContent = "Wpisz poprawnie login";
    }
}

function blokuj() {
    if(regMail.test(mail1.value)) {
        blok.textContent = "";
        this.disabled = true;
        mail2.disabled = false;
        mail2.focus();
    } else {
        mail1.focus();
        blok.textContent = "Wpisz poprawnie maila";
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

function blokuj2() {
    if(regHas.test(pass1.value)) {
        blok.textContent = "";
        this.disabled = true;
        pass2.disabled = false;
        pass2.focus();
    } else {
        pass1.focus();
        blok.textContent = "Wpisz bezpieczne hasło";
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


imie.addEventListener("blur", sprawdzImie);
nazwisko.addEventListener("blur", sprawdzNazw);
login.addEventListener("blur", sprawdzLog);
mail1.addEventListener("blur", blokuj);
mail2.addEventListener("blur", mail);
pass1.addEventListener("blur", blokuj2);
pass2.addEventListener("blur", pass);
regulamin.addEventListener("change", sprawdzReg);
popraw.addEventListener("click", odblokuj);
przycisk.addEventListener("click", wyswielt);

// Z.D użytkownik podaje z klawiatury nazwy zdjęć z rozszerzeniami, nazwy nie mogą mieć cyfr, mogą być pisane tylko małymi literami oraz nie mogą mieć znaków specjalnych oprócz kropki. Rozdziela nazwy spacjami. Wszystko zdjęcia z rozszerzerniem jpg zapisz w tablicy o nazwie jpg
