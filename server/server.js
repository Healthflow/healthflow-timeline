const express = require("express"),
      app = express(),
      server = require("http").createServer(app);
      io = require("socket.io")(server);

let timerId = null,
    sockets = new Set();

app.use(express.static(__dirname + "/dist")); 

var count = 1;

io.on("connection", socket => {

  sockets.add(socket);
  console.log(`Socket ${socket.id} added`);

  if (!timerId) {
    startTimer();
  }

  socket.on("clientdata", data => {
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log(`Deleting socket: ${socket.id}`);
    sockets.delete(socket);
    console.log(`Remaining sockets: ${sockets.size}`);
  });

});

function startTimer() {
  
  timerId = setInterval(() => {
    if (!sockets.size) {
      clearInterval(timerId);
      
      timerId = null;
      
      console.log(`Timer stopped`);
    }

    var event = {
      Title: "Some title " + count,
      Description: "Some description " + count
    };

    for (const s of sockets) {      
      console.log(`Pushing value: ${count}`);
      s.emit("data", { data: event });
    }

    count++;

  }, 2000);
}

var port = 3000;

server.listen(port);

console.log(`Healthflow.Timeline.Server running at http://localhost:${port}`);