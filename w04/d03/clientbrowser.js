var ws = new WebSocket("ws://localhost:3000");
var body = document.querySelector("body");
var ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.color = "blue";
body.appendChild(ul);

ws.on("connection", function(){
  var input = document.querySelector("input");
  input.addEventListener("keydown", function(){
    if (event.keyCode === 13){
      var hash = {name: "Lauren", words: input.value};
      ws.send(JSON.stringify(hash));
    }
  });


var addText = function(msg){
  var newli = document.createElement("li");
  newli.innerText = msg;
  var firstli = ul.firstChild;
  ul.insertBefore(newli,firstli);
};

ws.addEventListener("message", function(evt){
  addText(evt.data);
});
