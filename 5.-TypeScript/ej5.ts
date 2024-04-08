/**
 * START: Follow the instructions below.
 */

// Add the `any` type to fix the type errors in the following code.

let currency = { name: "Indian rupee" };

currency.name = "THB";

currency.name = "Baht";

// Fix the if statement in this function so the type of `value` is narrowed to `string`.

function countryNameLength(string: unknown) {
    if (typeof string === "string") {
        console.log(string.length);
    }
}

countryNameLength("United States of America");

// Fix the type error we see when calling this function.
// Hint: Replace one of the `never` types with a different type.

function throwCountryError(message: string): never {
    throw new Error(`Could not find country: ${message}`);
}

throwCountryError("Narnia");

// ----

export {};