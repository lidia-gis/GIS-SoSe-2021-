namespace A2_5 {
    export let keyConfig: string = "ConfigJson";
    export let selectedElements: Selected = {top: undefined, middle: undefined, bottom: undefined};
    export class Posibility {
        name: string;
        type: number;
        link: string;

        constructor(_name: string, _type: number, _link: string) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
        }

        removeSameFromArray(_posArray: Posibility[], name: string): void {
            _posArray.forEach((element, i) => {
                if (element.name == name) {
                    _posArray.splice(i, 1);
                }
            });

        }
        getInterface(): PosibilityInterface {
            return { name: this.name, type: this.type, link: this.link };
        }
    }

    export interface PosibilityInterface {
        name: string;
        type: number;
        link: string;
    }

    export interface Selected {
        top: Posibility;
        middle: Posibility;
        bottom: Posibility;
    }

    export interface AllPosArrayInterface {
        top: Posibility[];
        middle: Posibility[];
        bottom: Posibility[];
    }

    export function selectedToJSON(): void {
        let json: string;
        json = JSON.stringify(selectedElements);
        sessionStorage.setItem(keyConfig, json);
    }

    export function selectedFromJSON(_jsonStr: string): void {
        let json: Selected = JSON.parse(_jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "top") {
                let pos: PosibilityInterface = json[key];
                let topPos: Posibility = new Posibility(pos.name, pos.type, pos.link);
                selectedElements.top = topPos;
            } else if (key == "middle") {
                let pos: PosibilityInterface = json[key];
                let middlePos: Posibility = new Posibility(pos.name, pos.type, pos.link);
                selectedElements.middle = middlePos;
            } else if (key == "bottom") {
                let pos: PosibilityInterface = json[key];
                let bottomPos: Posibility = new Posibility(pos.name, pos.type, pos.link);
                selectedElements.bottom = bottomPos;
            } 
        });
    }

    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    
    if (path == "index.html" || path == "" ) {
        window.addEventListener("load", finishedLoading);

        function finishedLoading(): void {
            let json: string = sessionStorage.getItem(keyConfig);
            if (json != null)  {
                selectedFromJSON(json);
                if (selectedElements.top == undefined) {
                    window.open("top.html", "_self");
                } else  if (selectedElements.middle == undefined) {
                    window.open("middle.html", "_self");
                } else if (selectedElements.bottom == undefined) {
                    window.open("bottom.html", "_self"); 
                } else {
                    window.open("resultat.html", "_self");
                }
            } else {
                console.log("Keine Selektion");
                window.open("top.html", "_self");
            }
        }
    } else if (path == "resultat.html") {
        let imageTop: HTMLImageElement = <HTMLImageElement>document.getElementById("imgTop");
        let imageMiddle: HTMLImageElement = <HTMLImageElement>document.getElementById("imgMiddle");
        let imageBottom: HTMLImageElement = <HTMLImageElement>document.getElementById("imgBottom");

        window.addEventListener("load", finishedLoading);

        function finishedLoading(): void {
            let json: string = sessionStorage.getItem(keyConfig);
            if (json != null) {
                selectedFromJSON(json);
                loadImages();
                sendCacheToServer("https://gis-communication.herokuapp.com/");
            } else {
                console.log("Keine Selektion");
                loadImages();
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
        }

        let btEditOben: HTMLImageElement = <HTMLImageElement>document.getElementById("btOben");
        btEditOben.addEventListener("click", openDetailTop);
        let btEditMitte: HTMLImageElement = <HTMLImageElement>document.getElementById("btMitte");
        btEditMitte.addEventListener("click", openDetailMiddle);
        let btEditUnten: HTMLImageElement = <HTMLImageElement>document.getElementById("btUnten");
        btEditUnten.addEventListener("click", openDetailBottom);

        function openDetailTop(): void {
            window.open("top.html", "_self");
            console.log("Open Detail Top");
        }
        function openDetailMiddle(): void {
            window.open("middle.html", "_self");
            console.log("Open Detail Middle");
        }
        function openDetailBottom(): void {
            window.open("bottom.html", "_self");
            console.log("Open Detail Bottom");
        }

        async function sendCacheToServer(_url: string): Promise<void> {
            let browsCacheData: JSON = JSON.parse(sessionStorage.getItem(keyConfig));
            console.log("Sende gespeicherte Elemente zum Server: ");
            console.log(browsCacheData);
            let query: URLSearchParams = new URLSearchParams(<any>browsCacheData);
            _url = _url + "?" + query.toString();
            let resp: Response = await fetch(_url);
            let text: ServerAntwort = await resp.json();
            showServerAnswer(text);
            
        }

        interface ServerAntwort {
            error: string;
            message: string;
        }

        function showServerAnswer(_answer: ServerAntwort): void {
            let statusField: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("servAusgabe");
            if (_answer.message != undefined) {
                statusField.textContent = "Service-Antwort: " + _answer.message;
                statusField.style.color = "green";
            } else if (_answer.error != undefined) {
                statusField.textContent = "Service-Antwort: " + _answer.error;
                statusField.style.color = "red";
            }
        }
    }

}

