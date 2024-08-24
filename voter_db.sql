CREATE TABLE voters (
voter_id VARCHAR(36) PRIMARY KEW NOT NULL,
role ENUM('admin','user') NOT NULL,
password VARCHAR(255) NOT NULL
);