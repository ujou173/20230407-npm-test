const http = require('http');

const server = http.createServer(function(request, response){});

server.listen(3050, function(error) {
  if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
  });