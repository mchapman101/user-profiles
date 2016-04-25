var profiles = require('../model/users');
var users = require('../model/profiles');

module.exports = {
  profilePusher: function (req, res, next) {
    var result = profiles;
    req.session.currentUser.filter(function (profiles) {
      return req.session.currentUser.friends;
    });

    res.status(200).json(result);
  },
};
