const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ firstName, email, _id, userType, serviceCategory }) {
    const payload = { firstName, email, _id , userType, serviceCategory};

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  removeNullishFields(obj){
    //bonus - make it recursive so removes nullish fields on nested objects as well
    Object.keys(obj).forEach(key => {
      !obj[key] && delete obj[key]
    });
    return obj;
  }
};

