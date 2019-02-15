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
        Url = {
          get get(){
            var vars= {};
            if(window.location.search.length!==0)
              window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
                key=decodeURIComponent(key);
                if(typeof vars[key]==="undefined") {vars[key]= decodeURIComponent(value);}
                else {vars[key]= [].concat(vars[key], decodeURIComponent(value));}
              });
            return vars;
          }
        };
        Url.get.param1
        console.log(Url.get.param1['location'])
        console.log(param1['location'])
        console.log('hello')
        Url.get.location
        console.log(Url.get.location['location'])
        console.log(location['location'])
        console.log('hello')
      });

    </script>


    nothing to see here!

  </body>
</html>
