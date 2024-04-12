/**
 * START: Follow the instructions below.
 */

interface Country {
    name: string;
    code: string;
}

// - Complete the `CountryWithPopulation` interface.
// - Extend the `Country` interface.
// - Add a `population` property with an appropriate type.

interface CountryWithPopulation extends Country {
    population: number;
}

const countryA: CountryWithPopulation = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

const countryB: CountryWithPopulation = {
    name: "Italy",
    code: "IT",
    population: 58_940_255,
};

const countryC: CountryWithPopulation = {
    name: "Spain",
    code: "ES",
    population: 47_450_795,
};

// ----

export {};