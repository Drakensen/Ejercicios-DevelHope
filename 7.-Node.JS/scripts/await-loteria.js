const player = ["Tina", "Jorge", "Julien"]

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

async function getResults(player) {
    try {
        for (const playerName of player) {
            const result = await luckyDraw(playerName);
            console.log(result);
        }
    } catch (error) {
        console.error("Something went wrong:", error.message);
    }
}

getResults(player);
//No se si está bien, va en orden y cuando pierde uno, se para la ejecución.