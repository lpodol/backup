var ws = new WebSocket ("ws://localhost:3000");

var addText = function(message){
  var li = document.createElement("li");
  li.innerHTML = message;
  var ul = document.querySelector("ul");
  var firstli = ul.firstChild;
  ul.insertBefore(li, firstli);
}

ws.addEventListener("message", function(event){
  var objs = JSON.parse(event.data);
  objs.forEach(function(obj){
    var newmsg = obj.name + ": " + obj.message;
    addText(newmsg);
  })
})

var button = document.querySelector("button");
button.addEventListener("click", function(){
  var text = document.querySelector("#msg").value;
  var nameinput = document.querySelector("#name").value;
  addText(nameinput + ": " + text);
  var obj = {}
  obj.name = nameinput;
  obj.message = text;
  var json = JSON.stringify(obj);
  ws.send(json);
})
