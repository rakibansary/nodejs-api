/**
 * errors defined
 */

/**
 * the base error class
 */
class AppError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message || "unknown exception";
  }
}

module.exports = {
  newBadRequestError: (msg) =>
    new AppError(
      400,
      msg ||
        "The request could not be interpreted correctly or some required parameters were missing."
    ),
  newEntityNotFoundError: (msg) =>
    new AppError(404, msg || "The entity does not exist."),
  newAuthError: (msg) => new AppError(401, msg || "Auth failed."),
  newPermissionError: (msg) =>
    new AppError(403, msg || "The entity does not exist."),
  serviceUnavailableError: (msg) =>
    new AppError(503, msg || "One or more services are not available"),
};
