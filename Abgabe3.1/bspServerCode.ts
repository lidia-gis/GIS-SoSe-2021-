import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server"); // "Starting Server " in der Konsolenausgabe 
    let port: number = Number(process.env.PORT); //der aktuell vorhandene Port wird verwendet 
    if (!port)
        port = 8100;             // wenn kein Port gefunden wird, wird der Wert 8100 dafüpr eingesetzt 

    let server: Http.Server = Http.createServer();  //Hier durch wird ein neuer Server erstellt 
    server.addListener("request", handleRequest);  //ein listener wird aufgehängt wodurch die Funktion handleRequest aufgerufen wird
    server.addListener("listening", handleListen); //Hier passiert das gleiche wie eine Zeile drüber, jedoch wird handleListen aufgerufen
    server.listen(port);   //Server reagiert auf den definierten Port 

    function handleListen(): void {    
        console.log("Listening");   //Listening in der Konsolenausgabe 
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");      //Im terminal wird I hear voices ausgegeben 
        _response.setHeader("content-type", "text/html; charset=utf-8");   //Eigenschaften werden mit setHeader festgelegt 
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugangsberechtigung 
        _response.write(_request.url);   //In die Response wird die URL von Request geschrieben 
        _response.end(); //Response wird beenedet 
    }
}