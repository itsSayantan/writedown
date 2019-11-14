const fs = require("fs");
const path = require("path");

module.exports = {
  copy: () => {
    try {
      fs.writeFileSync("./dist/index.html", fs.readFileSync("./index.html"));
    } catch (err) {
      console.error(err);
    }
  }
};
