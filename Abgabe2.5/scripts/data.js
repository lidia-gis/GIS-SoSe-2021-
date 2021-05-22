"use strict";
var A2_5;
(function (A2_5) {
    A2_5.posibilityTop = [];
    A2_5.posibilityMiddle = [];
    A2_5.posibilityBottom = [];
    function allPosArrayToJSON() {
        let allPosArray = { top: A2_5.posibilityTop, middle: A2_5.posibilityMiddle, bottom: A2_5.posibilityBottom };
        let json = JSON.stringify(allPosArray);
        return json;
    }
    A2_5.allPosArrayToJSON = allPosArrayToJSON;
    function allPosArrayFromJSON(jsonStr) {
        A2_5.posibilityTop = [];
        A2_5.posibilityMiddle = [];
        A2_5.posibilityBottom = [];
        let json = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top" || key == "middle" || key == "bottom") {
                let posInterf = json[key];
                posInterf.forEach(pos => {
                    let posibility = new A2_5.Posibility(pos.name, pos.type, pos.link);
                    if (posibility.type == 0) {
                        posibility.removeSameFromArray(A2_5.posibilityTop, posibility.name);
                        A2_5.posibilityTop.unshift(posibility);
                    }
                    else if (posibility.type == 1) {
                        posibility.removeSameFromArray(A2_5.posibilityMiddle, posibility.name);
                        A2_5.posibilityMiddle.unshift(posibility);
                    }
                    else if (posibility.type == 2) {
                        posibility.removeSameFromArray(A2_5.posibilityBottom, posibility.name);
                        A2_5.posibilityBottom.unshift(posibility);
                    }
                });
            }
        });
    }
    A2_5.allPosArrayFromJSON = allPosArrayFromJSON;
    async function getPossibilitysFromURL(_url) {
        let response = await fetch(_url);
        let json = await response.text();
        allPosArrayFromJSON(json);
    }
    A2_5.getPossibilitysFromURL = getPossibilitysFromURL;
})(A2_5 || (A2_5 = {}));
//# sourceMappingURL=data.js.map