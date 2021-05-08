"use strict";
var A2_3;
(function (A2_3) {
    class Posibility {
        constructor(_name, _type, _link) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
            if (this.type == 0) {
                A2_3.posibilityTop.push(this);
            }
            else if (this.type == 1) {
                A2_3.posibilityMiddle.push(this);
            }
            else if (this.type == 2) {
                A2_3.posibilityBottom.push(this);
            }
        }
    }
    A2_3.Posibility = Posibility;
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "") {
        let imageTop = document.getElementById("imgTop");
        let imageMiddle = document.getElementById("imgMiddle");
        let imageBottom = document.getElementById("imgBottom");
        window.addEventListener("load", loadImages);
        function loadImages() {
            imageTop.src = A2_3.selectedElements.top.link;
            imageMiddle.src = A2_3.selectedElements.middle.link;
            imageBottom.src = A2_3.selectedElements.bottom.link;
            console.log(A2_3.selectedElements);
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
})(A2_3 || (A2_3 = {}));
//# sourceMappingURL=script.js.map