const html = {
  htmlFunc: function(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <title>Clock</title>
      <style>
        *{
          box-sizing: border-box;
          padding: 0%;
          margin: 0%;
        }
      </style>
    </head>
    <body>
      <div id='root'>
        <div>${data}</div>
      </div>
      <script src="/clockStyle.js"></script>
      <script src="/reload.js"></script>
    </body>
    </html>`
  },
}
export default html;