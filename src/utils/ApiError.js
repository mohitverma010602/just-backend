class ApiError extends Error {
  constructor(
    statusCode = 500,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.data = null;

    // Ensuring stack trace is captured
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }

    // Logging the error
    this.logError();
  }

  logError() {
    // Log the error with full stack trace
    console.error(
      `[${new Date().toISOString()}] ${this.name}: ${this.message}\n${
        this.stack
      }`
    );
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode,
      errors: this.errors,
      stack: process.env.NODE_ENV === "production" ? "🔒" : this.stack,
    };
  }
}

export { ApiError };
