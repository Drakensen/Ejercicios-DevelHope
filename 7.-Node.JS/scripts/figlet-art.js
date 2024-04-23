const figlet = require('figlet');

function printFigletText(err, data) {
    if (err) {
    console.error("Something went wrong...");
    console.error(err);
    return;
    }

    console.log(data);
}

figlet.text(
    "Boo!",
    {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
    },
    
    printFigletText
);