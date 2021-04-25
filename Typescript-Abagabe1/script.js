"use strict";
//*Aufgabe 1*//
/*function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}
function func2(): void {
    console.log("Gute!");
}*/
//* Antwort Aufgabe 1 A : Als erstes wird "Alles" ausgegeben danach "Klar?" und als letztes "Logo!". *//
//*Durch Zeile 5 kommt es zum ausgeben von "Alles", danach befinden wir uns in Zeile 13, da man durch Zeile 6 dorthin versetzt wird*//
//*Wenn man den Variablennamen ändert ist es wichtig, dass man auch den neuen Variablennamen bei console.log() reinschreibt damit auch das richtige ausgegeben wird.*//
//*das bedeutet, wenn man in Zeile vier das x ändert in ein y , muss man dies Aauch in Zeile 5 bei log machen*//
//*Aufgabe 1 B : Der Debugger bringt uns von Zeile 4 auf die 5, dann kommen wir in Zeile 6 und springen dann in Zeile 13 und dann in die 7 zuruück.*//
/*function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while( i > 0);
}

a2();*/
/* Aufgabe
2 A- wenn der Code ausgeführt wird, wird von der 9 immer 1 subtrahiert. Also erscheint in der Console 8,7,6,5,4,3,2,1.
Dieser Vorgang kann nur bis zur 1 laufen, da wir in der while drinne stehen haben, dass i größer 0 sein muss.
Zu beginn haben wir i als 9 deklariert und i muss größer als 0 bleiben. Danach wird es gestoppt.*/
/* Wenn man das mit dem Debugger betrachtet sieht man dass er von Zeile 34 in Zeile 35 und dann in Zeile 36 springt.
Dieser Vorgang läuft so lange bis wir bei der 0 angelangt sind, denn dann kommen wir in Zeile 37 also die geschlossene Klammer*/
/* Aufgabe 3 A- Wenn man in Zeile 8 statt func1() einfach func3() entsteht ein Fehler, da wir nur func1() und func2() vorhanden haben und wenn man
statt console.log(x) einfach console.log(y) eintippt kann der Name nicht gefunden werden*/
/*Aufgabe 3 B-  Sahra Kauz hat sich den Code angeschaut und die Fehler gefunden*/
/*let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void{
    y = "Bla";
    console.log(y);
}

function func2(): void{
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void{
    x = "Test";
}*/
/* Aufgabe 4 A- Zu aller wird durch Zeile 52 "Hallo" ausgegeben , danach wird "Bla" augegeben, da wir durch Zeile 53 in Zeile 61 kommen und y ausgegeben wird also kommt Bla rauß.
Danach wird wieder "Hallo" ausgegeben, da in Zeile 54 dasselebe wie in Zeile 52 steht. Durch Zeile 55 kommen wir in Zeile 66, in welcher das "Blubb" ausgegebn wird
da in Zeile 65 x als "Blubb" deklariert wurde und danach console.log(x) kommt.
Zum Schluss erscheint "Test", da wir durch Zeile 56 in Zeile 70 kommen und durch Zeile 57 wird dann dass mit x deklarierte "Test" ausgegeben.*/
/*Aufgabe 4- B Lokale Variablen – diese existieren nur lokal, etwa innerhalb einer Methode oder einer Block-Anweisung.
Gloable Variablen allerdings sind überall in der Klasse sichtbar:
In jeder Methode, sowie im Konstruktor. Sie "sterben" auch erst,
wenn das Objekt zerstört wird. Solange das Objekt aber "lebt" gibt es diese
Variable, und ihr Wert bleibt auch solange gleich bis er geändert wird.
Und ist ansonsten immer und überall der selbe, egal wie oft man
irgendwas mit dem Objekt tut.
Übergabeparametern: Gibt an, was eine Funktion nach einem Durchlauf weitergibt z.B. void: Die Funktion übergibt keinen Parameter.
Eine Funktion kann aus mehrern Unterschieliche  Variabken und datentypen bestehen sie ähneln sich insofern, dass beide mit einen Variablennamen benannt werden können
und durch diesen aufgerufen werden können.
normale Variablen können nur mit bestimmtern datentypen deklariert werden , zb String mit BUchstaben*/
/* Aufgabe 5 - A */
/*let c: number = multiply(5, 8);

function multiply(_a: number, _b: number): number{
    let result: number = _a * _b;
    return result;
  }
console.log(c); */
/*Aufgabe 5 B
let f: number = max(10, 20);
function max(_a: number, _b: number): number{
    if (_a > _b)
    return _a;
    else
    return _b;
}
console.log(f);
*/
/* Aufgabe 5-C*/
/*var x = 0, i = 1;
while (i <= 100) {
   x = x + i;
   i = i + 1;
}

console.log(x);
*/
/* Aufgabe 5 D -

for (let i: number = 0; i < 10; i++) {
    let min: number = 1;
    let max: number = 100;
    min = Math.ceil(min);
    max = Math.floor(max);
    let r: number = Math.floor(Math.random() * (max - min)) + min;
    console.log(r);
} */
/*Aufgabe 5-E*/
/*console.log(factrorial(10));
function factrorial(n: number): number {
    let fuc: number = 1;
    for (let i: number = 1; i <= n; i++) {
        fuc = fuc * i;
    }
    return fuc;
}
*/
/*Aufgabe 5 -F
leapyears();
function leapyears(): void {
    let date: Date = new Date();
    let current: number = date.getFullYear();
    for (let i: number = 1900; i <= current; i++) {
        if ((i % 4) == 0 && (i % 100) != 0) {
            console.log(i);
        } else if ((i % 400) == 0) {
            console.log(i);
        }
    }
}*/
/*Aufgabe 6-A
for (var hash = "#"; hash.length <= 7 ; hash += "#"){
    console.log(hash);
    
  } */
/* Aufgabe 6 b und c
  function fizzBuzz(num){
    
    if (num % 5 == 0 && num % 3 == 0) return "fizzbuzz";
    if (num % 5 == 0) return "fizz";
    if (num % 3 == 0) return "buzz";
    return num;
    }
     
    for (var i = 1; i <= 100; i++) console.log(fizzBuzz(i)); */
/*
6 d)*/
/*
let size: number = 8;
let output: string = "";
for (let zeile: number = 0; zeile < size; zeile++) {
    for (let spalte: number = 0; spalte < size; spalte++) {
        if ((zeile + spalte) % 2) {
            output = output + " ";
        } else {
            output = output + "#";
        }
    }
    output += "\n";
}


*/
/*
6 e)
*/
/*
output = "";
schachbrettmod(8, 8);

function schachbrettmod(sizeZ: number, sizeS: number): void {
    for (let zeile: number = 0; zeile < sizeZ; zeile++) {
        for (let spalte: number = 0; spalte < sizeS; spalte++) {
            if ((zeile + spalte) % 2) {
                output = output + " ";
            } else {
                output = output + "#";
            }
        }
        output += "\n";
    }
    console.log(output);
}
*/ 
//# sourceMappingURL=script.js.map