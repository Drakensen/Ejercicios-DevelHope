/* 
https://www.kaggle.com/datasets/brendan45774/test-file?resource=download

1. Display female passengers who survived and are older than 30.
2. Find the average age of men who didn't survive.
3. Display information for passengers who spent between $20 and $50 on their tickets and got on the ship at port 'C'."
4. Find the total number of the survivors in the first class.
5. Show the information of passengers who boarded from Cherbourg (port 'C') and spent more than $75 on their tickets.".
*/

-- 1. 
SELECT *
FROM test
WHERE Sex = 'female' AND Survived = 1 AND Age > 30;

-- 2.
SELECT AVG(Age) AS average_age
FROM test
WHERE Sex = 'male' AND Survived = 0;

-- 3.
SELECT *
FROM test
WHERE Fare BETWEEN 20 AND 50 AND Embarked = 'C';

-- 4.
SELECT COUNT(*) AS total_survivors_first_class
FROM test
WHERE Pclass = 1 AND Survived = 1;

-- 5.
SELECT *
FROM test
WHERE Embarked = 'C' AND Fare > 75;
