<!DOCTYPE html>
<html lang="en" ng-app = "app">
  <head>
    <meta charset="utf-8">
  </head>
<body>

<h2>AJAX</h2>
<?php
echo date('Y-m-d H:i:s');
//echo '<br/>test time = '.date('H:i', strtotime("06:00 PM"));
// $filename = date("YmdHis").rand(10,99).substr('test1495.pdf',strrpos('test1495.pdf', '.', -1));
// echo '<br/>filename ='.$filename;
// echo '<br/>'.hash('sha256',0959945532);
?>
<div>  
		URL: <input id="url" type="text" name="URL" size="50"><br>
  		Para: <input id="para"type="text" name="lname" size="50"><br>
</div>
<button type="button" onclick="loadDoc()">Request data</button>

<p id="demo">

</p>
 
<script>
function loadDoc() {
	var strUrl = document.getElementById("url").value;
	var strPara = document.getElementById("para").value;

  document.getElementById("demo").innerHTML = '';

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("POST", strUrl, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(strPara);
}
</script>

</body>
</html>