let formData: FormData = new FormData(document.forms[0]);
async function sendData(): Promise<void> {
    let url: string = "https://lidiakifle.herokuapp.com/";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    let answer: Response = await fetch(url);
    console.log("Response: ", answer);
    let back: string = await answer.text();
    console.log(back);
    document.getElementById("solution").innerHTML = back;
}


//document.getElementsByTagName("button")[0].addEventListener("click", sendData);

