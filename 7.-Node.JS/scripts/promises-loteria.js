const player = ["Joe", "Caroline", "Sabrina"]

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
        if (win) {
            resolve(`${player} won a prize in the draw!`);
        } else {
            reject(new Error(`${player} lost the draw.`));
        }
        });
    });
}

const promises = player.map((player)  => luckyDraw(player));

promises.forEach(promise => {
    promise.then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });
});