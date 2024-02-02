CREATE DATABASE mydatabase;

USE mydatabase;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    studentID VARCHAR(255),
    studentName VARCHAR(255),
    studentCollege VARCHAR(255),
    studentStatus VARCHAR(255),
    dsaScore INT,
    webDScore INT,
    reactScore INT,
    interviewDate DATE,
    interviewCompany VARCHAR(255),
    interviewResult VARCHAR(255)
);
