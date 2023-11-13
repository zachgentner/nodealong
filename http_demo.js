const http = require("http");

http.createServer((req, res) => {
    // Write response
    res.write("Hello World");
    res.end();
}).listen(4500, () => console.log("Server running..."));
