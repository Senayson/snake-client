let connection;
const handleUserInput = function (data) {
  console.log(data);
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write('Move: up');
    //connection.write('Say: Bel');
  }
  if (data === 's') {
    connection.write('Move: down');
    //connection.write('Say: Bel');
  }
  if (data === 'a') {
    connection.write('Move: left');
    //connection.write('Say: Bel');
  }
  if (data === 'd') {
    connection.write('Move: right');
    //connection.write('Say: Bel');
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
}