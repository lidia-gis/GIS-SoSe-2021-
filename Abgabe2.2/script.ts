/*Abgabe 2 - Nummer 1 A */

console.log("Kleinste Zahl ist: " + min(0, 20, 130, -10, 5));

function min(...nummer: number[]): number {
    let minimum: number = nummer[0]; 
    for (let i: number = 0; i < nummer.length; i++) {
        const sNr: number = nummer[i]; 
        if (sNr < minimum) {
            minimum = sNr;
        }
    }
    return minimum;
}
/*Nummer 1 B */ 

console.log("50 ist " + isEven(50));
console.log("75 ist " + isEven(75));
console.log("-1 ist " + isEven(-1));

function isEven(nr: number): boolean {
       
    if (nr < 0) {
        nr = 0 - nr;     /* Durch das Minus hier wird die Zahl -1 zu +1 also kann hier keine negative Zahl entstehen*/

    }

    if (nr == 0) {       /* durch das 2mal = wird klar dass hier keine Zuweisung vorliegt */
        return true; 
    } else if (nr == 1) {
        return false;  
    } else {
        return isEven(nr - 2);   
    }
    
}
/*Aufgabe 1 C 1-4*/
/*
let sAnna: Student = {Vorname: "Anna", Name: "Müller", Studiengang:  "MKB",  Matrikelnummer: 1234};
let sSara: Student = {Vorname: "Sara", Name: "Maier",  Studiengang:  "OMB",  Matrikelnummer: 5678};
let sTim:  Student = {Vorname: "Tim",  Name: "Max",    Studiengang:  "MIB",  Matrikelnummer: 91011}; 

let sArray: Student[] = [sAnna, sSara, sTim];
sArray.push({Vorname: "Tom", Name: "Maus",Studiengang: "OMB", Matrikelnummer: 11111}); 
console.log( sAnna.Vorname + " studiert " + sAnna.Studiengang + " im 2. Semester ");

interface Student {
    Vorname: string;
    Name: String;
    Studiengang: String;
    Matrikelnummer: number;
    
}
for (const studi of sArray) {
    showInfo(studi);
}

function showInfo(s: Student): void {

    console.log("Vorname: " +         s.Vorname + " ");
    console.log("Studiengang " +      s.Studiengang + " ");
    console.log("Matrikelnummer: " +  s.Matrikelnummer + " ");


}
*/ 

/*Aufgabe 1 C 5. */

class Student {
    sVorname: String;
    sName: String;
    sStudiengang: String;
    sMatrikelnummer: number;

    constructor(_sVorname: String, _sNachname: String, _sStudiengang: String, _sMatrikelnummer: number){
        this.sVorname = _sVorname;
        this.sName = _sNachname;
        this.sStudiengang = _sStudiengang;
        this.sMatrikelnummer = _sMatrikelnummer;
    }

    showInfo(): void {
        console.log("vollständiger Name: " + this.sVorname + " " + this.sName);
        console.log("Der Studiengang: " + this.sStudiengang);
        console.log("Matrikelnummer: " + this.sMatrikelnummer);
    }
 
}
let sAnna: Student = new Student("Anna", "Müller", "MKB", 1234);
sAnna.showInfo();

/*Aufgabe 2 a. */

function backwards(array: number[]): number[] {
    let backwardArray: number[] = [];
    for (let i: number = array.length - 1; i >= 0; i--) {
        backwardArray [i] = array[array.length - i - 1];
    }    
    return backwardArray;
}

/*Aufgabe 2 B */

function join(...arrays: number[][]): number[] {
    let backArray: number[] = [];
    let vorArray: number = 0;
    arrays.forEach(array => {
        for (let i: number = 0; i < array.length; i++) {
            backArray[vorArray] = array[i];
            vorArray++;  
        }
    });
    return backArray;   
}

/*Aufgabe 2 C */ 

function split(array: number[], number1: number, number2: number): number[] {
    if (number1 < 0 || number2 < 0) {
        return undefined;
    } else if (number2 < number1) {
        let temp: number = number1;
        number1 = number2;
        number2 = temp;
    } else if (number2 > array.length) {
        return undefined;
    }
    let backArray: number[] = [];
    let index: number = 0;
    for (let i: number = number1; i <= number2; i++) {
        backArray[index] = array[i];
        i++;
    }
    return backArray;
}
/*Aufgabe Test */
let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440] ));
console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024] )); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
console.log(split(arr, 2, 0));     // Bonus c)
console.log(split(arr, -1, 2));    // Bonus c)
console.log(split(arr, 0, 7));     // Bonus c)

/*Aufgabe 3 a */ 

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

// Himmel
context.fillStyle = "lightblue";
context.fillRect(0, 0, 800, 600);

// Grass
context.fillStyle = "#458B00";
context.fillRect(0, 300, 800, 200);

// Wolke
context.beginPath();
context.moveTo(170, 80);
context.bezierCurveTo(130, 100, 130, 150, 230, 150);
context.bezierCurveTo(250, 180, 320, 180, 340, 150);
context.bezierCurveTo(420, 150, 420, 120, 390, 100);
context.bezierCurveTo(430, 40, 370, 30, 340, 50);
context.bezierCurveTo(320, 5, 250, 20, 250, 50);
context.bezierCurveTo(200, 5, 150, 20, 170, 80);
context.fillStyle = "white";
context.fill();
context.closePath();

// Baum
context.fillStyle = "#8B5A2B";
context.fillRect(175, 100, 50, 300);
context.beginPath();
context.fillStyle = "darkgreen";
context.arc(200, 150, 75, 0, 2 * Math.PI, false);
context.fill();
context.closePath();

// Haus
context.fillStyle = "violet";
context.fillRect(500, 250, 200, 200);
context.beginPath();
context.fillStyle = "beige";
context.moveTo(470, 250);
context.lineTo(730, 250);
context.lineTo(600, 50);
context.fill();
context.closePath();

/*Aufgabe 3 B & C */ 
class Rechteck {
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    maxWidth: number = 750;
    maxHeight: number = 450;

    constructor() {
        this.x1 = this.getRandomInt(0, this.maxWidth);
        this.x2 = this.getRandomInt(this.x1, this.maxWidth);
        this.y1 = this.getRandomInt(0, this.maxHeight);
        this.y2 = this.getRandomInt(this.y1, this.maxHeight);
    }

    getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

/*Aufgabe 3 D & C */ 
    drawRect(): void {
        context.beginPath();
        context.fillStyle = "grey";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y1);
        context.lineTo(this.x2, this.y2);
        context.lineTo(this.x1, this.y2);
        context.closePath();
        context.stroke();
        context.fill();
        context.closePath();
    }
}

let rechtArray: Rechteck [] = [new Rechteck(), new Rechteck(), new Rechteck()];
for (const recht of rechtArray) {
    recht.drawRect();
}