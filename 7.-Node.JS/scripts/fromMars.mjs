import { createServer, request } from "node:http";

const server = createServer ((request, response) => {
    console.log("Request received from Mars :o")

    response.statusCode = 200

    response.setHeader("Content-Type", "application/json")

    const jsonResponseBody = JSON.stringify ({ location: "Mars" })

    response.end(jsonResponseBody)
})

server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000"`);
});

// ContentLength: 19