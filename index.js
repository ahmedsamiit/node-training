require("reflect-metadata");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const loginRoutes = require("./routes/login");
const expressHbs = require("express-handlebars");
const errorController = require("./controllers/error");
const { AppDataSource } = require("./data-source");

const app = express();

app.engine("hbs", expressHbs.engine({ 
    extname: ".hbs", 
    defaultLayout: "main",
    helpers: {
        eq: (a, b) => a === b
    }
}));


app.set("view engine", "hbs");
// app.set("view engine", "ejs");
// app.set("view engine", "pug");
app.set("views", "views");


app.use(express.static("public"));


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use("/login", loginRoutes.router);
app.use("/api",loginRoutes.router);
app.use("/admin", adminRoutes);

app.use(errorController.get404);

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => { 
        console.error("Error during Data Source initialization", err);
    });