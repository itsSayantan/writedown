const fs = require("fs");
const path = require("path");

module.exports = {
  cleanup: () => {
    try {
      const files = fs.readdirSync("./dist");
      for (let i = 0; i < files.length; i += 1) {
        try {
          fs.unlinkSync(path.resolve(__dirname + "/dist/", files[i]));
        } catch (err) {
          console.error(err);
        }
      }
    } catch (err) {
      console.error(err);
    }
  },
  copy: () => {
    try {
      fs.writeFileSync("./dist/index.html", fs.readFileSync("./index.html"));
    } catch (err) {
      console.error(err);
    }
  }
};
