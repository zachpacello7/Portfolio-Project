let express = require("express");
let morgan = require("morgan");
let port = 8080;
let host = "localhost";
let router = require("./routes/mainRouter")

const app = express();
app.set("view engine","ejs");
app.use(express.static("public"))
app.use(morgan("tiny"));

app.use("/",router )
app.listen(port, host, ()=>{
    console.log("Server is running on port "+ port)
})