/*Write a promise. If the variable called number is greater than 10, then it returns a resolve, otherwise it returns a reject. 
Then manage the promise with then and catch in case of any reject. **In then you have to print the value of number|In catch you have to print the error*/

const myPromise = new Promise((resolve, reject) => {
    const number = 15;

    if (number>10) {
        resolve("Número mayor de 10");
    } else {
        reject(new Error("Número igual o menor de 10"));
    }
});

myPromise.then((resolve) => {
    console.log("OK", resolve);
})

myPromise.catch((error) => {
    console.error("ERROR", error.message);
});