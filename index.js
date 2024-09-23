const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  const profile = {
    data: {
      name: "john",
      age: 20,
    },
  };
  res.status(200).json(profile);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
