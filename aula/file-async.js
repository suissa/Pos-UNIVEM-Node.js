var fs = require("fs");

console.log("Vou ler", Date.now());
console.time("leitura");

fs.readFile("file.zip", function(err, data) {
  console.log(data);
});

console.timeEnd("leitura");
console.log("Ja li", Date.now());