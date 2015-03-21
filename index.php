<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Party Match</title>
    <link rel="stylesheet" type="text/css" href="css/jTinder.css">
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
</head>
<body>
    <!-- start padding container -->
    <div class="wrap">
        <!-- start jtinder container -->
        <div id="tinderslide">
            <ul>
                <li class="pane1">
                    <div class="img"></div>
                    <div>Miami Beach</div>
                    <div class="like"></div>
                    <div class="dislike"></div>
                </li>
                <li class="pane2">
                    <div class="img"></div>
                    <div>San Francisco</div>
                    <div class="like"></div>
                    <div class="dislike"></div>
                </li>
                <li class="pane3">
                    <div class="img"></div>
                    <div>Chicago</div>
                    <div class="like"></div>
                    <div class="dislike"></div>
                </li>
                <li class="pane4">
                    <div class="img"></div>
                    <div>New York</div>
                    <div class="like"></div>
                    <div class="dislike"></div>
                </li>
                <li class="pane5">
                    <div class="img"></div>
                    <div>Beach</div>
                    <div class="like"></div>
                    <div class="dislike"></div>
                </li>
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

    <!-- jTinder status text  -->
    <div id="status"></div>

    <!-- jQuery lib -->
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <!-- transform2d lib -->
    <script type="text/javascript" src="js/jquery.transform2d.js"></script>
    <!-- jTinder lib -->
    <script type="text/javascript" src="js/jquery.jTinder.js"></script>
    <!-- jTinder initialization script -->
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/logic.js"></script>
    <script type="text/javascript" src="js/ui.js"></script>

</body>
</html>