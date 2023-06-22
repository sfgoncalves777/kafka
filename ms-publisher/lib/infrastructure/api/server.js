const server = require('./app');
const kafka = require('../message-broker/apache-kafka/connection');

(async () => {
  await kafka.producer.connect();
  server.listen(3333, () => console.log('Subiu'));
})()