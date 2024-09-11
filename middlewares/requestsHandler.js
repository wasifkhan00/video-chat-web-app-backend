const fs = require("fs");

const requestHandler = (req, res, next) => {
  console.log('manInThemiddle//////////////////////////////////////////')
   fs.appendFile(
     "logged.txt",
     `${Date.toString()}:  ${req.method}: ${req.ip} ${req.path}:\n`,
     (err, data) => {
       next();
     }
   );
};

module.exports = requestHandler;
