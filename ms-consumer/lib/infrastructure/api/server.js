const server = require('./app');
const kafka = require('../message-broker/apache-kafka/connection');
const createUserUseCase = require('../../usecase/user/create/create.user.usecase');

const topic = 'create-user';

(async () => {
  await kafka.consumer.connect();
  await kafka.consumer.subscribe({ topic });
  await kafka.consumer.run({
    eachMessage: ({ message }) => {
      const { value } = message;
      const input = JSON.parse(value);
      createUserUseCase.execute(input)
    }
  })
  server.listen(3335, () => console.log('Subiu'));
})()