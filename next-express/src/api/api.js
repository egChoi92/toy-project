const express = require("express");
const app = express();
const uuidAPIKey = require("uuid-apikey");

const server = app.listen(3001, () => {
  console.log("Server running on port 3001!!!");
});

const data = [
  { name: "홍길동", city: "seoul" },
  { name: "김철수", city: "jeju" },
  { name: "박지성", city: "seoul" },
  { name: "손흥민", city: "jeju" },
];

// console.log(uuidAPIKey.create());

const key = {
  apiKey: "VV3F5PG-ZHWM55F-P5VAYVW-34SEQG6",
  uuid: "dec6f2da-fc79-4295-b176-af6f1932ebc0",
};

app.get("/api/user/:apiKey/:type", async (req, res) => {
  const { apiKey, type } = req.params;
  if (!uuidAPIKey.isAPIKey(apiKey) || !uuidAPIKey.check(apiKey, key.uuid)) {
    res.send("API Key is not invalid");
  } else {
    const returnData =
      type === "all" ? data : data.filter((data) => data.city === type);
    res.send(returnData);
  }
});
