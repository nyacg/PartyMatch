<?php
	$file = fopen("./data/policy.csv", "r") or die("Unable to open file!");
	$data = Array();
	while(! feof($file)) {
		$data[] = fgetcsv($file);
	}

	echo json_encode($data);

	//echo fread($file,filesize("./data/policy.csv"));
	fclose($file);
?>