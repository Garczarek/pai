//Arkusz E.14-01-15.01

var a = document.getElementById("a");
var b = document.getElementById("b");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var blok = document.getElementById("blok");

function sprawdzenie() {
    if(a.value != "" || b.value != ""){
        if(!isNaN(a.value) || !isNaN(b.value)){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

b1.onclick = function() {
    if(sprawdzenie()){
        a = parseInt(a.value);
        b = parseInt(b.value);
        var dod=a+b;
        blok.innerHTML = dod;
    }
}
b2.onclick = function() {
    if(sprawdzenie()){
        a = parseInt(a.value);
        b = parseInt(b.value);
        var od=a-b;
        blok.innerHTML = od;
    }
}
b3.onclick = function() {
    if(sprawdzenie()){
        a = parseInt(a.value);
        b = parseInt(b.value);
        var mn=a*b;
        blok.innerHTML = mn;
    }
}
b4.onclick = function() {
    if(sprawdzenie()){
        a = parseInt(a.value);
        b = parseInt(b.value);
        if(b == 0){
            blok.innerHTML = "Nie dziel przez 0";
        } else {
            var dz=a/b;
            blok.innerHTML = dz;
        }
    }
}

var c = document.getElementById("c");
var d = document.getElementById("d");
var pot = document.getElementById("pot");
var blok2 = document.getElementById("blok2");
function sprawdz() {
    if(c.value != "" || d.value != ""){
        if(!isNaN(c.value) || !isNaN(d.value)){
            if(d.value>0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

pot.onclick = function() {
    if(sprawdzenie()){
        c = parseInt(c.value);
        d = parseInt(d.value);
        var poten = Math.pow(c,d);
        blok2.innerHTML = poten;
    }
}
