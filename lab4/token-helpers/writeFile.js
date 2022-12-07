const fs = require('fs');

const writeFile = (file, content) => {
  fs.writeFileSync(file, content, (err) => {
    if (err) console.log(err);
    else {
      console.log(`File ${file} written successfully\n`);
    }
  });
};

module.exports = { writeFile };
