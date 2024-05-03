const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require("./db.connect.js");
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.use(cors());

db.connect();

app.get("/api/v1/users", (req, res) => {
  const sql = "SELECT * FROM attendance_data";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json({message: "data fetch successfully" , data: data});
  });
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.post("/api/v1/users/attend", function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const date = req.body.date;
  const day = req.body.day;
  const entryTime = req.body.entryTime;
  const exitTime = req.body.exitTime;

  const userData = {
    name: name,
    email: email,
    date: date,
    day: day,
    entryTime: entryTime,
    exitTime: exitTime,
  };

  db.query("INSERT INTO attendance_data SET ?", userData, function(err, result) {
    if (err) {
      console.error("Error inserting record:", err);
      res.status(500).send({message: "Error inserting record"});
      return;
    }
  
    // console.log("1 record inserted");
    res.send({message:"1 record inserted successfully"});
  });


});



// app.put("/api/v1/users/exit/:email", function (req, res) {

//   const {email} = req.params

//   const newExitTime = req.body.exitTime;

//   const userData = {
//     exitTime: newExitTime,
//   }

// })


app.put("/api/v1/users/exit/:email", function (req, res) {
  const email = req.params.email;
  const newExitTime = req.body.exitTime;

  const exitTimeUpdateQuery = "UPDATE attendance_data SET exitTime = ? WHERE email = ?";
  const exitTimeUpdateValues = [newExitTime, email];

  db.query(exitTimeUpdateQuery, exitTimeUpdateValues, function(err, result) {
    if (err) {
      // console.error("Error updating exit time:", err);
      res.status(500).send({message: "Error updating exit time"});
      return;
    }

    // console.log("Exit time updated successfully");
    res.send({message: "Exit time updated successfully"});
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});