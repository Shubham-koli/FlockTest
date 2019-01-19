var redis = require('redis');
var client = redis.createClient(); // this creates a new client

const net = require("net");
client.on('connect', function () {
    console.log('Redis client connected');
});
client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

const server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        // socket.write('server reply ' + data);
        client.set("Val" + data, "Val" + data, redis.print);
    });
});

server.listen(8888);