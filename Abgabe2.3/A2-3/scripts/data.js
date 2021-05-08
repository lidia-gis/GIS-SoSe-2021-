"use strict";
var A2_3;
(function (A2_3) {
    A2_3.posibilityTop = [];
    A2_3.posibilityMiddle = [];
    A2_3.posibilityBottom = [];
    let path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
    //Beyonce 1
    let pic1Top = new A2_3.Posibility("Beyonce1 - Top", 0, path + "images/top/beyonce1_top.png");
    let pic1Middle = new A2_3.Posibility("Beyonce1 - Middle", 1, path + "images/middle/beyonce1_middle.png");
    let pic1Bottom = new A2_3.Posibility("Beyonce1 - Bottom", 2, path + "images/bottom/beyonce1_bottom.png");
    A2_3.selectedElements = { top: A2_3.posibilityTop[0], middle: A2_3.posibilityMiddle[0], bottom: A2_3.posibilityBottom[0] };
    //Beyonce 2
    let pic2Top = new A2_3.Posibility("Beyonce2 - Top", 0, path + "images/top/beyonce2_top.png");
    let pic2Middle = new A2_3.Posibility("Beyonce2 - Middle", 1, path + "images/middle/beyonce2_middle.png");
    let pic2Bottom = new A2_3.Posibility("Beyonce2 - Bottom", 2, path + "images/bottom/beyonce2_bottom.png");
    //Beyonce 3
    let pic3Top = new A2_3.Posibility("Beyonce3 - Top", 0, path + "images/top/beyonce3_top.png");
    let pic3Middle = new A2_3.Posibility("Beyonce3 - Middle", 1, path + "images/middle/beyonce3_middle.png");
    let pic3Bottom = new A2_3.Posibility("Beyonce3 - Bottom", 2, path + "images/bottom/beyonce3_bottom.png");
})(A2_3 || (A2_3 = {}));
//# sourceMappingURL=data.js.map