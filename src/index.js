const Producer = require('./transports/Producer');

// Defines the configuration object with the addresses of the streaming
// platform consumer and producer.
const config = {
  producer: {
    ip: '127.0.0.1',
    port: 2181,
  },
};

const producer = new Producer(config.producer);
