"use strict";
let formData = new FormData(document.forms[0]);
async function sendData() {
    let url = "https://lidiakifle.herokuapp.com/";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    let answer = await fetch(url);
    console.log("Response: ", answer);
    let back = await answer.text();
    console.log(back);
    document.getElementById("solution").innerHTML = back;
}
//document.getElementsByTagName("button")[0].addEventListener("click", sendData);
//# sourceMappingURL=script.js.map