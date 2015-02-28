var ws = new WebSocket("ws://localhost:3000");

var input = document.querySelector("input");
input.addEventListener("keydown", function(){
  var keycode = event.keyCode;
  if (keycode === 13){
    ws.send(input.value);
  };
})
