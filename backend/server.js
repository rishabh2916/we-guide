
require('dotenv').config()
const blogRoutes = require('./routes/blogs')
const express = require('express')
const mongoose = require('mongoose')
const roadmapRoutes = require('./routes/Roadmaps')
const cors = require('cors')
const User = require("./models/userSchema")
// const loginRoutes = require("./r")
const app = express()
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://rishabhrajpurohit1703:12345666@cluster0.mv2eggk.mongodb.net/minorproject?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB successfully."))
  .catch((error) => console.error("Could not connect to MongoDB:", error));

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.get('/', (req, res) => {
    res.json({ mssg: 'welcome to the app' })
})
app.get('/myassessment', (req, res) => {
    res.json({ mssg: "Please give assessment" })
})
app.use('/blogs', blogRoutes)
app.use('/roadmap', roadmapRoutes)

app.use("/api/v1/login", async (req, res, next) => {
  console.log(req.body);
// 1. get the email and password from req.body
let userEmail = req.body.email;
let userPassword = req.body.password;
try {
  // 2.find user with given email
  let foundUser = await User.findOne({ email: userEmail });
  console.log(foundUser)
  if (!foundUser) {
    return res.status(422).send({ message: "Invalid Email or Password!" });
  }
  // 3.if user exist compare the pass
  let isValidated = foundUser.password === userPassword ? true : false;
  if (!isValidated) {
    throw new Error("password is not matching");
  }
  res.status(201).json({
    status: "success",
    data: {
      foundUser,
    },
  });
} catch (e) {
  console.log(e);
}
});
app.use("/api/v1/signup", async (req, res, next) => {
console.log(req.body);
const user = await User.create(req.body);
res.status(201).json({
  status: "success",
  data: {
    user,
  },
});
});

app.use("/api/v1/login", async (req, res, next) => {
  console.log(req.body);
  const user = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
  });

app.listen(4000,()=>{
  console.log('listening on port 4000')
})


