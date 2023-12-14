function smartphone (brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let s1 = new smartphone("Apple", "IPhone 13", 1300);
let s2 = new smartphone("Samsung", "S3", 100);
let s3 = new smartphone("Xiaomi", "Redmi Note 12", 250);

console.log(s1);
console.log(s2);
console.log(s3);