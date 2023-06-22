const express = require('express');
const router = express.Router();

const listUsersUseCase = require('../../../usecase/user/list/list.user.usecase');

router.get('/users', (req, res) => {
  const users = listUsersUseCase.execute(req.body);
  res.json(users);
});

module.exports = router;