<!DOCTYPE html>  
<html>
<head>
</head>
<body>  

<?php
$servername = "localhost";
$username = "root";
$password = "akash333!!!";
$dbname = "schoolDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $roll = $_POST["froll"];
  $fname = $_POST["ffname"];
  $mname = $_POST["fmname"];

  $sql = "INSERT INTO StudentPersonal
  VALUES ('".$roll."','".$fname."','".$mname."')";
  if ($conn->query($sql) === TRUE) {
      echo "Student Personal Information was recorded successfully <br>";
  } else {
      echo "Error adding Student Personal Information: " . $conn->error . " <br>";
  }

}



$conn->close();
?>

<button type="button" onclick="location.href = './index.html';">Close</button>
</body>
</html>


