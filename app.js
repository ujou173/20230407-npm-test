import http from 'http';
import fs from 'fs';
import htmlBody from './htmlBody.js';
import moment from 'moment';

const server = http.createServer(function(request, response){
  if (request.url === "/") {
    function timeFunc() {
      const now = new Date();
      const currentTime = moment(now).format('YYYY년 MM월 HH시 mm분 ss초 dddd');
      return currentTime;
    }
    let time = timeFunc();
    console.log(time);
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.write(htmlBody.htmlFunc(time));
    response.end();
  }
  else if (request.url.split("/")[1] === "clockStyle.js") {
    fs.readFile(`./clockStyle.js`, function (err, data) {
      response.writeHead(200);
      response.write(data);
      response.end();
    });
  }
});

server.listen(3050, function(error) {
  if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
  });