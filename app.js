//declaration
const express = require('express');
const app = express();
const db = require("./routes/db-config");




app.set("view engine","ejs");
app.set("views","./views");


app.use(express.json());
app.use(express.static(__dirname + '/public'));


//parse url encode features sent from html forms
app.use(express.urlencoded({extended: false}));

//db connection 
db.connect((error) => {
  if(error)
  console.log("error");
  else console.log("database connected succesfully")
})

//define routes
app.get("/",require("./routes/pages"));
app.get("/home",require("./routes/pages"));

app.get("/login",require("./routes/pages"));
app.get("/signup",require("./routes/pages"));
app.post("/signup",require("./routes/auth"));
app.post("/login",require("./routes/auth"));


app.use("/admin",require("./routes/admin"));



// zzzzzzzzzzzzzzzz
app.get("/logout",require("./routes/auth"));
app.use("/customer",require("./routes/customer"));
// app.use("/booking",require("./routes/customer"));
app.get("asas",(req,res) => {
  db.query('select * from movies')
}
);






app.listen(5001,() =>{
  console.log('server created at 5001')
})