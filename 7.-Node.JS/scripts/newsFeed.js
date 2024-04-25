const { EventEmitter } = require("node:events");

function createNewsFeed() {
    const emitter = new EventEmitter();

    setInterval(() => {
    try {
        emitter.emit("newsEvent", "News: A thing happened in a place.");
    } catch (error) {
        console.error("Error:", error.message);
    }
    }, 1000);

    setInterval(() => {
    try {
        emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
    } catch (error) {
        console.error("Error:", error.message);
    }
    }, 4000);

    setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
    }, 5000);

    return emitter;
}

const newsFeed = createNewsFeed();

newsFeed.on("newsEvent", (data) => {
    console.log("News Event:", data);
});

newsFeed.on("breakingNews", (data) => {
    console.log("Breaking News:", data);
});

newsFeed.on("error", (error) => {
    console.error("Error:", error.message);
});

/* En listenerEvents.js tengo este código:

newsFeed.on("newsEvent", (data) => {
    console.log("News Event:", data);
});

newsFeed.on("breakingNews", (data) => {
    console.log("Breaking News:", data);
});

newsFeed.on("error", (error) => {
    console.error("Error:", error.message);
});

*/