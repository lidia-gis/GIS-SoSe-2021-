"use strict";
var A2_4;
(function (A2_4) {
    A2_4.keyConfig = "ConfigJson";
    A2_4.selectedElements = { top: undefined, middle: undefined, bottom: undefined };
    class Posibility {
        constructor(_name, _type, _link) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
            if (this.type == 0) {
                this.removeSameFromArray(A2_4.posibilityTop, this.name);
                A2_4.posibilityTop.unshift(this);
            }
            else if (this.type == 1) {
                this.removeSameFromArray(A2_4.posibilityMiddle, this.name);
                A2_4.posibilityMiddle.unshift(this);
            }
            else if (this.type == 2) {
                this.removeSameFromArray(A2_4.posibilityBottom, this.name);
                A2_4.posibilityBottom.push(this);
            }
        }
        removeSameFromArray(posArray, name) {
            posArray.forEach((element, i) => {
                if (element.name == name) {
                    posArray.splice(i, 1);
                }
            });
        }
        getInterface() {
            return { name: this.name, type: this.type, link: this.link };
        }
    }
    A2_4.Posibility = Posibility;
    function selectedToJSON() {
        let json;
        json = JSON.stringify(A2_4.selectedElements);
        console.log(json);
        sessionStorage.setItem(A2_4.keyConfig, json);
    }
    A2_4.selectedToJSON = selectedToJSON;
    function selectedFromJSON(jsonStr) {
        let json = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top") {
                let pos = json[key];
                let topPos = new Posibility(pos.name, pos.type, pos.link);
                A2_4.selectedElements.top = topPos;
            }
            else if (key == "middle") {
                let pos = json[key];
                let middlePos = new Posibility(pos.name, pos.type, pos.link);
                A2_4.selectedElements.middle = middlePos;
            }
            else if (key == "bottom") {
                let pos = json[key];
                let bottomPos = new Posibility(pos.name, pos.type, pos.link);
                A2_4.selectedElements.bottom = bottomPos;
            }
        });
    }
    A2_4.selectedFromJSON = selectedFromJSON;
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "") {
        window.addEventListener("load", finishedLoading);
        function finishedLoading() {
            let json = sessionStorage.getItem(A2_4.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                if (A2_4.selectedElements.top == undefined) {
                    window.open("top.html", "_self");
                }
                else if (A2_4.selectedElements.middle == undefined) {
                    window.open("middle.html", "_self");
                }
                else if (A2_4.selectedElements.bottom == undefined) {
                    window.open("bottom.html", "_self");
                }
                else {
                    window.open("resultat.html", "_self");
                }
            }
            else {
                console.log("Keine Selektion");
                window.open("top.html", "_self");
            }
        }
    }
    else if (path == "resultat.html") {
        let imageTop = document.getElementById("imgTop");
        let imageMiddle = document.getElementById("imgMiddle");
        let imageBottom = document.getElementById("imgBottom");
        window.addEventListener("load", finishedLoading);
        function finishedLoading() {
            let json = sessionStorage.getItem(A2_4.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                loadImages();
            }
            else {
                console.log("Keine Selektion");
                loadImages();
            }
        }
        function loadImages() {
            if (A2_4.selectedElements.top != undefined) {
                imageTop.src = A2_4.selectedElements.top.link;
            }
            if (A2_4.selectedElements.middle != undefined) {
                imageMiddle.src = A2_4.selectedElements.middle.link;
            }
            if (A2_4.selectedElements.bottom != undefined) {
                imageBottom.src = A2_4.selectedElements.bottom.link;
            }
            console.log(A2_4.selectedElements);
        }
        let btEditOben = document.getElementById("btOben");
        btEditOben.addEventListener("click", openDetailTop);
        let btEditMitte = document.getElementById("btMitte");
        btEditMitte.addEventListener("click", openDetailMiddle);
        let btEditUnten = document.getElementById("btUnten");
        btEditUnten.addEventListener("click", openDetailBottom);
        function openDetailTop() {
            window.open("top.html", "_self");
            console.log("Open Detail Top");
        }
        function openDetailMiddle() {
            window.open("middle.html", "_self");
            console.log("Open Detail Middle");
        }
        function openDetailBottom() {
            window.open("bottom.html", "_self");
            console.log("Open Detail Bottom");
        }
    }
})(A2_4 || (A2_4 = {}));
//# sourceMappingURL=script.js.map