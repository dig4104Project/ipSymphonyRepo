<?php

$domainName = $_POST["input1text"];

$ip1 = gethostbyname($domainName);

echo "That domain Lives at $ip1";
echo "<br />Its values are: <br />";

print_r (explode(".",$ip1,4));

?>

