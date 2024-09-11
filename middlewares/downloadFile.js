const fs = require("node:fs");

const downloadFile = (req, res, next) => {
  console.log("downloadafile executed");

  const folderPath = "./assets/package (3).json";
  next()

    //  res.download(folderPath);
  // next()
  //  setTimeout(() => {
  //     console.log('im xcuted')
  //    return next()
  //  }, 2000);
};

module.exports = downloadFile;
