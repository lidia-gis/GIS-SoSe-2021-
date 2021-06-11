"use strict";
var A2_4;
(function (A2_4) {
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
    function loadContent() {
        let json = sessionStorage.getItem(A2_4.keyConfig);
        if (json != null) {
            A2_4.selectedFromJSON(json);
        }
        loadImages();
        if (path == "top.html") {
            selected = A2_4.selectedElements.top;
            addDetailWindow(posibilityTop);
        }
        else if (path == "middle.html") {
            selected = A2_4.selectedElements.middle;
            addDetailWindow(posibilityMiddle);
        }
        else if (path == "bottom.html") {
            selected = A2_4.selectedElements.bottom;
            addDetailWindow(posibilityBottom);
        }
        if (A2_4.selectedElements.top == undefined || A2_4.selectedElements.middle == undefined || A2_4.selectedElements.bottom == undefined) {
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
    function addDetailWindow(images) {
        let divToAdd = document.getElementById("imgDetailSec");
        images.forEach(img => {
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
    function setSelected(img, imgElement) {
        selected = img;
        imgElement.className += " selectedImage";
        console.log("selected: " + img.name);
        htmlImgs.forEach(htmlImgs => {
            if (htmlImgs != imgElement) {
                htmlImgs.classList.remove("selectedImage");
            }
        });
    }
    function speichernSelection() {
        if (path == "top.html") {
            A2_4.selectedElements.top = selected;
        }
        else if (path == "middle.html") {
            A2_4.selectedElements.middle = selected;
        }
        else if (path == "bottom.html") {
            A2_4.selectedElements.bottom = selected;
        }
        A2_4.selectedToJSON();
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
})(A2_4 || (A2_4 = {}));
//# sourceMappingURL=decision.js.map