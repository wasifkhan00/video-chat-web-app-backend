const axios = require("axios");

const getAllProducts = (req, res) => {
  const data = axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      res.send(response.data);
      console.log('request sent')
    });
  //   res.send("getAllProducts and / route called");
  console.log("getAllProducts and / route called");
};

const stupas = (req, res) => {
  res.send("stupas and /testing route called");
  console.log("stupas and /testing route called");
};

const stencil = (req, res) => {
  res.send("stencil and /post request called stencil called");
  console.log("stencil and /poster route called");
};

const stepcil = (req, res) => {
  res.send("stepcil and /put request called stepcil called");
  console.log("stepcil and /put route called");
};
const centric = (req, res) => {
  res.send("centric and /delete request called centric called");
  console.log("centric and /delete route called");
};
const centricalss = (req, res) => {
  res.send("centricalss and /patch request called centricalss called");
  console.log("centricalss and /patch route called");
};
const centraline = (req, res) => {
  res.send("centraline and /Head request called centraline called");
  console.log("centraline and /Head route called");
};

module.exports = {
  getAllProducts,
  stupas,
  stencil,
  stepcil,
  centric,
  centricalss,
  centraline,
};
