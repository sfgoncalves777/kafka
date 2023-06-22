const kafka = require('../../../infrastructure/message-broker/apache-kafka/connection');

const execute = async (input) => {
  await kafka.producer.send({
    topic: 'create-user',
    messages: [
      { key: input.cpf, value: JSON.stringify(input) }
    ]
  });
};

module.exports = { execute };
