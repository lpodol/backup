var capture = function(data){
  var notifier = require('node-notifier');
  notifier.notify({
    'title': 'My notification',
    'message': data.toString().trim()
  });
};
process.stdin.on("data",capture);
