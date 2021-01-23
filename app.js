const express = require("express");
const morgan = require("morgan"); //middleware application logger
const nunjucks = require("nunjucks");
const routes = require("./routes");

const app = express(); // crea una instancia de una aplicación de express

// Configurando Nunjucks
app.set("view engine", "html"); // hace que res.render funcione con archivos html
app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure("views"); // apunta a nunjucks al directorio correcto para los templates

//middleware
app.use(morgan("tiny"));
app.use("/", routes);

app.listen(3002, function () {
  console.log("Estas escuhando en el puerto 3000");
});

// app.get("/stylesheets/style.css", function (req, res) {
//   res.sendFile(__dirname + "/stylesheets/style.css");
// });
