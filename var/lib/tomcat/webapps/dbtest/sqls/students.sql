CREATE database students;

CREATE TABLE records (
    name VARCHAR(50) NOT NULL,
    roll INTEGER NOT NULL PRIMARY KEY,
    class CHAR(5),
    marks DECIMAL(5, 2)
);

INSERT INTO records (name, roll, class, marks)
VALUES ('Alice', 1, '10A', 85.50),
    ('Bob', 2, '10B', 90.00),
    ('Charlie', 3, '10A', 78.25);

