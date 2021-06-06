"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server"); // "Starting Server " in der Konsolenausgabe 
    let port = Number(process.env.PORT); //der aktuell vorhandene Port wird verwendet 
    if (!port)
        port = 8100; // wenn kein Port gefunden wird, wird der Wert 8100 dafüpr eingesetzt 
    let server = Http.createServer(); //Hier durch wird ein neuer Server erstellt 
    server.addListener("request", handleRequest); //ein listener wird aufgehängt wodurch die Funktion handleRequest aufgerufen wird
    server.addListener("listening", handleListen); //Hier passiert das gleiche wie eine Zeile drüber, jedoch wird handleListen aufgerufen
    server.listen(port); //Server reagiert auf den definierten Port 
    function handleListen() {
        console.log("Listening"); //Listening in der Konsolenausgabe 
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Im terminal wird I hear voices ausgegeben 
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften werden mit setHeader festgelegt 
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugangsberechtigung 
        _response.write(_request.url); //In die Response wird die URL von Request geschrieben 
        _response.end(); //Response wird beenedet 
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=bspServerCode.js.map