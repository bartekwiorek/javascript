//czemu dodawanie nie działa? zmienne var const let?
//parseInt czym ty jestes?


var liczba = prompt("co chcesz robic?");
if (liczba == 1) {
        var id = 1;
        var x = prompt("podaj X");
        var y = prompt("podaj Y");
        var dodawanie = parseInt(x) + parseInt(y);

        document.write("<b>Wynik dodawania to: </b>" + dodawanie);
}
else if (liczba == 2) {
        var id = 2;
        var x = prompt("podaj X");
        var y = prompt("podaj Y");
        var odejmowanie = x-y;

        document.write("<b>Wynik odejmowania to: </b>" + odejmowanie);
}
else if (liczba == 3) {
        var id = 3;
        var x = prompt("podaj X");
        var y = prompt("podaj Y");
        var iloczyn = x*y;

        document.write("<b>Wynik mnożenia to: </b>" + iloczyn);
}
else if (liczba == 4) {
        var id = 4;
        var x = prompt("podaj X");
        var y = prompt("podaj Y");
        var iloraz = x/y;

        document.write("<b>Wynik dzielenia to: </b>" + iloraz);
}

