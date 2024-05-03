const fs = require('fs');

const content = "This is the content of the text file.";

fs.writeFile('/7.-Node.JS/scripts/uploads/textfile.txt', content, (err) => {
    if (err) {
        console.error("Error writing file: ${err}");
        return;
    }
        console.log("File written successfully");
})