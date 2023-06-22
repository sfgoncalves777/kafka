const usersRepository = require('../../../entity/user/repository');

const execute = (input) => usersRepository.push(input);

module.exports = { execute };
