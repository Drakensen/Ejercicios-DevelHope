import { createServer, request } from "node:http";

const server = createServer ((request, response) => {
    console.log("Request received from Mars :o")

    response.statusCode = 200

    response.setHeader("Content-Type", "application/json")

    const jsonResponseBody = JSON.stringify ({ location: "Mars"})

    response.end(jsonResponseBody)
})

server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000"`);
});

/*
StatusCode        : 200
StatusDescription : OK
Content           : {"location":"Mars"}
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 19
                    Content-Type: application/json
{"location":"Mars"}
Forms             : {}
Headers           : {[Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 19], [Content-Type, application/json]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 19
 */