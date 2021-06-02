const net = require("net");
const {host, port, player} = require('./constants')

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host,
    port
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write(`Name: ${player}`);
    
  });
  
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};


module.exports = {
  connect
}