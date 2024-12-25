const express = require("express");

const app = express();
const PORT = 8000;

app.get("/users", (req, res) => {
  const html = `<ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>`;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .put((req, res) => {
    return res.json({
      status: "pending",
    });
  })
  .delete((req, res) => {
    return res.json({
      status: "pending",
    });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  console.log("Body", body);

  return res.json({ status: "pending" });
});

app.patch("/api/users/:id", (req, res) => {
  return res.json({
    status: "pending",
  });
});

app.delete("/api/users/:id", (req, res) => {
  return res.json({
    status: "pending",
  });
});

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
