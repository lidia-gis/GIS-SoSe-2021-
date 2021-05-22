"use strict";
var A2_5;
(function (A2_5) {
    A2_5.keyConfig = "ConfigJson";
    A2_5.selectedElements = { top: undefined, middle: undefined, bottom: undefined };
    class Posibility {
        constructor(_name, _type, _link) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
        }
        removeSameFromArray(_posArray, name) {
            _posArray.forEach((element, i) => {
                if (element.name == name) {
                    _posArray.splice(i, 1);
                }
            });
        }
        getInterface() {
            return { name: this.name, type: this.type, link: this.link };
        }
    }
    A2_5.Posibility = Posibility;
    function selectedToJSON() {
        let json;
        json = JSON.stringify(A2_5.selectedElements);
        sessionStorage.setItem(A2_5.keyConfig, json);
    }
    A2_5.selectedToJSON = selectedToJSON;
    function selectedFromJSON(_jsonStr) {
        let json = JSON.parse(_jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top") {
                let pos = json[key];
                let topPos = new Posibility(pos.name, pos.type, pos.link);
                A2_5.selectedElements.top = topPos;
            }
            else if (key == "middle") {
                let pos = json[key];
                let middlePos = new Posibility(pos.name, pos.type, pos.link);
                A2_5.selectedElements.middle = middlePos;
            }
            else if (key == "bottom") {
                let pos = json[key];
                let bottomPos = new Posibility(pos.name, pos.type, pos.link);
                A2_5.selectedElements.bottom = bottomPos;
            }
        });
    }
    A2_5.selectedFromJSON = selectedFromJSON;
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "") {
        window.addEventListener("load", finishedLoading);
        function finishedLoading() {
            let json = sessionStorage.getItem(A2_5.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                if (A2_5.selectedElements.top == undefined) {
                    window.open("top.html", "_self");
                }
                else if (A2_5.selectedElements.middle == undefined) {
                    window.open("middle.html", "_self");
                }
                else if (A2_5.selectedElements.bottom == undefined) {
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
            let json = sessionStorage.getItem(A2_5.keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                loadImages();
                sendCacheToServer("https://gis-communication.herokuapp.com/");
            }
            else {
                console.log("Keine Selektion");
                loadImages();
            }
        }
        function loadImages() {
            if (A2_5.selectedElements.top != undefined) {
                imageTop.src = A2_5.selectedElements.top.link;
            }
            if (A2_5.selectedElements.middle != undefined) {
                imageMiddle.src = A2_5.selectedElements.middle.link;
            }
            if (A2_5.selectedElements.bottom != undefined) {
                imageBottom.src = A2_5.selectedElements.bottom.link;
            }
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
        async function sendCacheToServer(_url) {
            let browsCacheData = JSON.parse(sessionStorage.getItem(A2_5.keyConfig));
            console.log("Sende gespeicherte Elemente zum Server: ");
            console.log(browsCacheData);
            let query = new URLSearchParams(browsCacheData);
            _url = _url + "?" + query.toString();
            let resp = await fetch(_url);
            let text = await resp.json();
            showServerAnswer(text);
        }
        function showServerAnswer(_answer) {
            let statusField = document.getElementById("servAusgabe");
            if (_answer.message != undefined) {
                statusField.textContent = "Service-Antwort: " + _answer.message;
                statusField.style.color = "green";
            }
            else if (_answer.error != undefined) {
                statusField.textContent = "Service-Antwort: " + _answer.error;
                statusField.style.color = "red";
            }
        }
    }
})(A2_5 || (A2_5 = {}));
//# sourceMappingURL=script.js.map