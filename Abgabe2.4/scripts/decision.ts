namespace A2_4 {
    let selected: Posibility;
    let htmlImgs: HTMLImageElement[] = [];
    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);

    let imageTop: HTMLImageElement = <HTMLImageElement>document.getElementById("imgTop");
    let imageMiddle: HTMLImageElement = <HTMLImageElement>document.getElementById("imgMiddle");
    let imageBottom: HTMLImageElement = <HTMLImageElement>document.getElementById("imgBottom");

    let btSpeichern: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btSpeichern");
    btSpeichern.addEventListener("click", speichernSelection);
    let btAbbruch: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btAbbruch");

    window.addEventListener("load", loadContent);

    function loadContent(): void {
        let json: string = sessionStorage.getItem(keyConfig);
        if (json != null) {
            selectedFromJSON(json);
        }
        loadImages();
        if (path == "top.html") {
            selected = selectedElements.top;
            addDetailWindow(posibilityTop);
        } else if (path == "middle.html") {
            selected = selectedElements.middle;
            addDetailWindow(posibilityMiddle);
        } else if (path == "bottom.html") {
            selected = selectedElements.bottom;
            addDetailWindow(posibilityBottom);
        }

        if (selectedElements.top == undefined || selectedElements.middle == undefined || selectedElements.bottom == undefined) {
            btSpeichern.textContent = "weiter";
            btAbbruch.textContent = "zurück";
            if (path == "top.html") {
                btAbbruch.disabled = true;
            }
            btAbbruch.addEventListener("click", zurueck);
        } else {
            btSpeichern.textContent = "Speichern";
            btAbbruch.textContent = "Abbruch";
            btAbbruch.addEventListener("click", abbruch);
        }
    }

    function loadImages(): void {
        if (selectedElements.top != undefined) {
            imageTop.src = selectedElements.top.link;
        }
        if (selectedElements.middle != undefined) {
            imageMiddle.src = selectedElements.middle.link;
        }
        if (selectedElements.bottom != undefined) {
            imageBottom.src = selectedElements.bottom.link;
        }
        console.log(selectedElements);
    }

    function addDetailWindow(images: Posibility[]): void {
        let divToAdd: HTMLImageElement = <HTMLImageElement>document.getElementById("imgDetailSec");
        images.forEach(img => {
            let imgElement: HTMLImageElement = document.createElement("img");
            htmlImgs.push(imgElement);
            imgElement.src = img.link;
            if (img == selected) {
                setSelected(img, imgElement);
            }
            imgElement.addEventListener("click", function(): void {
                setSelected(img, imgElement);
            });
            divToAdd.appendChild(imgElement);
        });
    }
    function setSelected(img: Posibility, imgElement: HTMLImageElement): void {
        selected = img;
        imgElement.className += " selectedImage";
        console.log("selected: " + img.name);
        htmlImgs.forEach(htmlImgs => {
            if (htmlImgs != imgElement) {
                htmlImgs.classList.remove("selectedImage");
            }
        });
    }


    function speichernSelection(): void {
        if (path == "top.html") {
            selectedElements.top = selected;
        } else if (path == "middle.html") {
            selectedElements.middle = selected;
        } else if (path == "bottom.html") {
            selectedElements.bottom = selected;
        }
        selectedToJSON();
        window.open("index.html", "_self");
        console.log("selected:" + selected.name);
    }

    function abbruch(): void {
        window.open("index.html", "_self");
        console.log("abbruch");
    }

    function zurueck(): void {
        let pathToOpen: string;
        if (path == "middle.html") {
            pathToOpen = "top.html";
        } else if (path == "bottom.html") {
            pathToOpen = "middle.html";
        }
        window.open(pathToOpen, "_self");
    }
}