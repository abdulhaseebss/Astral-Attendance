const express = require("express");
const cors = require("cors");
const db = require('./db.connect.js')
const app = express();
const port = 3000;


app.use(cors())





app.get('/' , (req , res)=>{
    const sql = "Select * from users"
    db.query(sql , (err , data)=>{
        if (err) return res.json(err);
        return res.json(data)
    })
})


// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
