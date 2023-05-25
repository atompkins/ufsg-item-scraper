const init = require('./src/init');
const stdout = require('./src/stdout');

console.log(process.version);

init()
  .then(() => stdout('Finished...'))
  .catch((e) => stdout(e));
