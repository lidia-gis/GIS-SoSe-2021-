namespace A2_3 {
    export class Posibility {
        name: string;
        type: number;
        link: string;

        constructor(_name: string, _type: number, _link: string) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
            if (this.type == 0) {
                posibilityTop.push(this);
            } else if (this.type == 1) {
                posibilityMiddle.push(this);
            } else if (this.type == 2) {
                posibilityBottom.push(this);
            }

        }
    }

    export interface Selected {
        top: Posibility;
        middle: Posibility;
        bottom: Posibility;
    }

    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "" ) {
        let imageTop: HTMLImageElement = <HTMLImageElement>document.getElementById("imgTop");
        let imageMiddle: HTMLImageElement = <HTMLImageElement>document.getElementById("imgMiddle");
        let imageBottom: HTMLImageElement = <HTMLImageElement>document.getElementById("imgBottom");

        window.addEventListener("load", loadImages);

        function loadImages(): void {
            imageTop.src = selectedElements.top.link;
            imageMiddle.src = selectedElements.middle.link;
            imageBottom.src = selectedElements.bottom.link;
            console.log(selectedElements);
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
    }

}