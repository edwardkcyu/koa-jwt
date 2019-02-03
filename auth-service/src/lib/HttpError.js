const { HTTP_STATUS } = require('./constants');
class HttpError extends Error {
  constructor({ status = HTTP_STATUS.SERVER_ERROR, code, message }) {
    super();
    this.status = status;
    this.code = code;
    this.message = message;
  }
}

module.exports = HttpError;
