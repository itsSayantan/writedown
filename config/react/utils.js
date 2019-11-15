const fs = require("fs");
const path = require("path");

module.exports = {
  copy: () => {
    try {
      fs.writeFileSync(path.resolve(__dirname, "../../dist/react/index.html"), fs.readFileSync(path.join(__dirname, "../../src/react/index.html")));
    } catch (err) {
      console.error(err);
    }
  }
};
