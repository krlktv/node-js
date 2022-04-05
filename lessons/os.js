const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length - 2; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(`Worker with pid = ${worker.process.pid} dead`);
    cluster.fork();
  });
} else {
  console.log(`Worker with pid= ${process.pid} launched`);

  setInterval(() => {
    console.log(`Worker with pid= ${process.pid} still launched`);
  }, 5000);
}
