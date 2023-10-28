require("./db/config");
const express = require("express");
const cors = require("cors");
const registrationSchema = require("./db/registration");
const app = express();
app.use(cors());
app.use(express.json());

function Check(value) {
  for (let key in value) {
    if (value[key] === "") return false;
  }
  return true;
}

app.post("/signup", async (req, res) => {
  if (Check(req.body)) {
    let user = new registrationSchema(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.pass;
    res.send({ result });
  } else {
    res.send({ result: "Please fill all the fields" });
  }
});

app.post("/login", async (req, res) => {
  if (req.body.name && req.body.email && req.body.pass) {
    let user = await registrationSchema.findOne(req.body).select("-pass");
    if (user) {
      user = user.toObject();
      res.send({ result: user });
    } else {
      res.send({ result: "No data found" });
    }
  } else {
    res.send({ result: "Please fill all the fields" });
  }
});

app.get("/hospitals", async (req, resp) => {
  let products = await registrationSchema.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "No user found" });
  }
});

app.get("/search/:key", async (req, resp) => {
  let result = await registrationSchema.find({
    $or: [
      { name: req.params.key },
      { email: req.params.key },
      { pincode: req.params.key },
      { phone: req.params.key },
      { date: req.params.key },
      { state: req.params.key },
    ],
  });
  resp.send(result);
});

app.listen(5000, () => {
  console.log("Port is listening on 5000");
});
