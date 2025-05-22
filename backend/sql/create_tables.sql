CREATE DATABASE IF NOT EXISTS college_recommendation;
USE college_recommendation;

CREATE TABLE Colleges (
    college_id INT PRIMARY KEY,
    college_name VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(100),
    nirf_rank_2024 INT
);
