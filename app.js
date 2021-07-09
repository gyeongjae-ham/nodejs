const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/route", (req, res) => {
  res.send("Hello route, <img src='/git.png'>");
});

app.get("/dynamic", (req, res) => {
  let lis = "";
  for (let i = 0; i < 5; i++) {
    lis = lis + "<li>coding</li>";
  }
  let time = Date();
  const output = `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    Hello, dynamic
    <ul>${lis}</ul>
    ${time}
  </body>
</html>`;
  res.send(output);
});

app.get("/login", (req, res) => {
  res.send("Login please");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
