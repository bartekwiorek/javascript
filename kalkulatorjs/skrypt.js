function dodawania() {
        var x = prompt("podaj X");
        var y = prompt("podaj Y");
        var dodawanie = parseInt(x) + parseInt(y);
        
        document.write("<b>Wynik dodawania to: </b>" + dodawanie);
}

function odejmowania() {
        var x = prompt("podaj X");
        var y = prompt("podaj Y");
        var odejmowanie = x-y;

        document.write("<b>Wynik odejmowania to: </b>" + odejmowanie);
}

function mnozenia() {
        var x = prompt("podaj X");
        var y = prompt("podaj Y");
        var iloczyn = x*y;

        document.write("<b>Wynik mnożenia to: </b>" + iloczyn);
}

function dzielenia() {   
        var x = prompt("podaj X");
        var y = prompt("podaj Y");
        var iloraz = x/y;

        document.write("<b>Wynik dzielenia to: </b>" + iloraz);
}
