const express = require("express");
const app = express();
const PORT = 5002;
const routes_products = require("./routes/routes");
const requestHandler = require("./middlewares/requestsHandler");
const limiter = require("./middlewares/limiter");
const downloadFile = require("./middlewares/downloadFile");
const morgan = require("morgan");
const apicache = require("apicache");
let cache = apicache.middleware;  

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(express.json());
// Cache Data only for 24 hours a day
app.use(cache("10 minutes"));
app.use(requestHandler);
app.use(limiter);
app.set("trust proxy", 1);
app.use(downloadFile);

app.use(routes_products);

app.listen(PORT, () =>
  console.log("Server Is listening On http://localhost:" + PORT)
);
