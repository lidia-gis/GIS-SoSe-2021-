"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_3_2Server = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe_3_2Server;
(function (Aufgabe_3_2Server) {
    console.log("Starting server"); //In der Konsole wird "Starting Server"
    let port = Number(process.env.PORT); // verwendet aktuellen port
    if (!port)
        port = 8100; // wenn kein Port gefunden wird, wird der Wert 8100 dafüpr eingesetzt 
    let server = Http.createServer(); //neuer Server wird erstellt 
    server.addListener("request", handleRequest); //ein listener wird aufgehängt wodurch die Funktion handleRequest aufgerufen wird
    server.addListener("listening", handleListen); //Hier passiert das gleiche wie eine Zeile drüber, jedoch wird handleListen aufgerufen
    server.listen(port); //Server reagiert auf den definierten port 
    function handleListen() {
        console.log("Listening"); // "Listening" wird in der Konsole ausgegeben 
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // "I hear voices" wird ausgegeben
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugangsberechtigung 
        let url = Url.parse(_request.url, true);
        let query = url.query;
        if (url.pathname == "/html") {
            _response.setHeader("content-type", "text/html; charset=utf-8");
            for (let key in query) { //alle keys durchgehen
                let value = query[key]; //verwende für jeden key  den value 
                _response.write("<p>KEY: " + key + ", Value: " + value + "</p>"); //die Verbindung von key und value aufgelistet 
            }
        }
        if (url.pathname == "/json") {
            _response.setHeader("content-type", "application/json");
            _response.write(JSON.stringify(query));
        }
        _response.end();
    }
})(Aufgabe_3_2Server = exports.Aufgabe_3_2Server || (exports.Aufgabe_3_2Server = {}));
//# sourceMappingURL=bspServerCode.js.map