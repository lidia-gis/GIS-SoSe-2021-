"use strict";
var A2_5;
(function (A2_5) {
    let selected;
    let htmlImgs = [];
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    let imageTop = document.getElementById("imgTop");
    let imageMiddle = document.getElementById("imgMiddle");
    let imageBottom = document.getElementById("imgBottom");
    let btSpeichern = document.getElementById("btSpeichern");
    btSpeichern.addEventListener("click", speichernSelection);
    let btAbbruch = document.getElementById("btAbbruch");
    window.addEventListener("load", loadContent);
    async function loadContent() {
        await A2_5.getPossibilitysFromURL("data.json");
        let json = sessionStorage.getItem(A2_5.keyConfig);
        if (json != null) {
            A2_5.selectedFromJSON(json);
        }
        loadImages();
        if (path == "top.html") {
            selected = A2_5.selectedElements.top;
            addDetailWindow(A2_5.posibilityTop);
        }
        else if (path == "middle.html") {
            selected = A2_5.selectedElements.middle;
            addDetailWindow(A2_5.posibilityMiddle);
        }
        else if (path == "bottom.html") {
            selected = A2_5.selectedElements.bottom;
            addDetailWindow(A2_5.posibilityBottom);
        }
        if (A2_5.selectedElements.top == undefined || A2_5.selectedElements.middle == undefined || A2_5.selectedElements.bottom == undefined) {
            btSpeichern.textContent = "weiter";
            btAbbruch.textContent = "zurück";
            if (path == "top.html") {
                btAbbruch.disabled = true;
            }
            btAbbruch.addEventListener("click", zurueck);
        }
        else {
            btSpeichern.textContent = "Speichern";
            btAbbruch.textContent = "Abbruch";
            btAbbruch.addEventListener("click", abbruch);
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
        console.log(A2_5.selectedElements);
    }
    function addDetailWindow(_images) {
        let divToAdd = document.getElementById("imgDetailSec");
        _images.forEach(img => {
            let imgElement = document.createElement("img");
            htmlImgs.push(imgElement);
            imgElement.src = img.link;
            if (img == selected) {
                setSelected(img, imgElement);
            }
            imgElement.addEventListener("click", function () {
                setSelected(img, imgElement);
            });
            divToAdd.appendChild(imgElement);
        });
    }
    function setSelected(_img, _imgElement) {
        selected = _img;
        _imgElement.className += " selectedImage";
        console.log("selected: " + _img.name);
        htmlImgs.forEach(htmlImgs => {
            if (htmlImgs != _imgElement) {
                htmlImgs.classList.remove("selectedImage");
            }
        });
    }
    function speichernSelection() {
        if (path == "top.html") {
            A2_5.selectedElements.top = selected;
        }
        else if (path == "middle.html") {
            A2_5.selectedElements.middle = selected;
        }
        else if (path == "bottom.html") {
            A2_5.selectedElements.bottom = selected;
        }
        A2_5.selectedToJSON();
        window.open("index.html", "_self");
        console.log("selected:" + selected.name);
    }
    function abbruch() {
        window.open("index.html", "_self");
        console.log("abbruch");
    }
    function zurueck() {
        let pathToOpen;
        if (path == "middle.html") {
            pathToOpen = "top.html";
        }
        else if (path == "bottom.html") {
            pathToOpen = "middle.html";
        }
        window.open(pathToOpen, "_self");
    }
})(A2_5 || (A2_5 = {}));
//# sourceMappingURL=decision.js.map