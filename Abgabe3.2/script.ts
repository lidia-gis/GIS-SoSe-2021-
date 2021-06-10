namespace Aufgabe3_2 {
    
    let btSendJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendJSON");
    btSendJSON.addEventListener("click", sendData);
    let btSendHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendHTML");
    btSendHTML.addEventListener("click", sendHTML);
    
   // let urlServer: string = "http://localhost:8100";
    async function sendData(): Promise<void> {
        let urlServer: string = "https://lidiakifle.herokuapp.com/";
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = urlServer + "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let answer: Response = await fetch(url);
        console.log("Response: ", answer);
        let json: JSON = await answer.json();
        /*console.log(json);*/
     }

    async function sendHTML(_ev: Event): Promise<void> {
        _ev.preventDefault();
        let urlServer: string = "https://lidiakifle.herokuapp.com/";
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = urlServer + "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        query.append("type", "html");
        url = url + "?" + query.toString();
        let answer: Response = await fetch(url);
        let answerText: string = await answer.text();
        
        
        let body: HTMLBodyElement = document.querySelector("body");
        let result: HTMLParagraphElement = <HTMLDivElement>document.getElementById("solution");
        result.innerHTML = answerText;
        body.appendChild(result);
    }
 }