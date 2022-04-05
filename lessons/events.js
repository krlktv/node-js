const Emitter = require('events');

const emitter = new Emitter();

const callback = (data, second, third) => {
  console.log(`You sent message ${data}`);
  console.log(`Second argument ${second}`);
};

emitter.once('message', callback);

emitter.emit('message');
emitter.emit('message');
emitter.emit('message');
emitter.emit('message');
emitter.emit('message');

emitter.removeAllListeners();
emitter.removeListener('message', callback);

// const MESSAGE = process.env.message || '';

// if (MESSAGE) {
//   emitter.emit('message', MESSAGE, 123);
// } else {
//   emitter.emit('message', 'You do not send message');
// }
