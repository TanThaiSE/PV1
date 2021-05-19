const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// 1. User routes
app.use("/api", require("./routes/user.routes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
