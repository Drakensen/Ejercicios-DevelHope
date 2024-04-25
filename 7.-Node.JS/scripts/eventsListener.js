newsFeed.on("newsEvent", (data) => {
    console.log("News Event:", data);
});

newsFeed.on("breakingNews", (data) => {
    console.log("Breaking News:", data);
});

newsFeed.on("error", (error) => {
    console.error("Error:", error.message);
});

//Este código es el Event Listener para que funcione newsFeed.js 