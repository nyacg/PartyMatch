<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Party Match</title>

    <link rel="manifest" href="manifest.json">
    <link rel="icon" sizes="192x192" href="img/icon.png">

    <link rel="stylesheet" type="text/css" href="css/jTinder.css">
    <link rel="stylesheet" type="text/css" href="css/ui.css">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
</head>
<body>
    <div class="bigcard">
       <div class="wrap top-colour">
            <!--<div class="img"></div>-->
        </div>
        <h1>You should vote:</h1>
        <h1><em style="font-size: 2em" class='party-name'>Conservative</em></h1>
    </div>
    <!-- start padding container -->
    <div class="wrap">
        <!-- start jtinder container -->
        <div id="tinderslide">
            <ul id="pane-holder">
                <!-- panes are added with JavaScript here -->
            </ul>
        </div>
        <!-- end jtinder container -->
    </div>
    <!-- end padding container -->

    <!-- jTinder trigger by buttons  -->
    <div class="actions">
        <a href="#" class="small undo"><i class="fa fa-undo fa-2x"></i></a>
        <a href="#" class="dislike"><i class="fa fa-times fa-4x"></i></a>
        <a href="#" class="like"><i class="fa fa-heart fa-3x"></i></a>
        <a href="#" class="small skip"><i class="fa fa-step-forward fa-2x"></i></a>
    </div>

    <!-- jQuery lib -->
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <!-- transform2d lib -->
    <script type="text/javascript" src="js/jquery.transform2d.js"></script>
    <!-- jTinder lib -->
    <script type="text/javascript" src="js/jquery.jTinder.js"></script>
    <!-- jTinder initialization script -->
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/calculator.js"></script>

</body>
</html>