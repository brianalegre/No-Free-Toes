const { NormalUser,
    ServiceUser,
    ServiceCategory,
    ServiceComment,
    ServiceType } = require('../models');

const {signToken} = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');



