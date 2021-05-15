namespace A2_4 {
export let posibilityTop: Posibility[] = [];
export let posibilityMiddle: Posibility[] = [];
export let posibilityBottom: Posibility[] = [];


//Beyonce 1
let pic1Top: Posibility = new Posibility("Beyonce1 - Top", 0, "images/top/beyonce1_top.png");
let pic1Middle: Posibility = new Posibility("Beyonce1 - Middle", 1, "images/middle/beyonce1_middle.png");
let pic1Bottom: Posibility = new Posibility("Beyonce1 - Bottom", 2, "images/bottom/beyonce1_bottom.png");

//Beyonce 2
let pic2Top: Posibility = new Posibility("Beyonce2 - Top", 0, "images/top/beyonce2_top.png");
let pic2Middle: Posibility = new Posibility("Beyonce2 - Middle", 1, "images/middle/beyonce2_middle.png");
let pic2Bottom: Posibility = new Posibility("Beyonce2 - Bottom", 2, "images/bottom/beyonce2_bottom.png");

//Beyonce 3
let pic3Top: Posibility = new Posibility("Beyonce3 - Top", 0, "images/top/beyonce3_top.png");
let pic3Middle: Posibility = new Posibility("Beyonce3 - Middle", 1, "images/middle/beyonce3_middle.png");
let pic3Bottom: Posibility = new Posibility("Beyonce3 - Bottom", 2, "images/bottom/beyonce3_bottom.png");

allPosArrayFromJSON(allPosArrayToJSON());

export function allPosArrayToJSON(): string {
    let allPosArray: AllPosArrayInterface = {top: posibilityTop, middle: posibilityMiddle, bottom: posibilityBottom};
    let json: string = JSON.stringify(allPosArray);
    console.log(json);
    return json;
}

export function allPosArrayFromJSON(jsonStr: string): void {
    posibilityTop = [];
    posibilityMiddle = [];
    posibilityBottom = [];
    let json: AllPosArrayInterface = JSON.parse(jsonStr);
    Object.keys(json).forEach(key => {
        if (key == "top" || key == "middle" || key == "bottom") {
            let posInterf: PosibilityInterface[] = json[key];
            posInterf.forEach(pos => {
                new Posibility(pos.name, pos.type, pos.link);
            });
        }
    });
}

}