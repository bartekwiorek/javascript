
let liczba = prompt("co chcesz robic?");
if (liczba == 1) {
        let id = 1;
        let x = prompt("podaj X");
        let y = prompt("podaj Y");
        let dodawanie = x+y;

        document.write("Wynik to: " + dodawanie);
}
else if (liczba == 2) {
        let id = 2;
        let x = prompt("podaj X");
        let y = prompt("podaj Y");
        let odejmowanie = x-y;

        document.write("Wynik to: " + odejmowanie);
}
else if (liczba == 3) {
        let id = 3;
        let x = prompt("podaj X");
        let y = prompt("podaj Y");
        let iloczyn = x*y;

        document.write("Wynik to: " + iloczyn);
}
else if (liczba == 4) {
        let id = 4;
        let x = prompt("podaj X");
        let y = prompt("podaj Y");
        let iloraz = x/y;

        document.write("<b>Wynik to: </b>" + iloraz);
}

