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
  $percent = $_POST["fpercent"];
  $class = $_POST["fclass"];

  $sql = "INSERT INTO StudentResult
  VALUES ('".$roll."','".$percent."','".$class."')";
  if ($conn->query($sql) === TRUE) {
      echo "Student Result Information was recorded successfully <br>";
  } else {
      echo "Error adding Student Result: " . $conn->error . " <br>";
  }

}

$conn->close();
?>

</body>
</html>


