// const http = require('http');
const http = require('http');

const users=[
    { id: 101, name: "John", email: "xyz@gmail.com" },
    { id: 102, name: "Reha", email: "rhea@gmail.com" },
    { id: 103, name: "Alex", email: "alex@gmail.com" },
    { id: 104, name: "Rhys", email: "rhys@gmail.com" }
]

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello, World!</h1>');
        res.end();
    }else if(req.url=="/about" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to About Page</h1>");
        res.end();
    }else if(req.url=="/contact" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to Contact Page</h1>");
        res.end();
    }else if(req.url=="/users" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(users));
        res.end();
    }else if(req.url=="/users" && req.method=="POST"){
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const userData = JSON.parse(body);
            users.push(userData);
            res.writeHead(201, {"Content-Type": "application/json"});
            res.write(JSON.stringify(userData));
            res.end();
        });
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>404 Page Not Found</h1>");
        res.write("Page not found")
    }


});


server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});