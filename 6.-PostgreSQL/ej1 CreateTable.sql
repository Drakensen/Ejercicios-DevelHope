CREATE TABLE Books (
    Book_id SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Author VARCHAR(100) NOT NULL,
    Genre VARCHAR(50),
    Published_year INTEGER,
    ISBN VARCHAR(20),
    Price NUMERIC(8,2),
    Rating NUMERIC(3,1),
    Stock_Count INTEGER
);