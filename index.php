<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </head>
  <body>

    <script>
    $( document ).ready(function() {
      console.log('hello')
      var a = new RegExp(id+"=([^&#=]*)");
      console.log(a)
      return decodeURIComponent(a.exec(window.location.search)[1]);
    });
    </script>


    nothing to see here!

  </body>
</html>
