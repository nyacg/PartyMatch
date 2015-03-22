<?php
	$file = fopen("./data/policy.csv", "r") or die("Unable to open file!");
	$data = Array();
	$keys = Array();
	$i = 0;
	while(! feof($file)) {
		$line = fgetcsv($file);
		if($i == 0){
			// first time get the column headings
			$i++;
			$keys = $line;
		} else {
			// normally add the headings to the row and append this to the array of all rows
			$data[] = array_combine($keys, $line);
		}
	}

	echo json_encode($data);

	//echo fread($file,filesize("./data/policy.csv"));
	fclose($file);
?>