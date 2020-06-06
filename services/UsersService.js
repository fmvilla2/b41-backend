const { Users } = require('../models');


module.exports = {
  create: (body) => {
    const newUser = new Users(body);
    return newUser.save(); // .save returns a promise used in 'UsersController'
  },
};
