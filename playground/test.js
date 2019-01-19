const net = require("net");
const server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        socket.write('server reply ' + data);
    });
});

server.listen(8888);