function S_GET(id){
    var a = new RegExp(id+"=([^&#=]*)");
    console.log(a)
    return decodeURIComponent(a.exec(window.location.search)[1]);
}



$( document ).ready(function() {
  var a = new RegExp(id+"=([^&#=]*)");
  console.log(a)
  return decodeURIComponent(a.exec(window.location.search)[1]);
  console.log('hello')

});
