"use strict";
var A2_4;
(function (A2_4) {
    A2_4.posibilityTop = [];
    A2_4.posibilityMiddle = [];
    A2_4.posibilityBottom = [];
    //Beyonce 1
    let pic1Top = new A2_4.Posibility("Beyonce1 - Top", 0, "images/top/beyonce1_top.png");
    let pic1Middle = new A2_4.Posibility("Beyonce1 - Middle", 1, "images/middle/beyonce1_middle.png");
    let pic1Bottom = new A2_4.Posibility("Beyonce1 - Bottom", 2, "images/bottom/beyonce1_bottom.png");
    //Beyonce 2
    let pic2Top = new A2_4.Posibility("Beyonce2 - Top", 0, "images/top/beyonce2_top.png");
    let pic2Middle = new A2_4.Posibility("Beyonce2 - Middle", 1, "images/middle/beyonce2_middle.png");
    let pic2Bottom = new A2_4.Posibility("Beyonce2 - Bottom", 2, "images/bottom/beyonce2_bottom.png");
    //Beyonce 3
    let pic3Top = new A2_4.Posibility("Beyonce3 - Top", 0, "images/top/beyonce3_top.png");
    let pic3Middle = new A2_4.Posibility("Beyonce3 - Middle", 1, "images/middle/beyonce3_middle.png");
    let pic3Bottom = new A2_4.Posibility("Beyonce3 - Bottom", 2, "images/bottom/beyonce3_bottom.png");
    allPosArrayFromJSON(allPosArrayToJSON());
    function allPosArrayToJSON() {
        let allPosArray = { top: A2_4.posibilityTop, middle: A2_4.posibilityMiddle, bottom: A2_4.posibilityBottom };
        let json = JSON.stringify(allPosArray);
        console.log(json);
        return json;
    }
    A2_4.allPosArrayToJSON = allPosArrayToJSON;
    function allPosArrayFromJSON(jsonStr) {
        A2_4.posibilityTop = [];
        A2_4.posibilityMiddle = [];
        A2_4.posibilityBottom = [];
        let json = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top" || key == "middle" || key == "bottom") {
                let posInterf = json[key];
                posInterf.forEach(pos => {
                    new A2_4.Posibility(pos.name, pos.type, pos.link);
                });
            }
        });
    }
    A2_4.allPosArrayFromJSON = allPosArrayFromJSON;
})(A2_4 || (A2_4 = {}));
//# sourceMappingURL=data.js.map