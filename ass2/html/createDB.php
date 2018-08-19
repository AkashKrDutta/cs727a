<!DOCTYPE html>
<html>
<head></head>
<body>
<?php        


// Code for creating databb (One time)
$servername = "localhost";
$username = "root";
$password = "akash333!!!";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Create database
$sql = "CREATE DATABASE myDB";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully <br>";
} else {
    echo "Error creating database: " . $conn->error . " <br>";
}
$conn->close();






// code for creating tables (One time)
$dbname = "myDB";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// sql commands to execute ONE TIME at the start of website
// sql to create table
$sql = "CREATE TABLE StudentData (
Roll VARCHAR(10) PRIMARY KEY,
Name VARCHAR(30) NOT NULL,
age INTEGER NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table StudentData created successfully <br>";
} else {
    echo "Error creating table: " . $conn->error . " <br>";
}


$sql = "CREATE TABLE StudentPersonal (
Roll VARCHAR(20) PRIMARY KEY,
FatherName VARCHAR(30) NOT NULL,
MotherName VARCHAR(30) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table StudentPersonal created successfully <br>";
} else {
    echo "Error creating table: " . $conn->error . " <br>";
}


$sql = "CREATE TABLE StudentResult (
Roll VARCHAR(20) PRIMARY KEY,
Percent INTEGER NOT NULL,
class VARCHAR(20) NOT NULL
)";
if ($conn->query($sql) === TRUE) {
    echo "Table StudentResult created successfully <br>";
} else {
    echo "Error creating table: " . $conn->error . " <br>";
}
// End of one time sql commands 




$conn->close();
?> 

</body>
</html>
