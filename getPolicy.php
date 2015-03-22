<?php
	$myfile = fopen("data/policy.csv", "r") or die("Unable to open file!");
	$data = Array();
	$data[] = fread($myfile,filesize("data/policy.csv"));
	var_dump($data);
	echo json_encode($data);
	fclose($myfile);
?>