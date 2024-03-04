import fs from "fs";
import http from "http";
import axios from "axios";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

fs.writeFile("test.txt", "Hello world!", (err) => {
  if (err) throw err;
  console.log("File has been saved");

  fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log({ data });
  });
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello, world!</h1>");
  res.end();
});

server.listen(8000);

// const server = http.createServer((req, res) => {
//   fs.readFile(path.join(__dirname, 'google.html'), (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.end(JSON.stringify(err));
//       return;
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(data);
//   });
// });

// server.listen(8000);

axios
  .get("http://www.google.com")
  .then((response) => {
    fs.writeFile("google.html", response.data, (err) => {
      if (err) throw err;
      console.log("Google file has been saved");
    });
  })
  .catch((error) => {
    console.log(error);
  });
