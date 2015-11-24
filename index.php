<!DOCTYPE html>
<html lang="en">
<title>SuperHeros VS SuperHeros</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="utf-8" />
<!-- Bootstrap styles
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" /> --> 
<link rel="stylesheet" href="css/bootstrap.min.css" /> 
<link rel="stylesheet" href="css/animate.css" />

<!-- Custom styles -->
<link rel="stylesheet" href="css/styles.css" />

<!-- End Custom styles -->
</head>
<body>

<!-- Preloader -->
<div id="preloader">
    <div id="status" class="text-center"><h3>Please wait, loading....</h3></div>
    
</div>
<div class="bg"></div>
<!-- text -->
 <div class="text1 pos"><h2>The World Has Changed...</h2></div>
 <div class="text2 pos"><h3>after the World War III when counties disappeared in nuclear flame...</h3></div>
 
 <div class="text3 pos"><h2>The Heroes Also Changed...</h2></div>
 <div class="text4 pos"><h3>super heroes who should protect mankind from danger become danger themselves...</h3></div>
 
 <div class="text5 pos"><h2>And the Battle Began...</h2></div>
 <div class="text6 pos"><h3>battle against everyone! Enter and prove your courage!</h3></div>

<div class="heroLeft"><img src="images/ironman.png" class="img-responsive" alt="" /></div>
<div class="heroRight"><img src="images/thore.png" class="img-responsive" alt="" /></div>

<div class="shield"><img src="images/shield.png" alt="" class="center-block img-responsive" /></div>

<div class="smoke"></div>

<video muted poster="" id="bgvid">
    <source src="images/nuke.mp4" type="video/mp4">
</video>



<!-- jQuery (necessary for Bootstrap's JavaScript plugins) 
<script type='text/javascript' src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>-->
<script type='text/javascript' src="js/jquery.min.js"></script>

<!-- Bootstrap js script
<script  type='text/javascript' src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script> -->
<script  type='text/javascript' src="js/bootstrap.min.js"></script>

<script type='text/javascript' src="js/scripts.js"></script>

<!-- Preloader -->
<script type="text/javascript">
	//<![CDATA[
		$(window).load(function() { // makes sure the whole site is loaded
			$('#status').fadeOut(); // will first fade out the loading animation
			$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(350).css({'overflow':'visible'});
		})
	//]]>
</script> 

</body>
</html>