const express = require("express");
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  const name = req.query.name;
  res.json(
    require("./23_Oct_2022/item_data.json").items.find(
      (item) => item.name === name || item.itemKey === name
    )
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
