const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const toolsRoutes = require("./routes/v1/tools.route");
const errorHandler = require("./middlewares/errorHandler");
const { connectToServer } = require("./utils/dbConnect");

app.use(cors());
app.use(express.json());
app.set("view engin", "ejs");

connectToServer((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } else {
    console.log(err);
  }
});

app.use("/api/v1/tools", toolsRoutes);

async function run() {
  try {
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.render("index.ejs", {
    id: 123,
    user: {
      name: "hamim",
      age: 24,
    },
  });
});

app.all("*", (req, res) => {
  res.send("No Route Not Found");
});

app.use(errorHandler);

// ---> global error handler
process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
