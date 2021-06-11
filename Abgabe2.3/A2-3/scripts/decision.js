"use strict";
var A2_3;
(function (A2_3) {
    let selected;
    let htmlImgs = [];
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    window.addEventListener("load", loadContent);
    function loadContent() {
        if (path == "top.html") {
            selected = selectedElements.top;
            addDetailWindow(posibilityTop);
        }
        else if (path == "middle.html") {
            addDetailWindow(posibilityMiddle);
        }
        else if (path == "bottom.html") {
            selected = selectedElements.bottom;
            addDetailWindow(posibilityBottom);
        }
    }
    function addDetailWindow(images) {
        let divToAdd = document.getElementById("imgDetailSec");
        images.forEach(img => {
            let imgElement = document.createElement("img");
            htmlImgs.push(imgElement);
            imgElement.className += "detailImg";
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
    let btSpeichern = document.getElementById("btSpeichern");
    btSpeichern.addEventListener("click", speichernSelection);
    let btAbbruch = document.getElementById("btAbbruch");
    btAbbruch.addEventListener("click", abbruchSelection);
    function speichernSelection() {
        if (path == "top.html") {
            selectedElements.top = selected;
        }
        else if (path == "middle.html") {
            selectedElements.middle = selected;
        }
        else if (path == "bottom.html") {
            selectedElements.bottom = selected;
        }
        window.open("index.html", "_self");
        console.log("selected " + selected.name);
    }
    function abbruchSelection() {
        window.open("index.html", "_self");
        console.log("abbruch");
    }
})(A2_3 || (A2_3 = {}));
//# sourceMappingURL=decision.js.map