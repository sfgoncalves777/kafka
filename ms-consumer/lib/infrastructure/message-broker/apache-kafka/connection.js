const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'MS-PUBLISHER',
  brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'consumer-group' });

module.exports = { consumer };
