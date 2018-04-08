const express = require("express"),
      cors = require("cors"),
      app = express(),
      server = require("http").createServer(app),
      io = require("socket.io")(server);

app.use(express.static(__dirname + "/dist"));
app.use(cors({origin: 'http://localhost:4200'}));

// api
var router = express.Router();

var types =  [
  { Name: "Lab Results", Class: "pine-green", Icon: "trending_up" },              //   0, 120, 105
  { Name: "Location", Class: "lightning-yellow", Icon: "location_on" },           // 250, 170,  35
  { Name: "Medical", Class: "eastern-blue", Icon: "local_hospital" },             //   0, 150, 165
  { Name: "Nursing", Class: "french-rose", Icon: "local_hotel" },                 // 240,  95, 145
  { Name: "Pathology", Class: "spice", Icon: "search" },                          // 120,  85,  70
  { Name: "Physiotherapy", Class: "denim", Icon: "directions_walk" },             //  20, 100, 190
  { Name: "Occupational Therapy", Class: "fruit-salad", Icon: "local_florist" },  //  75, 175,  80
  { Name: "Dietics", Class: "light-sky-blue", Icon: "restaurant" },               // 130, 210, 250
  { Name: "Procedural", Class: "cinnabar", Icon: "group_work" }                   // 230,  75,  25
];

router.get('/types', function(req, res) {
  res.json(types);
});

app.use('/api', router);

// sockets
let timerId = null,
    sockets = new Set();

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
      Description: "Some description " + count,
      Type: types[Math.floor(Math.random()*types.length)]
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