USE college_recommendation;
-- Create branch_types table
CREATE TABLE IF NOT EXISTS branch_types (
    branch_id INT AUTO_INCREMENT PRIMARY KEY,
    branch_name VARCHAR(100) UNIQUE
);

-- Create branches table
CREATE TABLE IF NOT EXISTS branches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    college_id INT,
    branch_id INT,
    FOREIGN KEY (college_id) REFERENCES colleges(college_id),
    FOREIGN KEY (branch_id) REFERENCES branch_types(branch_id)
);
