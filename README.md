Student Medical Records System Documentation
Overview
The Student Medical Records System is a web application designed to manage and display medical records of students. It provides a user-friendly interface for viewing, searching, and filtering student records based on various criteria.

Features
View Records: Display a list of student records in a table format.
Search: Search for specific student records based on name, ID, age, medical condition, etc.
Filter: Filter student records based on different criteria such as medical condition.
Add New Records: Capability to add new student records to the system.
Technologies Used
Node.js: Backend server environment
SQLite: Database for storing student records
Express.js: Web framework for Node.js
HTML/CSS/JavaScript: Frontend development
EJS (Embedded JavaScript): Templating engine for HTML rendering
Setup Instructions
Clone the Repository:

bash
Copy code
git clone <repository-url>
Install Dependencies:

Copy code
npm install
Start the Server:

sql
Copy code
npm start
Access the Application:
Open your web browser and navigate to http://localhost:3000

Usage
Access the web application in your browser.
Use the search bar to search for specific student records.
Use filters to narrow down student records based on different criteria.
Add new student records using the provided form.
Database Schema
The database schema consists of a single table students with the following columns:

id: Student ID (Primary Key)
name: Student name
level: Student level
faculty: Student faculty
department: Student department
medicalCondition: Student medical condition
Contributors
Your Name
License
This project is licensed under the MIT License.