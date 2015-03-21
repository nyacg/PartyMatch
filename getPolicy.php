<?php
	$myfile = fopen("policies/", "r") or die("Unable to open file!");
	echo fread($myfile,filesize("webdictionary.txt"));
	fclose($myfile);
?>