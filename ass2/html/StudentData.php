<!DOCTYPE html>  
<html>
<head>
  <link rel="stylesheet" type="text/css" href="./style.css">
</head>
<body>  

<?php
$servername = "localhost";
$username = "root";
$password = "akash333!!!";
$dbname = "schoolDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $name = $_POST["fname"];
  $age = $_POST["fage"];
  $roll = $_POST["froll"];

  $sql = "INSERT INTO StudentData
  VALUES ('".$name."','".$age."','".$roll."')";
  if ($conn->query($sql) === TRUE) {
      echo "Student Data was recorded successfully <br>";
  } else {
      echo "Error adding Student Data: " . $conn->error . " <br>";
  }

}

$conn->close();
?>

<button type="button" onclick="location.href = './index.html';">Close</button>


</body>
</html>


