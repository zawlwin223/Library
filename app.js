require ("dotenv").config()

const express = require ("express");
const app   = express ();
const file_upload = require ("express-fileupload");
const mongoose = require ("mongoose");
const cors = require ("cors");

app.use(cors({
    origin:"*",
}))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(file_upload());

mongoose.connect("mongodb+srv://zawlwinp223:zlp20022512@cluster1.qo5tbxm.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Conncected"))


let Author = require ("./Routes/Author_Route.js");
let Category = require ("./Routes/Category_Route.js");
let Tag = require ("./Routes/Tag_Route.js");
let Book = require ("./Routes/Book_Route.js");
let User = require ("./Routes/User_Route.js");

app.use("/Author",Author);
app.use("/Category",Category);
app.use("/Tag",Tag);
app.use("/Book",Book);
app.use("/User",User)

app.use((err, req, res, next) => {
    console.error(err);
    let err_obj = {
        err_msg :err
    }
    res.status(500).send(JSON.stringify(err_obj))
  })

  function default_migrate(){
    let {migrate} = require ("./Migrator/migrate.js");
    migrate()
  }
  default_migrate()
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`)
})