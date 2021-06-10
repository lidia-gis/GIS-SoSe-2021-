"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let btSendJSON = document.getElementById("sendJSON");
    btSendJSON.addEventListener("click", sendData);
    let btSendHTML = document.getElementById("sendHTML");
    btSendHTML.addEventListener("click", sendHTML);
    // let urlServer: string = "http://localhost:8100";
    async function sendData() {
        let urlServer = "https://lidiakifle.herokuapp.com/";
        let formData = new FormData(document.forms[0]);
        let url = urlServer + "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let answer = await fetch(url);
        console.log("Response: ", answer);
        let json = await answer.json();
        /*console.log(json);*/
    }
    async function sendHTML(_ev) {
        _ev.preventDefault();
        let urlServer = "https://lidiakifle.herokuapp.com/";
        let formData = new FormData(document.forms[0]);
        let url = urlServer + "/html";
        let query = new URLSearchParams(formData);
        query.append("type", "html");
        url = url + "?" + query.toString();
        let answer = await fetch(url);
        let answerText = await answer.text();
        let body = document.querySelector("body");
        let result = document.getElementById("solution");
        result.innerHTML = answerText;
        body.appendChild(result);
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map