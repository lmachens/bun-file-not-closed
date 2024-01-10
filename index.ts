import express from "express";
import fs from "fs";

const app = express();
const port = 8080;

app.get("/files", (_req, res) => {
  fs.readdir("/proc/self/fd", function (err, list) {
    if (err) throw err;
    res.send(list.length.toString());
  });
});

app.use("/", express.static(import.meta.dir + "/public"));

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
