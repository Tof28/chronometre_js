//VARIABLES
var sp, btn_start, btn_stop, t, ms, s, mn, h;

//FONCTION POR INITIALISER LES VARIABLES QUAND LA PAGE SE CHARGE
window.onload = function() {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t; 
    ms = 0, s = 0, mn = 0, h = 0;
}

//MISE EN PLACE DU COMPTEUR
function update_chrono(){
    ms += 1;
    if(ms == 10) {
        ms = 1;
        s += 1;
    }
    if(s == 60) {
        s = 0;
        mn += 1;
    }
    if(mn == 60) {
        mn = 0;
        h += 1;
    }
    //INSERTION DES VALEURS DANS LES SPANS 
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn +"min";
    sp[2].innerHTML = s +"s";
    sp[3].innerHTML = ms +"ms";
}

//MISE EN PLACE DE LA FONCTION START
function start() {
    t = setInterval(update_chrono, 100); //cette ligne execute la fonction update_chrono toutes les 100 ms
    btn_start.disabled = true;
}

//MISE EN PLACE DE LA FONCTION STOP
function stop() {
    clearInterval(t); //SUPPRESSION DE L'INTERVALLE T QUE NOUS AVIONS CREE
    btn_start.disabled = false;
}

//REMETTRE LE CHRONOMETRE A 0
function reset() {
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0, s = 0, mn = 0, h = 0;
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn +"min";
    sp[2].innerHTML = s +"s";
    sp[3].innerHTML = ms +"ms";
}