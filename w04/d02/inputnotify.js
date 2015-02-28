var message = function(data){
  var notifier = require('node-notifier');
  var string = data.toString().trim();
  var split = string.split(" ");
  var sum = parseInt(split[0]) + parseInt(split[1]);

  notifier.notify({
    'title': 'My notification',
    'message': sum
  });
};
process.stdin.on("data",message);
